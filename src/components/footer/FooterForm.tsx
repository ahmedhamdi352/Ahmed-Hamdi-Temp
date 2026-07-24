"use client";

import React, { useRef, useState } from "react";

const INQUIRY_TYPES = [
    "Freelance Project",
    "Part-Time Engineering Support",
    "Technical Consulting",
    "Senior Opportunity",
    "Collaboration",
] as const;

interface FormData {
    name: string;
    email: string;
    inquiryType: string;
    message: string;
    companyWebsiteHidden: string;
}

type FormErrors = Partial<Record<keyof FormData, string>>;
type SubmitStatus = "idle" | "loading" | "success" | "error";

const INITIAL_FORM_DATA: FormData = {
    name: "",
    email: "",
    inquiryType: "",
    message: "",
    companyWebsiteHidden: "",
};

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validateForm(formData: FormData): FormErrors {
    const errors: FormErrors = {};

    if (!formData.name.trim()) {
        errors.name = "Please enter your name.";
    }

    if (!formData.email.trim()) {
        errors.email = "Please enter your email address.";
    } else if (!EMAIL_PATTERN.test(formData.email.trim())) {
        errors.email = "Please enter a valid email address.";
    }

    if (!formData.inquiryType) {
        errors.inquiryType = "Please select an inquiry type.";
    }

    if (!formData.message.trim()) {
        errors.message = "Please enter a message.";
    } else if (formData.message.trim().length < 20) {
        errors.message = "Your message must be at least 20 characters.";
    }

    return errors;
}

export default function ContactForm() {
    const [formData, setFormData] = useState<FormData>(INITIAL_FORM_DATA);
    const [errors, setErrors] = useState<FormErrors>({});
    const [status, setStatus] = useState<SubmitStatus>("idle");
    const isSubmittingRef = useRef(false);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const field = event.target.name as keyof FormData;
        const value = event.target.value;

        setFormData((current) => ({ ...current, [field]: value }));
        setErrors((current) => {
            if (!current[field]) return current;
            const nextErrors = { ...current };
            delete nextErrors[field];
            return nextErrors;
        });

        if (status !== "idle") setStatus("idle");
    };

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (isSubmittingRef.current) return;

        const validationErrors = validateForm(formData);
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            setStatus("idle");
            return;
        }

        setErrors({});
        setStatus("loading");
        isSubmittingRef.current = true;

        try {
            const response = await fetch("/api/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Idempotency-Key": crypto.randomUUID(),
                },
                body: JSON.stringify({
                    ...formData,
                    name: formData.name.trim(),
                    email: formData.email.trim(),
                    message: formData.message.trim(),
                }),
            });
            const result = (await response.json()) as { success?: boolean };

            if (!response.ok || !result.success) {
                throw new Error("Contact request failed");
            }

            setFormData(INITIAL_FORM_DATA);
            setStatus("success");
        } catch {
            setStatus("error");
        } finally {
            isSubmittingRef.current = false;
        }
    };

    return (
        <form className="form-contact bs-light-mode" onSubmit={handleSubmit} noValidate>
            <div className="d-grid gap_24 mb_24">
                <fieldset>
                    <input
                        id="name"
                        type="text"
                        placeholder="Your name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        maxLength={120}
                        autoComplete="name"
                        aria-invalid={Boolean(errors.name)}
                        aria-describedby={errors.name ? "name-error" : undefined}
                        required
                    />
                    {errors.name && <p id="name-error" className="field-error font-3">{errors.name}</p>}
                </fieldset>
                <fieldset>
                    <input
                        id="email"
                        type="email"
                        placeholder="Your email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        maxLength={254}
                        autoComplete="email"
                        aria-invalid={Boolean(errors.email)}
                        aria-describedby={errors.email ? "email-error" : undefined}
                        required
                    />
                    {errors.email && <p id="email-error" className="field-error font-3">{errors.email}</p>}
                </fieldset>
                <fieldset>
                    <select
                        id="inquiryType"
                        name="inquiryType"
                        value={formData.inquiryType}
                        onChange={handleChange}
                        aria-label="Inquiry type"
                        aria-invalid={Boolean(errors.inquiryType)}
                        aria-describedby={errors.inquiryType ? "inquiry-type-error" : undefined}
                        required
                    >
                        <option value="" disabled>Inquiry type</option>
                        {INQUIRY_TYPES.map((inquiryType) => (
                            <option key={inquiryType} value={inquiryType}>{inquiryType}</option>
                        ))}
                    </select>
                    {errors.inquiryType && <p id="inquiry-type-error" className="field-error font-3">{errors.inquiryType}</p>}
                </fieldset>
                <fieldset>
                    <textarea
                        id="message"
                        rows={4}
                        placeholder="Your message..."
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        minLength={20}
                        maxLength={3000}
                        aria-invalid={Boolean(errors.message)}
                        aria-describedby={errors.message ? "message-error" : undefined}
                        required
                    />
                    {errors.message && <p id="message-error" className="field-error font-3">{errors.message}</p>}
                </fieldset>
                <div className="contact-honeypot" aria-hidden="true">
                    <label htmlFor="companyWebsiteHidden">Company website</label>
                    <input
                        id="companyWebsiteHidden"
                        type="text"
                        name="companyWebsiteHidden"
                        value={formData.companyWebsiteHidden}
                        onChange={handleChange}
                        tabIndex={-1}
                        autoComplete="off"
                    />
                </div>
            </div>

            <div className="button-submit">
                <button className="tf-btn style-1 animate-hover-btn" type="submit" disabled={status === "loading"}>
                    <span>{status === "loading" ? "Sending..." : "Send Message"}</span>
                </button>
            </div>

            <div className="form-status text-body-2 font-3" aria-live="polite">
                {status === "success" && (
                    <div className="form-status-success" role="status">
                        <div className="success-flight" aria-hidden="true">
                            <span className="success-spark success-spark-1" />
                            <span className="success-spark success-spark-2" />
                            <span className="success-spark success-spark-3" />
                            <svg className="success-envelope" viewBox="0 0 40 32" fill="none">
                                <rect x="2" y="3" width="36" height="26" rx="6" stroke="currentColor" strokeWidth="2" />
                                <path d="m4 7 13.1 10.1a4.7 4.7 0 0 0 5.8 0L36 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            <span className="success-check">
                                <svg viewBox="0 0 20 20" fill="none">
                                    <path d="m5.25 10.15 3.05 3.1 6.45-6.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </span>
                        </div>
                        <p>
                            Thanks — your message has been sent successfully. I’ll get back to you soon.
                        </p>
                    </div>
                )}
                {status === "error" && (
                    <p className="form-status-error">
                        Something went wrong while sending your message. Please try again or contact me directly by email.
                    </p>
                )}
            </div>

            <div className="item-shape">
                <img src="/assets/images/item/small-comet.webp" loading="lazy" decoding="async" alt="item" />
            </div>
        </form>
    );
}
