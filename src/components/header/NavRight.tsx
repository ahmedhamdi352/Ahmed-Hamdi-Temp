"use client";
import { useEffect } from "react";
import NavMenu from "@components/nav-menu/NavMenu";
import { initScrollLinks } from "@utils/scrollLink";

export default function NavMenuRight() {
    useEffect(() => {
        initScrollLinks();
    }, []);

    return (
        <div className="nav-right area-effect md-hide">
            <NavMenu className={`nav-menu list-icon d-flex flex-column`} />
            <div className="wrap">
                <div className="item-shape spotlight">
                    <img src="/assets/images/item/small-comet.png" alt="item" />
                </div>
            </div>
        </div>
    );
}
