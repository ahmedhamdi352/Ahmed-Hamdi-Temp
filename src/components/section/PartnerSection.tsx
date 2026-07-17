"use client";
import { partners } from "@data/partner";
import useSwiperOnMobileOnly from "@/src/hooks/useSwiperPartnerMobileOnly";
import React from "react";
interface PartnerSectionProps {
    layoutType?: "default" | "type2";
    className?: string;
}
const Heading = ({ className = "" }) => (
    <div className={`heading-section ${className}`}>
        <div className="tag-heading text-uppercase text-label font-3 letter-spacing-1 mb_32">Partner</div>
        <h3 className="text_white fw-5 split-text effect-blur-fade">Trusted By 100+ Brands Worldwide</h3>
    </div>
);

const PartnerSection: React.FC<PartnerSectionProps> = ({ layoutType = "default", className = "" }) => {
    useSwiperOnMobileOnly();
    <Heading />;

    const SwiperBlock = (
        <div
            className="swiper tf-sw-partner wrap-partner position-2"
            data-preview="8"
            data-tablet="8"
            data-mobile-sm="6"
            data-mobile="4"
            data-space="15"
            data-space-md="30"
            data-space-lg="30"
        >
            <div className="swiper-wrapper">
                {partners.map((partner) => (
                    <div className="swiper-slide" key={partner.id}>
                        <a
                            href="#"
                            className={`partner-item item-${partner.id} ${partner.size ?? ""} scrolling-effect effectZoomIn`}
                            data-delay={partner.delay ?? undefined}
                        >
                            <img src={partner.img} alt="partner" loading="lazy" />
                            <div className="item-shape">
                                <img src="/assets/images/item/small-comet.webp" alt="item" loading="lazy" />
                            </div>
                        </a>
                    </div>
                ))}
            </div>
        </div>
    );

    return (
        <section
            id="partners"
            className={`section-partner ${layoutType === "type2" ? "section spacing-1" : "style-2 section spacing-5"} ${className}`}
        >
            {layoutType === "default" ? (
                <div className="row">
                    <div className="col-lg-5">
                        <Heading />
                    </div>
                    <div className="col-lg-7">{SwiperBlock}</div>
                </div>
            ) : (
                <>
                    <Heading className="mb_44" />
                    {SwiperBlock}
                </>
            )}
        </section>
    );
};

export default PartnerSection;
