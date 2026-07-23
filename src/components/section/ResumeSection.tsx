"use client";

import { resumeItems, ResumeSectionProps } from "@data/resume";
import { useEffect, useRef, useState } from "react";

export default function ResumeSection({ className = "", onPreviewChange }: ResumeSectionProps) {
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [isInlineMode, setIsInlineMode] = useState(false);
    const sectionRef = useRef<HTMLDivElement | null>(null);
    const selectedItem = resumeItems[selectedIndex];

    const selectItem = (index: number) => {
        setSelectedIndex(index);
        if (isInlineMode) {
            onPreviewChange?.(null);
        } else {
            onPreviewChange?.(resumeItems[index]);
        }
    };

    useEffect(() => {
        const mediaQuery = window.matchMedia("(max-width: 1023px)");
        const syncMode = () => {
            setIsInlineMode(mediaQuery.matches);
            if (mediaQuery.matches) onPreviewChange?.(null);
        };

        syncMode();
        mediaQuery.addEventListener("change", syncMode);
        return () => mediaQuery.removeEventListener("change", syncMode);
    }, [onPreviewChange]);

    useEffect(() => {
        const section = sectionRef.current;
        if (!section || !onPreviewChange) return;

        const observer = new IntersectionObserver(([entry]) => {
            if (!entry.isIntersecting) onPreviewChange(null);
        }, { threshold: 0.05 });
        observer.observe(section);

        return () => observer.disconnect();
    }, [onPreviewChange]);

    return (
        <div
            ref={sectionRef}
            id="resume"
            className={`section-resume ${className}`}
            onMouseLeave={() => {
                if (!isInlineMode) onPreviewChange?.(null);
            }}
            onBlur={(event) => {
                if (!isInlineMode && !event.currentTarget.contains(event.relatedTarget)) onPreviewChange?.(null);
            }}
        >
            <div className="heading-section mb_47">
                <div className="tag-heading text-uppercase text-label font-3 letter-spacing-1 mb_30">Resume</div>
                <h3 className="text_white fw-5 split-text effect-blur-fade">Education & Experience</h3>
            </div>

            <div className="effect-line-hover">
                {resumeItems.map((item, idx) => (
                    <div
                        key={`${item.company}-${item.date}`}
                        className={`wrap-education-item area-effect scrolling-effect effectTop${selectedIndex === idx ? " is-active" : ""}`}
                        onMouseEnter={() => {
                            if (!isInlineMode) {
                                setSelectedIndex(idx);
                                onPreviewChange?.(item);
                            }
                        }}
                        onClick={() => {
                            selectItem(idx);
                        }}
                    >
                        <span className="point" />
                        <div className="education-item">
                            <div className="content">
                                <h5 className="font-4 mb_4">
                                    <button
                                        type="button"
                                        className="link resume-title-button"
                                        aria-pressed={selectedIndex === idx}
                                        onFocus={() => {
                                            if (isInlineMode) {
                                                selectItem(idx);
                                            } else {
                                                setSelectedIndex(idx);
                                                onPreviewChange?.(item);
                                            }
                                        }}
                                        onClick={(event) => {
                                            event.stopPropagation();
                                            selectItem(idx);
                                        }}
                                    >
                                        {item.title}
                                    </button>
                                </h5>
                                <span className="text-body-1 font-3">{item.company}</span>
                            </div>
                            <div className="date text-caption-1 text_white font-3">{item.date}</div>
                            <div className="item-shape spotlight">
                                <img src="/assets/images/item/small-comet.webp" alt="item" loading="lazy" />
                            </div>
                        </div>
                        {selectedIndex === idx && (
                            <div className="resume-inline-detail bs-light-mode" aria-live="polite">
                                <h5 className="font-4 text_white mb_8">{selectedItem.title}</h5>
                                <p className="resume-inline-meta text-caption-1 font-3 mb_12">
                                    <span className="text_primary-color">{selectedItem.company}</span>
                                    <span className="text_secondary-color">{selectedItem.date}</span>
                                </p>
                                <p className="resume-inline-description text-body-2 text_muted-color font-3 mb_12">
                                    {selectedItem.compactDescription}
                                </p>
                                <div className="text-label text-uppercase fw-6 text_primary-color font-3 mb_8 letter-spacing-1">
                                    Key Focus
                                </div>
                                <ul className="resume-inline-list text-caption-2 text_white font-3">
                                    {selectedItem.compactHighlights.map((highlight) => (
                                        <li key={highlight}>{highlight}</li>
                                    ))}
                                </ul>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}
