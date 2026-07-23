"use client";
import React from "react";
import { useEffect } from "react";
import { navItems } from "@data/navItem";
import "splitting/dist/splitting.css";

interface NavMenuProps {
    className?: string;
}

const NavMenu: React.FC<NavMenuProps> = ({ className = "" }) => {
    const isListIcon = className.includes("list-icon");

    useEffect(() => {
        import("splitting").then((SplittingModule) => {
            SplittingModule.default({ by: "chars" });
        });
    }, []);
    return (
        <ul className={`nav-menu ${className}`}>
            {navItems.map((item) => {
                return (
                    <li className={isListIcon ? "" : "text-menu text_white"} key={item.href}>
                        <a
                            href={item.href}
                            className={`scroll-link nav_link ${isListIcon ? "" : "toggle splitting link link-no-action text-button font-3 fw-6"}`}
                        >
                            {isListIcon ? (
                                <>
                                    {item.iconClass && <i className={item.iconClass} />}
                                    <span className="tooltip text-caption-1">{item.label}</span>
                                </>
                            ) : (
                                <>
                                    <span className="text" data-splitting>
                                        {item.label}
                                    </span>
                                    <span className="text" data-splitting>
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
