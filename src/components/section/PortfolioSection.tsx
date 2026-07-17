import React from "react";
import { portfolioItems } from "@data/portfolioFeature";

const PortfolioSection: React.FC = () => {
    return (
        <section id="portfolio" className="section-portfolio style-1 spacing-5 section">
            <div className="heading-section mb_42">
                <div className="tag-heading text-uppercase text-label font-3 letter-spacing-1 mb_34">Portfolio</div>
                <h3 className="text_white fw-5 split-text effect-blur-fade">Featured Projects</h3>
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
            {portfolioItems.map((item, index) => (
                <div className={`portfolio-item  ${className}`} key={index}>
                    <a href={item.image} data-fancybox="gallery" className="img-style">
                        <img src={item.image} alt="portfolio" loading="lazy" />
                        <div className="tag font-3 text-label text-uppercase fw-6 letter-spacing-1">{item.tag}</div>
                    </a>
                    <h5 className="title font-4 text_white">
                        <a href="#" className="link">
                            {item.title}
                        </a>
                    </h5>
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
                    <h3 className="text_white fw-5 split-text effect-blur-fade">Featured Projects</h3>
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
