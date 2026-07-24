"use client";
import { useEffect, useState } from "react";
import NavMenu from "@components/nav-menu/NavMenu";
import { initScrollLinks } from "@utils/scrollLink";

export default function NavMenuRight() {
    const [isDesktop, setIsDesktop] = useState(false);

    useEffect(() => {
        initScrollLinks();

        const mediaQuery = window.matchMedia("(min-width: 768px)");
        const updateViewport = () => setIsDesktop(mediaQuery.matches);

        updateViewport();
        mediaQuery.addEventListener("change", updateViewport);

        return () => mediaQuery.removeEventListener("change", updateViewport);
    }, []);

    return (
        <div className="nav-right area-effect md-hide" aria-hidden={!isDesktop} inert={isDesktop ? undefined : true}>
            <NavMenu className="nav-menu list-icon d-flex flex-column" interactive={isDesktop} />
            <div className="wrap">
                <div className="item-shape spotlight">
                    <img src="/assets/images/item/small-comet.png" alt="item" />
                </div>
            </div>
        </div>
    );
}
