import Image from "next/image";
import { services } from "@data/service";
interface ServiceProps {
    className?: string;
}

export default function ServiceSection({ className = "" }: ServiceProps) {
    return (
        <div id="services" className={`section-service section ${className}`}>
            <div className="heading-section mb_43">
                <div className="tag-heading text-uppercase text-label font-3 letter-spacing-1 mb_33">Services</div>
                <h3 className="text_white fw-5 split-text effect-blur-fade">AI Solutions That Matter</h3>
            </div>

            {services.map((service, index) => (
                <div key={index} className="service-item area-effect scrolling-effect effectBottom">
                    <div className="content-inner d-flex align-items-center justify-content-between">
                        <div className="d-flex align-items-center content">
                            <span className="number text-label text_muted-color font-3">{service.number}</span>
                            <h5 className="text_white font-4">
                                <a href={service.link} className="link">
                                    {service.title}
                                </a>
                            </h5>
                        </div>
                        <a href={service.link} className="btn-arrow" aria-label="See service">
                            <i className="icon-ArrowRight" />
                        </a>
                        <div className="item-shape spotlight">
                            <img src="/assets/images/item/small-comet.webp" alt="item" loading="lazy" />
                        </div>
                    </div>
                    <div className="img-hover">
                        <Image src={service.hoverImage} width={140} height={140} alt="item" loading="lazy" />
                    </div>
                </div>
            ))}
        </div>
    );
}
