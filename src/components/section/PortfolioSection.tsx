import React from "react";
import Link from "next/link";
import { portfolioItems } from "@data/portfolioFeature";

const PortfolioSection: React.FC = () => {
    return (
        <section id="portfolio" className="section-portfolio style-1 spacing-5 section">
            <div className="heading-section mb_42">
                <div className="tag-heading text-uppercase text-label font-3 letter-spacing-1 mb_34">Portfolio</div>
                <h3 className="text_white fw-5 split-text effect-blur-fade">Selected Work</h3>
            </div>

            <div className="tabs-content-wrap tf-grid-layout md-col-2">
                <PortfolioItem />
            </div>
        </section>
    );
};

export default PortfolioSection;

export interface PortfolioItemProp {
    className?: string;
}

export const PortfolioItem = ({ className = "" }: PortfolioItemProp) => {
    return (
        <>
            {portfolioItems.slice(0, 3).map((item) => (
                <div className={`portfolio-item  ${className}`} key={item.slug}>
                    <Link href={item.route} className="img-style" aria-label={`View ${item.title} case study`}>
                        <img src={item.image} alt={item.title} loading="lazy" />
                        <div className="tag font-3 text-label text-uppercase fw-6 letter-spacing-1">{item.category}</div>
                    </Link>
                    <h5 className="title font-4 text_white">
                        <Link href={item.route} className="link">
                            {item.title}
                        </Link>
                    </h5>
                    <p className="portfolio-summary text-body-2 text_muted-color font-3">
                        {item.cardDescription}
                    </p>
                    <Link href={item.route} className="portfolio-cta text-body-2 font-3 fw-6">
                        View Case Study
                    </Link>
                    <div className="item-shape">
                        <img src="/assets/images/item/small-comet.png" alt="item" />
                    </div>
                </div>
            ))}
        </>
    );
};

export const PortfolioStack = () => {
    return (
        <>
            <div id="portfolio" className="section-portfolio spacing-1 section">
                <div className="heading-section mb_42">
                    <div className="tag-heading text-uppercase text-label font-3 letter-spacing-1 mb_34">Portfolio</div>
                    <h3 className="text_white fw-5 split-text effect-blur-fade">Selected Work</h3>
                </div>
                <div className="tabs-content-wrap">
                    <div className="stack-element">
                        <PortfolioItem className="element" />
                    </div>
                </div>
            </div>
        </>
    );
};
