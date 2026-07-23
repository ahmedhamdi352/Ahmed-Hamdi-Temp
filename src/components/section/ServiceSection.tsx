import { services } from "@data/service";
interface ServiceProps {
    className?: string;
}

export default function ServiceSection({ className = "" }: ServiceProps) {
    return (
        <div id="services" className={`section-service section ${className}`}>
            <div className="heading-section mb_43">
                <div className="tag-heading text-uppercase text-label font-3 letter-spacing-1 mb_33">Services</div>
                <h3 className="text_white fw-5 split-text effect-blur-fade">What I Can Build</h3>
            </div>

            {services.map((service, index) => (
                <div key={index} className="service-item area-effect scrolling-effect effectBottom">
                    <div className="content-inner d-flex align-items-center justify-content-between">
                        <div className="d-flex align-items-center content">
                            <span className="number text-label text_muted-color font-3">{service.number}</span>
                            <div className="service-copy">
                                <h5 className="text_white font-4 mb_8">
                                    {service.title}
                                </h5>
                                <p className="text-body-2 text_muted-color font-3 mb_0">{service.description}</p>
                            </div>
                        </div>
                        <div className="item-shape spotlight">
                            <img src="/assets/images/item/small-comet.webp" alt="item" loading="lazy" />
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}
