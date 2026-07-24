import { NextRequest, NextResponse } from "next/server";

export const runtime = "nodejs";

const INQUIRY_TYPES = new Set([
    "Freelance Project",
    "Part-Time Engineering Support",
    "Technical Consulting",
    "Senior Opportunity",
    "Collaboration",
]);
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const RATE_LIMIT_WINDOW_MS = 60_000;
const RATE_LIMIT_MAX_REQUESTS = 3;
const requestLog = new Map<string, number[]>();

interface ContactPayload {
    name?: unknown;
    email?: unknown;
    inquiryType?: unknown;
    message?: unknown;
    company?: unknown;
    budgetRange?: unknown;
    timeline?: unknown;
    companyWebsiteHidden?: unknown;
}

interface ValidatedContact {
    name: string;
    email: string;
    inquiryType: string;
    message: string;
    company: string;
    budgetRange: string;
    timeline: string;
}

function readString(value: unknown) {
    return typeof value === "string" ? value.trim() : "";
}

function validatePayload(payload: ContactPayload): ValidatedContact | null {
    const name = readString(payload.name);
    const email = readString(payload.email);
    const inquiryType = readString(payload.inquiryType);
    const message = readString(payload.message);
    const company = readString(payload.company);
    const budgetRange = readString(payload.budgetRange);
    const timeline = readString(payload.timeline);

    if (
        !name ||
        name.length > 120 ||
        email.length > 254 ||
        !EMAIL_PATTERN.test(email) ||
        inquiryType.length > 80 ||
        !INQUIRY_TYPES.has(inquiryType) ||
        message.length < 20 ||
        message.length > 3000 ||
        company.length > 160 ||
        budgetRange.length > 120 ||
        timeline.length > 120
    ) {
        return null;
    }

    return { name, email, inquiryType, message, company, budgetRange, timeline };
}

function escapeHtml(value: string) {
    return value.replace(/[&<>"']/g, (character) => {
        const entities: Record<string, string> = {
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            '"': "&quot;",
            "'": "&#039;",
        };
        return entities[character];
    });
}

function isRateLimited(identifier: string) {
    const now = Date.now();
    const recentRequests = (requestLog.get(identifier) ?? []).filter(
        (timestamp) => now - timestamp < RATE_LIMIT_WINDOW_MS,
    );

    if (recentRequests.length >= RATE_LIMIT_MAX_REQUESTS) {
        requestLog.set(identifier, recentRequests);
        return true;
    }

    recentRequests.push(now);
    requestLog.set(identifier, recentRequests);
    return false;
}

function getRequestIdentifier(request: NextRequest) {
    return request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";
}

export async function POST(request: NextRequest) {
    let payload: ContactPayload;

    try {
        payload = (await request.json()) as ContactPayload;
    } catch {
        return NextResponse.json({ success: false, message: "Invalid request." }, { status: 400 });
    }

    if (readString(payload.companyWebsiteHidden)) {
        return NextResponse.json({ success: true });
    }

    const contact = validatePayload(payload);
    if (!contact) {
        return NextResponse.json({ success: false, message: "Invalid contact details." }, { status: 400 });
    }

    if (isRateLimited(getRequestIdentifier(request))) {
        return NextResponse.json(
            { success: false, message: "Please wait before sending another message." },
            { status: 429 },
        );
    }

    const apiKey = process.env.RESEND_API_KEY;
    const from = process.env.CONTACT_FROM_EMAIL ?? "Portfolio <onboarding@resend.dev>";
    const to = process.env.CONTACT_TO_EMAIL ?? "ahmedhamdi352@gmail.com";

    if (!apiKey) {
        console.error("Contact form email failed: RESEND_API_KEY is not configured.");
        return NextResponse.json(
            { success: false, message: "Unable to send your message." },
            { status: 500 },
        );
    }

    const values = {
        name: escapeHtml(contact.name),
        email: escapeHtml(contact.email),
        inquiryType: escapeHtml(contact.inquiryType),
        company: escapeHtml(contact.company || "Not provided"),
        budgetRange: escapeHtml(contact.budgetRange || "Not provided"),
        timeline: escapeHtml(contact.timeline || "Not provided"),
        message: escapeHtml(contact.message).replace(/\n/g, "<br />"),
    };
    const requestedIdempotencyKey = request.headers.get("idempotency-key") ?? "";
    const idempotencyKey = /^[A-Za-z0-9_-]{1,128}$/.test(requestedIdempotencyKey)
        ? requestedIdempotencyKey
        : crypto.randomUUID();
    const text = [
        `Name: ${contact.name}`,
        `Email: ${contact.email}`,
        `Inquiry Type: ${contact.inquiryType}`,
        `Company: ${contact.company || "Not provided"}`,
        `Budget Range: ${contact.budgetRange || "Not provided"}`,
        `Timeline: ${contact.timeline || "Not provided"}`,
        "",
        "Message:",
        contact.message,
        "",
        "Source: Portfolio contact form",
    ].join("\n");

    try {
        const response = await fetch("https://api.resend.com/emails", {
            method: "POST",
            headers: {
                Authorization: `Bearer ${apiKey}`,
                "Content-Type": "application/json",
                "Idempotency-Key": idempotencyKey,
            },
            body: JSON.stringify({
                from,
                to: [to],
                reply_to: contact.email,
                subject: `New portfolio inquiry — ${contact.inquiryType}`,
                html: `
                    <h2>New portfolio inquiry</h2>
                    <p><strong>Name:</strong> ${values.name}</p>
                    <p><strong>Email:</strong> ${values.email}</p>
                    <p><strong>Inquiry Type:</strong> ${values.inquiryType}</p>
                    <p><strong>Company:</strong> ${values.company}</p>
                    <p><strong>Budget Range:</strong> ${values.budgetRange}</p>
                    <p><strong>Timeline:</strong> ${values.timeline}</p>
                    <p><strong>Message:</strong><br />${values.message}</p>
                    <p><strong>Source:</strong> Portfolio contact form</p>
                `,
                text,
            }),
        });

        if (!response.ok) {
            const providerError = await response.text();
            console.error("Contact form email provider error:", response.status, providerError);
            return NextResponse.json(
                { success: false, message: "Unable to send your message." },
                { status: 502 },
            );
        }

        return NextResponse.json({ success: true });
    } catch (error) {
        console.error("Contact form email request failed:", error);
        return NextResponse.json(
            { success: false, message: "Unable to send your message." },
            { status: 500 },
        );
    }
}
