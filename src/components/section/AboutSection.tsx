"use client";
import "@assets/css/odometer.min.css";
import "@assets/css/animateText.css";
import { useGSAPAnimations } from "@/src/hooks/useGSAPAnimations";
import useAnimationChangeText from "@/src/hooks/useAnimationChangeText";
import dynamic from "next/dynamic";
import "splitting/dist/splitting.css";

const OdometerComponent = dynamic(() => import("@/src/components/common/Odometer"), {
    ssr: false,
});
interface ProfileSectionProps {
    className?: string;
}

export default function ProfileSection({ className = "" }: ProfileSectionProps) {
    useGSAPAnimations();
    useAnimationChangeText();

    return (
        <div id="about" className={`section-about ${className}`}>
            <div className="heading-section mb_45">
                <div className="tag-heading text-uppercase text-label font-3 letter-spacing-1 mb_32">About</div>
                <div className="title-border-shape">
                    <h4 className="animationtext clip">
                        Hello! I&apos;m{" "}
                        <span className="tf-text s1 cd-words-wrapper text_primary-color">
                            <span className="item-text is-visible">AI Developer</span>
                            <span className="item-text is-hidden">Data Scientist</span>
                            <span className="item-text is-hidden">UI/UX Developer</span>
                        </span>
                    </h4>
                    <div className="shape">
                        <span className="shape-1" />
                        <span className="shape-2" />
                        <span className="shape-3" />
                        <span className="shape-4" />
                    </div>
                    <div className="line">
                        <span className="line-horizontal horizontal-1" />
                        <span className="line-horizontal horizontal-2" />
                        <span className="line-vertical vertical-1" />
                        <span className="line-vertical vertical-2" />
                    </div>
                </div>
            </div>
            <h1 className="title mb_16 split-text effect-blur-fade">Empower Code Intelligence</h1>
            <p className="text_muted-color font-3 mb_43 split-text split-lines-transform">
                Hello! I&apos;m ZenG, an AI Developer with 10 years of experience in designing and developing intelligent systems. My expertise spans
                machine learning, natural language processing, computer vision, and data analysis. Driven by curiosity, I transform complex data into
                smart solutions.
            </p>
            <div className="wrap-counter tf-grid-layout md-col-3">
                <div className="counter-item bs-light-mode">
                    <div className="counter-number h2 text_white mb_7">
                        <OdometerComponent value={10} />
                        <span className="sub">+</span>
                    </div>
                    <p className="text-body-1 text_muted-color font-3">Years in AI Development</p>
                    <div className="item-shape">
                        <img src="/assets/images/item/small-comet.webp" alt="item" loading="lazy" />
                    </div>
                </div>
                <div className="counter-item bs-light-mode">
                    <div className="counter-number h2 text_white mb_7">
                        <OdometerComponent value={500} />
                        <span className="sub">+</span>
                    </div>
                    <p className="text-body-1 text_muted-color font-3">Satisfied Clients</p>
                    <div className="item-shape">
                        <img src="/assets/images/item/small-comet.webp" alt="item" loading="lazy" />
                    </div>
                </div>
                <div className="counter-item bs-light-mode">
                    <div className="counter-number h2 text_white mb_7">
                        <OdometerComponent value={1} />
                        <span className="sub">k</span>
                        <span className="sub">+</span>
                    </div>
                    <p className="text-body-1 text_muted-color font-3">Projects Completed</p>
                    <div className="item-shape">
                        <img src="/assets/images/item/small-comet.webp" alt="item" loading="lazy" />
                    </div>
                </div>
            </div>
        </div>
    );
}
