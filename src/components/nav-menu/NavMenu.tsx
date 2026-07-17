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
                const hasSubMenu = !!item.subMenu;
                if (isListIcon && item.label === "Demos") return null;
                const isStyle3 = className.includes("style-3");
                const isDemosItem = item.label === "Demos";

                if (isStyle3 && isDemosItem) {
                    return (
                        <li className="menu-item menu-item-has-children-mobile" key={item.href}>
                            <a
                                href="#dropdown-menu-one"
                                className="item-menu-mobile collapsed text-button font-3 fw-6 text_white"
                                data-bs-toggle="collapse"
                                aria-expanded="true"
                                aria-controls="dropdown-menu-one"
                            >
                                {item.label}
                            </a>
                            <div id="dropdown-menu-one" className="collapse" data-bs-parent="#menu-mobile-menu">
                                <ul className="sub-mobile">
                                    {item.subMenu?.map((sub, subIdx) => (
                                        <li key={subIdx}>
                                            <a href={sub.link}>{sub.name}</a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </li>
                    );
                }

                return (
                    <li className={isListIcon ? "" : `text-menu text_white ${hasSubMenu ? " has-child" : ""}`} key={item.href}>
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
                        {item.subMenu && (
                            <ul className="submenu">
                                {item.subMenu.map((itSub, idSub) => (
                                    <li key={idSub}>
                                        <a href={itSub.link}>{itSub.name}</a>
                                    </li>
                                ))}
                            </ul>
                        )}
                    </li>
                );
            })}
        </ul>
    );
};

export default NavMenu;
