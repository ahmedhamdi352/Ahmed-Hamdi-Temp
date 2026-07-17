"use client";
import { useEffect, useRef, useState } from "react";
import "odometer/themes/odometer-theme-default.css";

interface OdometerComponentProps {
    value: number;
}

export default function OdometerComponent({ value }: OdometerComponentProps) {
    const odometerRef = useRef<HTMLDivElement>(null);
    const [hasAnimated, setHasAnimated] = useState(false);

    useEffect(() => {
        if (hasAnimated) return;

        let observer: IntersectionObserver;

        const initObserver = async () => {
            try {
                const { default: Odometer } = await import("odometer");

                observer = new IntersectionObserver(
                    (entries) => {
                        const entry = entries[0];
                        if (entry.isIntersecting && odometerRef.current) {
                            setHasAnimated(true);

                            const od = new Odometer({
                                el: odometerRef.current,
                                value: 0,
                                format: "(,ddd)",
                                theme: "default",
                            });
                            od.update(value);
                            observer.disconnect();
                        }
                    },
                    { threshold: 0.5 }
                );

                if (odometerRef.current) {
                    observer.observe(odometerRef.current);
                }
            } catch (err) {
                console.error("Failed to load Odometer or observe:", err);
            }
        };

        initObserver();

        return () => {
            if (observer) observer.disconnect();
        };
    }, [value, hasAnimated]);

    return <div ref={odometerRef} className="odometer" />;
}
