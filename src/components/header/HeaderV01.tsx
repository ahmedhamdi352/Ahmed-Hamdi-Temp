"use client";
import Image from "next/image";
import { useEffect, useId } from "react";
import NavMenu from "@components/nav-menu/NavMenu";
import { initScrollLinks } from "@utils/scrollLink";

interface HeaderProps {
    className?: string;
    navMenuClass?: string;
    type?: string;
    showMobileMenu?: boolean;
}

export function HeaderSticky() {
    useEffect(() => {
        const header = document.querySelector(".header-fixed");
        if (!header) return;

        let isFixed = false;
        const scrollThreshold = 350;

        const handleScroll = () => {
            const shouldBeFixed = window.scrollY >= scrollThreshold;
            if (shouldBeFixed !== isFixed) {
                header.classList.toggle("is-fixed", shouldBeFixed);
                isFixed = shouldBeFixed;
            }
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        handleScroll();

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);
}

export function useSidebarClick(popupId: string) {
    useEffect(() => {
        const handleSidebar = (e: Event) => {
            const target = e.target as HTMLElement;

            const showMenuBtn = target.closest(".show-menu-mobile") as HTMLElement | null;
            if (showMenuBtn) {
                e.preventDefault();
                const menuSelector = showMenuBtn.dataset.target;
                if (!menuSelector || menuSelector !== `#${popupId}`) return;

                const targetMenu = document.querySelector(menuSelector);
                const overlay = document.querySelector(".overlay-popup");
                if (!targetMenu || !overlay) return;

                const isOpen = targetMenu.classList.contains("show");

                document.querySelectorAll(".popup-menu-mobile").forEach((el) => el.classList.remove("show"));
                overlay.classList.remove("show");

                if (!isOpen) {
                    targetMenu.classList.add("show");
                    overlay.classList.add("show");
                }

                return;
            }

            if (target.classList.contains("overlay-popup")) {
                document.querySelectorAll(".popup-menu-mobile, .overlay-popup").forEach((el) => el.classList.remove("show"));
                return;
            }

            const navLink = target.closest(".nav_link") as HTMLElement | null;
            if (navLink) {
                document.querySelectorAll(".popup-menu-mobile, .overlay-popup").forEach((el) => el.classList.remove("show"));
                return;
            }
        };

        document.addEventListener("click", handleSidebar);

        return () => {
            document.removeEventListener("click", handleSidebar);
        };
    }, [popupId]);
}

export function AvatarBox() {
    return (
        <div className="box">
            <div className="avatar">
                <Image src="/assets/images/user/avatar-2.webp" width={68} height={68} alt="avatar" />
            </div>
            <div className="info">
                <h6 className="font-4 mb_4">Ahmed Hamdi</h6>
                <div className="text-label text-uppercase fw-6 text_primary-color font-3 letter-spacing-1">Senior Full Stack Engineer</div>
            </div>
        </div>
    );
}

export default function HeaderV01({ className, navMenuClass, type, showMobileMenu = true }: HeaderProps) {
    const uniqueId = useId();
    const popupId = `menu-${uniqueId.replace(/:/g, "")}`;
    useSidebarClick(popupId);
    HeaderSticky();

    useEffect(() => {
        initScrollLinks();
    }, []);

    if (type === "header-type-2") {
        return (
            <div className={`header-sidebar style-horizontal bs-light-mode  ${className}`}>
                <AvatarBox />
                <NavMenu className={`style-2 list-icon`} />
                <a className="menu-button show-menu-mobile d-sm-none link-no-action" data-target={`#${popupId}`} href="#">
                    <i className="icon-CirclesFour"></i>
                </a>
                <div className="popup-menu-mobile" id={popupId}>
                    <NavMenu className={"style-3"} />
                </div>
            </div>
        );
    }

    return (
        <header className={`header ${className}`}>
            <div className="tf-container w-6">
                <div className="header-sidebar style-1">
                    <AvatarBox />
                    <NavMenu className={`style-1 lg-hide ${navMenuClass ?? ""}`} />
                    <div className="d-flex gap_12 align-items-center">
                        <a href="#contact" className="tf-btn style-1 animate-hover-btn">
                            <span>Hire Me</span>
                        </a>
                        {showMobileMenu && (
                            <>
                                <a className="menu-button show-menu-mobile d-lg-none link-no-action" data-target={`#${popupId}`} href="#">
                                    <i className="icon-CirclesFour"></i>
                                </a>
                                <div className="popup-menu-mobile" id={popupId}>
                                    <NavMenu className={navMenuClass ?? "style-3"} />
                                </div>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </header>
    );
}
