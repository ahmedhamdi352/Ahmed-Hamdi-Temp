"use client";

import React, { useState, useEffect } from "react";
import $ from "jquery";
import SpotlightEffect from "../common/SpotlightEffect";

interface PricingProps {
    className?: string;
}

export default function PricingSection({ className = "" }: PricingProps) {
    const [activeTab, setActiveTab] = useState<"standard" | "premium">("standard");

    useEffect(() => {
        const tabSlide = () => {
            if ($(".tab-slide").length > 0) {
                const updateTabSlide = () => {
                    const $activeTab = $(".tab-slide li.active");
                    if ($activeTab.length > 0) {
                        const $width = $activeTab.outerWidth() || 0;
                        const $left = $activeTab.position().left || 0;
                        const $sideEffect = $activeTab.parent().find(".item-slide-effect");
                        $sideEffect.css({
                            width: $width,
                            transform: `translateX(${$left}px)`,
                        });
                    }
                };

                $(".tab-slide li").on("click", function () {
                    const $itemTab = $(this).parent().find("li");
                    $itemTab.removeClass("active");
                    $(this).addClass("active");

                    const $width = $(this).outerWidth() || 0;
                    const $left = $(this).position().left || 0;
                    const $sideEffect = $(this).parent().find(".item-slide-effect");
                    $sideEffect.css({
                        width: $width,
                        transform: `translateX(${$left}px)`,
                    });
                });

                $(window).on("resize", updateTabSlide);
                updateTabSlide();
            }
        };

        tabSlide();

        return () => {
            // cleanup to prevent memory leak
            $(".tab-slide li").off("click");
            $(window).off("resize");
        };
    }, []);
    return (
        <section id="pricing" className={`section-pricing flat-animate-tab ${className}`}>
            <SpotlightEffect />
            <div className="heading-section mb_42">
                <div className="tag-heading text-uppercase text-label font-3 letter-spacing-1 mb_30">Pricing</div>
                <h3 className="text_white fw-5 split-text effect-blur-fade">My Pricing</h3>
            </div>

            <div className="tab-slide mb_32">
                <ul className="menu-tab d-flex align-items-center" role="tablist">
                    <li className="item-slide-effect" />
                    <li className={`nav-tab-item ${activeTab === "standard" ? "active" : ""}`} role="presentation">
                        <a
                            href="#standard-plan"
                            className={`text-button tab-link fw-6 font-3 ${activeTab === "standard" ? "active" : ""}`}
                            onClick={(e) => {
                                e.preventDefault();
                                setActiveTab("standard");
                            }}
                        >
                            Standard Plan
                        </a>
                    </li>
                    <li className={`nav-tab-item ${activeTab === "premium" ? "active" : ""}`} role="presentation">
                        <a
                            href="#premium-plan"
                            className={`text-button tab-link fw-6 font-3 ${activeTab === "premium" ? "active" : ""}`}
                            onClick={(e) => {
                                e.preventDefault();
                                setActiveTab("premium");
                            }}
                        >
                            Premium Plan
                        </a>
                    </li>
                </ul>
            </div>

            <div className="tab-content">
                {/* Standard Plan */}
                <div className={`tab-pane ${activeTab === "standard" ? "active show" : ""}`} id="standard-plan" role="tabpanel">
                    <div className="pricing-item style-1 bs-light-mode area-effect">
                        <h4 className="title">
                            Standard <br />
                            Plan
                        </h4>
                        <ul className="list-check d-grid gap_8">
                            <li className="text-body-1 text_white font-3 d-flex align-items-center gap_8">
                                <i className="icon-check"></i>60 keywords
                            </li>
                            <li className="text-body-1 text_white font-3 d-flex align-items-center gap_8">
                                <i className="icon-check"></i>6,000 monthly website visitors
                            </li>
                            <li className="text-body-1 text_white font-3 d-flex align-items-center gap_8">
                                <i className="icon-check"></i>8 blogs / month
                            </li>
                            <li className="text-body-1 text_white font-3 d-flex align-items-center gap_8">
                                <i className="icon-check"></i>10 quality backlinks / month
                            </li>
                        </ul>
                        <div className="wrap-pricing">
                            <h3 className="text_white d-flex align-items-center gap_4 mb_20">
                                $29 <span className="text-caption-1 text_muted-color">/per hour</span>
                            </h3>
                            <a href="#contact" className="tf-btn style-1 animate-hover-btn">
                                <span>Get Started !</span>
                            </a>
                        </div>
                        <div className="item-shape spotlight">
                            <img src="/assets/images/item/small-comet.webp" alt="item" loading="lazy" />
                        </div>
                    </div>
                </div>

                {/* Premium Plan */}
                <div className={`tab-pane ${activeTab === "premium" ? "active show" : ""}`} id="premium-plan" role="tabpanel">
                    <div className="pricing-item style-1 bs-light-mode area-effect">
                        <h4 className="title">Premium Plan</h4>
                        <ul className="list-check d-grid gap_8">
                            <li className="text-body-1 text_white font-3 d-flex align-items-center gap_8">
                                <i className="icon-check"></i>60 keywords
                            </li>
                            <li className="text-body-1 text_white font-3 d-flex align-items-center gap_8">
                                <i className="icon-check"></i>6,000 monthly website visitors
                            </li>
                            <li className="text-body-1 text_white font-3 d-flex align-items-center gap_8">
                                <i className="icon-check"></i>8 blogs / month
                            </li>
                            <li className="text-body-1 text_white font-3 d-flex align-items-center gap_8">
                                <i className="icon-check"></i>10 quality backlinks / month
                            </li>
                        </ul>
                        <div className="wrap-pricing">
                            <h3 className="text_white d-flex align-items-center gap_4 mb_20">
                                $39 <span className="text-caption-1 text_muted-color">/per hour</span>
                            </h3>
                            <a href="#contact" className="tf-btn style-1 animate-hover-btn">
                                <span>Get Started !</span>
                            </a>
                        </div>
                        <div className="item-shape spotlight">
                            <img src="/assets/images/item/small-comet.webp" alt="item" loading="lazy" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
