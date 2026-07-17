import React from "react";
export default function FooterHeading() {
    return (
        <div className="heading-section mb_44">
            <div className="tag-heading text-uppercase text-label font-3 letter-spacing-1 mb_33">Contact</div>

            <div className="title mb_40">
                <h3 className="text_white fw-5 animationtext clip">
                    Lets{" "}
                    <span className="tf-text s1 cd-words-wrapper text_primary-color">
                        <span className="item-text is-visible">Design</span>
                        <span className="item-text is-hidden">Create</span>
                        <span className="item-text is-hidden">Craft</span>
                    </span>{" "}
                    Incredible
                </h3>
                <h3 className="text_white title fw-5"> Work Together</h3>
            </div>

            <div className="heading-title">
                <div className="mb_12">
                    <h4 className="text_white fw-4 mb_4">
                        <a href="mailto:themesflat@gmail.com" className="hover-underline-link link">
                            themesflat@gmail.com
                        </a>
                    </h4>
                    <p className="text-caption-2 text_secondary-color font-3">Based in San Francisco, CA</p>
                </div>

                <ul className="list-icon d-flex">
                    <li>
                        <a href="#" className="icon-LinkedIn"></a>
                    </li>
                    <li>
                        <a href="#" className="icon-GitHub"></a>
                    </li>
                    <li>
                        <a href="#" className="icon-X"></a>
                    </li>
                    <li>
                        <a href="#" className="icon-dribbble"></a>
                    </li>
                </ul>
            </div>
        </div>
    );
}

// export default FooterHeading;
