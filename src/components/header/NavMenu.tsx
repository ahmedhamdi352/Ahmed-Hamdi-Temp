"use client";
import { useEffect, useRef } from "react";
import "splitting/dist/splitting.css";
import { navItems } from "@data/navItem";

interface NavMenuProps {
    menuId: string;
}

export default function NavMenu({ menuId }: NavMenuProps) {
    const navRef = useRef<HTMLUListElement>(null);

    useEffect(() => {
        import("splitting").then((SplittingModule) => {
            SplittingModule.default({ by: "chars" });
        });
    }, []);
    return (
        <>
            <ul className="nav-menu style-1 lg-hide" ref={navRef}>
                {navItems.map((item) => (
                    <li className="text-menu text_white" key={item.href}>
                        <a
                            href={`${item.href.toLowerCase()}`}
                            className="scroll-link nav_link toggle splitting link link-no-action text-button font-3 fw-6"
                        >
                            <span className="text" data-splitting>
                                {item.label}
                            </span>
                            <span className="text" data-splitting>
                                {item.label}
                            </span>
                        </a>
                    </li>
                ))}
            </ul>

            <div className="d-flex gap_12 align-items-center">
                <a href="#contact" className="tf-btn style-1 animate-hover-btn">
                    <span>Hire Me</span>
                </a>
                <a className="menu-button show-menu-mobile d-lg-none link-no-action" data-target={`#${menuId}`} href="#">
                    <i className="icon-CirclesFour"></i>
                </a>
            </div>
        </>
    );
}
