"use client";

import Layout from "@components/layout/Layout";
import SpotlightEffect from "@components/common/SpotlightEffect";
import ToggleSwitchMode from "@components/common/ToggleSwitchMode";
import HeaderV01 from "@components/header/HeaderV01";
import UserBar from "@components/header/UserBar";
import NavRight from "@components/header/NavRight";
import AboutSection from "@components/section/AboutSection";
import ResumeSection from "@components/section/ResumeSection";
import ServiceSection from "@components/section/ServiceSection";
import { PortfolioStack } from "@components/section/PortfolioSection";
import EngagementSection from "@components/section/EngagementSection";
import { Footer2 } from "@components/footer/Footer";
import type { ResumeItem } from "@data/resume";
import { useState } from "react";

export default function Home() {
    const [resumePreview, setResumePreview] = useState<ResumeItem | null>(null);

    return (
        <Layout>
            <div className="body-overlay d-block" aria-hidden="true">
                <div className="bg-shape" />
            </div>
            <div className="overlay-popup" />
            <SpotlightEffect />

            <div className="header header-fixed style-1 d-md-none">
                <div className="tf-container">
                    <div className="row">
                        <div className="offset-xxl-4 col-xxl-7 offset-xl-4 col-xl-7">
                            <HeaderV01 type="header-type-2" />
                        </div>
                    </div>
                </div>
            </div>

            <div className="tf-container w-2">
                <div className="row">
                    <div className="offset-xxl-4 col-xxl-7 offset-xl-4 col-xl-7">
                        <main className="main-content section-onepage">
                            <div className="d-md-none pt_24">
                                <HeaderV01 type="header-type-2" />
                            </div>
                            <UserBar activeResumeItem={resumePreview} />
                            <AboutSection className="section spacing-1" />
                            <ResumeSection className="spacing-1 section" onPreviewChange={setResumePreview} />
                            <ServiceSection className="spacing-1 section" />
                            <PortfolioStack />
                            <EngagementSection className="spacing-1 section" />
                            <Footer2 />
                        </main>

                        <div className="right-bar style-1 d-flex flex-column align-items-center">
                            <NavRight />
                            <ul className="list-icon menu-option d-flex flex-column gap_8">
                                <li>
                                    <ToggleSwitchMode />
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
}
