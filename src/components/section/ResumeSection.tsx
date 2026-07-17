import { resumeItems, ResumeSectionProps } from "@data/resume";

export default function ResumeSection({ className = "" }: ResumeSectionProps) {
    return (
        <div id="resume" className={`section-resume ${className}`}>
            <div className="heading-section mb_47">
                <div className="tag-heading text-uppercase text-label font-3 letter-spacing-1 mb_30">Resume</div>
                <h3 className="text_white fw-5 split-text effect-blur-fade">Education & Experience</h3>
            </div>

            <div className="effect-line-hover">
                {resumeItems.map((item, idx) => (
                    <div key={idx} className="wrap-education-item area-effect scrolling-effect effectTop">
                        <span className="point" />
                        <div className="education-item">
                            <div className="content">
                                <h5 className="font-4 mb_4">
                                    <a href="#contact" className="link">
                                        {item.title}
                                    </a>
                                </h5>
                                <span className="text-body-1 font-3">{item.company}</span>
                            </div>
                            <div className="date text-caption-1 text_white font-3">{item.date}</div>
                            <div className="item-shape spotlight">
                                <img src="/assets/images/item/small-comet.webp" alt="item" loading="lazy" />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
