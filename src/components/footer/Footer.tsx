import ContactForm from "@components/footer/FooterForm";
import FooterHeading from "@components/footer/FooterHeading";
export function Footer() {
    return (
        <div id="contact" className="section-contact style-1 section spacing-6">
            <div className="row">
                <div className="col-lg-5">
                    <FooterHeading />
                </div>
                <div className="col-lg-7">
                    <ContactForm />
                </div>
            </div>
        </div>
    );
}

export function Footer2() {
    return (
        <div id="contact" className="spacing-1 pb-0 section spacing-1">
            <FooterHeading />
            <ContactForm />
        </div>
    );
}
