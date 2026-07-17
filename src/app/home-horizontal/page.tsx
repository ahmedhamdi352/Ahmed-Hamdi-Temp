"use client";
import { Footer2 } from "@components/footer/Footer";
import UserBar from "@components/header/UserBar";
import Layout from "@components/layout/Layout";
import AboutSection from "@components/section/AboutSection";
import ResumeSection from "@components/section/ResumeSection";
import HeaderV01 from "@components/header/HeaderV01";
import ServiceSection from "@components/section/ServiceSection";
import { PortfolioStack } from "@components/section/PortfolioSection";
import { SectionTesttimonial2 } from "@components/section/TestimonialSection";
import PricingSection from "@components/section/PricingSection";
import PartnerSection from "@components/section/PartnerSection";
import SpotlightEffect from "@components/common/SpotlightEffect";
import ToggleSwitchMode from "@components/common/ToggleSwitchMode";
import SettingMenu from "@/src/components/common/MenuColor";
import React from "react";
import { useState } from "react";

export default function Home() {
    const [show, setShow] = useState(false);
    const [isActive, setIsActive] = useState(false);
    const togglePopup = (e: React.MouseEvent) => {
        e.preventDefault();
        setShow((prev) => !prev);
        setIsActive(!isActive);
    };

    return (
        <Layout>
            <div className="body-overlay d-block">
                <div className="bg-shape"></div>
            </div>
            <SpotlightEffect />
            <SettingMenu />

            <div className="overlay-popup"></div>

            <div className="header header-fixed style-1">
                <div className="tf-container w-2">
                    <div className="row">
                        <div className="offset-xxl-4 col-xxl-7 offset-xl-4 col-xl-7">
                            <HeaderV01 type="header-type-2" />
                        </div>
                    </div>
                </div>
            </div>

            <div className={`popup-show-bar${show ? " show" : ""}`}>
                <div className="tf-container w-6">
                    <HeaderV01 className="style-1" showMobileMenu={false} />
                </div>
            </div>

            <div className="tf-container w-2">
                <div className="row">
                    <div className="offset-xxl-4 col-xxl-7 offset-xl-4 col-xl-7">
                        <div className="main-content section-onepage">
                            <HeaderV01 type="header-type-2" />

                            <UserBar />
                            <AboutSection className="section spacing-1" />
                            <ResumeSection className="spacing-1 section" />
                            <ServiceSection className="spacing-1 section" />
                            <PortfolioStack />
                            <SectionTesttimonial2 className="section spacing-1 " />
                            <PricingSection className="spacing-1 section" />
                            <PartnerSection layoutType="type2" />
                            <Footer2 />
                            <p className="font-3 text_secondary-color">© 2025 ZenG. All Rights Reserved.</p>
                        </div>
                        <div className="footer-logo footer-container text-center ">
                            <img src="/assets/images/logo/footer-logo.png" className="lazyload" width="755" height="295" alt="footer" />
                        </div>
                        <div className="right-bar style-1 d-flex flex-column align-items-center">
                            <ul className="list-icon menu-option d-flex flex-column gap_8">
                                <li>
                                    <a href="#" className={`link-no-action show-sidebar ${isActive ? "active" : ""}`} onClick={togglePopup}>
                                        <i className="icon-CirclesFour"></i>
                                    </a>
                                </li>
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
                    </div>
                </div>
            </div>
        </Layout>
    );
}
