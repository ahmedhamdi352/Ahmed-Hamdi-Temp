import ContactIconLinks from "@components/common/ContactIconLinks";

export default function FooterHeading() {
    return (
        <div className="heading-section mb_44">
            <div className="tag-heading text-uppercase text-label font-3 letter-spacing-1 mb_33">Contact</div>

            <div className="title mb_40">
                <h3 className="text_white fw-5 animationtext clip">
                    Let’s Build{" "}
                    <span className="tf-text s1 cd-words-wrapper text_primary-color">
                        <span className="item-text is-visible">Something Useful</span>
                    </span>
                </h3>
                <h3 className="text_white title fw-5">Together</h3>
                <p className="text-body-1 text_muted-color font-3 mt_20 mb_0">
                    Available for freelance projects, part-time engineering support, consulting, and selected senior opportunities.
                </p>
            </div>

            <div className="heading-title contact-identity">
                <div className="contact-details mb_12">
                    <p className="text-caption-2 text_secondary-color font-3">Dubai, United Arab Emirates</p>
                </div>
                <ContactIconLinks />
            </div>
        </div>
    );
}

// export default FooterHeading;
