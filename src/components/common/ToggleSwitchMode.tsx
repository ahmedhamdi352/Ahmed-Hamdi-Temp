"use client";

import { useEffect, useState } from "react";

export default function ToggleSwitchMode() {
    const [isDarkMode, setIsDarkMode] = useState(false);

    useEffect(() => {
        const body = document.body;
        const logoHeader = document.querySelector<HTMLImageElement>(".main-logo");
        const logoMobile = document.querySelector<HTMLImageElement>("#logo_header_mobile");

        const tflight = logoHeader?.dataset.light ?? "";
        const tfdark = logoHeader?.dataset.dark ?? "";

        const savedMode = localStorage.getItem("darkMode");
        const defaultMode = body.dataset.defaultMode || "light";
        const isDarkInitially = savedMode ? savedMode === "enabled" : defaultMode === "dark";

        setIsDarkMode(isDarkInitially);
        body.classList.toggle("dark-mode", isDarkInitially);
        updateLogos(isDarkInitially, logoHeader, logoMobile, tflight, tfdark);
    }, []);

    const toggleMode = () => {
        const newMode = !isDarkMode;
        setIsDarkMode(newMode);

        const body = document.body;
        body.classList.toggle("dark-mode", newMode);

        const logoHeader = document.querySelector<HTMLImageElement>(".main-logo");
        const logoMobile = document.querySelector<HTMLImageElement>("#logo_header_mobile");

        const tflight = logoHeader?.dataset.light ?? "";
        const tfdark = logoHeader?.dataset.dark ?? "";

        updateLogos(newMode, logoHeader, logoMobile, tflight, tfdark);

        localStorage.setItem("darkMode", newMode ? "enabled" : "disabled");
    };

    const updateLogos = (
        isDark: boolean,
        logoHeader: HTMLImageElement | null,
        logoMobile: HTMLImageElement | null,
        lightSrc: string,
        darkSrc: string
    ) => {
        const src = isDark ? darkSrc : lightSrc;
        if (logoHeader) logoHeader.src = src;
        if (logoMobile) logoMobile.src = src;
    };

    return (
        <div className={`toggle-switch-mode ${isDarkMode ? "active" : ""}`} onClick={toggleMode}>
            <i className="icon-Sun" />
        </div>
    );
}
