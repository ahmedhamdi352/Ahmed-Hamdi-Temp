import type { Metadata } from "next";
import Script from "next/script";
import { Inter, Sora, Epilogue } from "next/font/google";
import "bootstrap/dist/css/bootstrap.min.css";
import "@assets/font/fonts.css";
import "@assets/scss/app.scss";
import "@assets/icons/icomoon/style.css";

const sora = Sora({
    subsets: ["latin"],
    weight: ["400", "500", "600", "700"],
    variable: "--font-sora",
    display: "swap",
});

const inter = Inter({
    subsets: ["latin"],
    weight: ["400", "500", "600", "700"],
    variable: "--font-inter",
    display: "swap",
});

const epilogue = Epilogue({
    subsets: ["latin"],
    weight: ["400", "500", "600", "700"],
    variable: "--font-epilogue",
    display: "swap",
});

export const metadata: Metadata = {
    title: "Ahmed Hamdi | Senior Full Stack Engineer",
    description:
        "Dubai-based Senior Full Stack Engineer building enterprise web platforms, AI-enabled systems, dashboards, and internal tools.",
    icons: {
        icon: {
            url: "assets/images/logo/favicon.svg",
        },
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <head>
                <Script src="/libs/ScrollSmooth.js" strategy="afterInteractive"></Script>
            </head>
            <body className={`${sora.variable} ${inter.variable} ${epilogue.variable}`}>{children}</body>
        </html>
    );
}
