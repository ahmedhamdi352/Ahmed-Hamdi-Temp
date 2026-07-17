"use client";

import { useEffect } from "react";
import $ from "jquery";

export default function SpotlightEffect() {
    useEffect(() => {
        const handleEffectSpotlight = () => {
            if (!$(".area-effect").length) return;

            $(".area-effect").each(function (this: HTMLElement) {
                const $container = $(this);
                const $spotlight = $container.find(".spotlight");

                $spotlight.css("opacity", "1");

                $container.on("mousemove", function (e: JQuery.MouseEventBase) {
                    const offset = $container.offset();
                    if (!offset) return;

                    const relX = e.pageX - offset.left;
                    const relY = e.pageY - offset.top;

                    $spotlight.css({
                        top: relY,
                        left: relX,
                    });
                });
            });
        };

        handleEffectSpotlight();

        return () => {
            $(".area-effect").off("mousemove.spotlight");
        };
    }, []);

    return null;
}
