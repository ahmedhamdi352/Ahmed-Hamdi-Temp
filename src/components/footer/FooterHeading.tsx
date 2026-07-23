import ContactIconLinks from "@components/common/ContactIconLinks";

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
