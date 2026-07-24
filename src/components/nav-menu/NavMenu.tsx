"use client";
import React from "react";
import { useEffect } from "react";
import { navItems } from "@data/navItem";
import "splitting/dist/splitting.css";

interface NavMenuProps {
    className?: string;
    interactive?: boolean;
}

const NavMenu: React.FC<NavMenuProps> = ({ className = "", interactive = true }) => {
    const isListIcon = className.includes("list-icon");

    useEffect(() => {
        import("splitting").then((SplittingModule) => {
            SplittingModule.default({ by: "chars" });
        });
    }, []);
    return (
        <ul
            className={`nav-menu ${className}`}
            aria-hidden={!interactive}
            inert={interactive ? undefined : true}
        >
            {navItems.map((item) => {
                return (
                    <li className={isListIcon ? "" : "text-menu text_white"} key={item.href}>
                        <a
                            href={item.href}
                            tabIndex={interactive ? undefined : -1}
                            aria-label={item.label}
                            className={`scroll-link nav_link ${isListIcon ? "" : "toggle splitting link link-no-action text-button font-3 fw-6"}`}
                        >
                            {isListIcon ? (
                                <>
                                    {item.iconClass && <i className={item.iconClass} aria-hidden="true" />}
                                    <span className="tooltip text-caption-1" aria-hidden="true">{item.label}</span>
                                </>
                            ) : (
                                <>
                                    <span className="text" data-splitting aria-hidden="true">
                                        {item.label}
                                    </span>
                                    <span className="text" data-splitting aria-hidden="true">
                                        {item.label}
                                    </span>
                                </>
                            )}
                        </a>
                    </li>
                );
            })}
        </ul>
    );
};

export default NavMenu;
