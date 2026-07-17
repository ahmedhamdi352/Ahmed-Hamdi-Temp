import HeaderV01 from "@components/header/HeaderV01";
import UserBar from "@components/header/UserBar";
import { Footer } from "@components/footer/Footer";
import Layout from "@components/layout/Layout";
import AboutSection from "@components/section/AboutSection";
import ResumeSection from "@components/section/ResumeSection";
import ServiceSection from "@components/section/ServiceSection";
import PortfolioSection from "@components/section/PortfolioSection";
import TestimonialSection from "@components/section/TestimonialSection";
import PricingSection from "@components/section/PricingSection";
import PartnerSection from "@components/section/PartnerSection";
import ToggleSwitchMode from "@components/common/ToggleSwitchMode";
import SettingMenu from "@components/common/MenuColor";
import React from "react";

export default function Home() {
    return (
        <Layout>
            <div className="body-overlay d-block">
                <div className="bg-shape"></div>
            </div>
            <div className="overlay-popup"></div>
            <SettingMenu />

            <HeaderV01 className="style-1" />
            <HeaderV01 className="header-fixed style-1" />

            <div className="main-content style-fullwidth section-onepage">
                <div className="tf-container w-6">
                    <div className="wrap-section">
                        <div className="row">
                            <div className="col-lg-4">
                                <UserBar className="style-1" />
                            </div>
                            <div className="col-lg-8">
                                <AboutSection className="style-1 section" />
                                <ResumeSection className="style-1 pb-0 spacing-4 section" />
                            </div>
                        </div>
                    </div>
                    <ServiceSection className="spacing-5" />
                    <PortfolioSection />
                    <TestimonialSection />
                    <PricingSection className="spacing-5 section" />
                    <PartnerSection />
                    <Footer />

                    <div className="right-bar style-1 d-flex flex-column align-items-center">
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
                </div>
            </div>
        </Layout>
    );
}
