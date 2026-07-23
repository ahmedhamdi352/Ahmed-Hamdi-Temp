import SpotlightEffect from "../common/SpotlightEffect";

interface EngagementProps {
    className?: string;
}

const engagementOptions = [
    {
        title: "Freelance Projects",
        description: "For dashboards, internal tools, chatbot interfaces, and full-stack web platforms.",
    },
    {
        title: "Part-Time Engineering Support",
        description: "For teams that need senior frontend/full-stack delivery support without hiring full-time.",
    },
    {
        title: "Technical Consulting",
        description: "For architecture review, AI integration planning, frontend structure, and delivery guidance.",
    },
] as const;

export default function EngagementSection({ className = "" }: EngagementProps) {
    return (
        <section id="engagement" className={`section-pricing ${className}`}>
            <SpotlightEffect />
            <div className="heading-section mb_42">
                <div className="tag-heading text-uppercase text-label font-3 letter-spacing-1 mb_30">
                    Ways I Can Help
                </div>
                <h3 className="text_white fw-5 split-text effect-blur-fade">Engagement Options</h3>
            </div>

            <div className="engagement-options-list">
                {engagementOptions.map((option) => (
                    <div className="pricing-item style-1 bs-light-mode area-effect" key={option.title}>
                        <h4 className="title">{option.title}</h4>
                        <p className="engagement-description text-body-1 text_white font-3">{option.description}</p>
                        <div className="wrap-pricing">
                            <a href="#contact" className="tf-btn style-1 animate-hover-btn">
                                <span>Discuss This</span>
                            </a>
                        </div>
                        <div className="item-shape spotlight">
                            <img src="/assets/images/item/small-comet.webp" alt="" loading="lazy" />
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
