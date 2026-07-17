import React from "react";
import clsx from "clsx";
import ToggleSwitchMode from "@components/common/ToggleSwitchMode";

interface RightBarProps {
    className?: string;
}

export default function RightBar({ className }: RightBarProps) {
    return (
        <div className={clsx("right-bar style-1 d-flex flex-column align-items-center", className)}>
            <ul className="list-icon menu-option d-flex flex-column gap_8">
                <li>
                    <ToggleSwitchMode />
                </li>
                <li>
                    <a href="#setting-menu" role="button" aria-controls="setting-menu" data-bs-toggle="offcanvas">
                        <i className="icon-GearSix" />
                    </a>
                </li>
            </ul>
        </div>
    );
}
