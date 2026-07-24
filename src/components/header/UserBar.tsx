import type { ResumeItem } from "@data/resume";
import ContactIconLinks from "@components/common/ContactIconLinks";
import Image from "next/image";

interface UserBarProps {
    className?: string;
    activeResumeItem?: ResumeItem | null;
}

export default function UserBar({ className = "", activeResumeItem = null }: UserBarProps) {
    return (
        <div className={`user-bar text-center ${className}`}>
            <div className={`user-bar-default-content${activeResumeItem ? " is-hidden" : ""}`} aria-hidden={Boolean(activeResumeItem)}>
                <div className="box-author mb_12">
                    <div className="img-style mb_16">
                        <img src="/assets/images/user/avatar.webp" alt="feature post" />
                    </div>

                    <div className="info">
                        <div className="name font-2 text_white mb_8">Ahmed Hamdi</div>
                        <div className="text-label text-uppercase fw-6 text_primary-color font-3 mb_4 letter-spacing-1">Senior Full Stack Engineer</div>
                        <div className="text-caption-2 text_secondary-color font-3 mb_16">AI &amp; Enterprise Platforms</div>
                        <p className="text-caption-2 text_secondary-color font-3 mb_8">Dubai, United Arab Emirates</p>
                        <p className="text-caption-2 text_secondary-color font-3 mb_8">
                            Building AI-enabled platforms, dashboards, and internal tools.
                        </p>
                        <p className="text-caption-2 text_primary-color font-3">Available for freelance &amp; consulting</p>
                    </div>
                </div>

                <ContactIconLinks className="justify-content-center mb_28" />

                <a href="/assets/files/Ahmed_Hamdi_Senior_Full_Stack_Engineer_CV.pdf" className="tf-btn btn-w-full style-border mb_20">
                    <span className="bg_btn" />
                    <span className="title"><i className="icon-ReadCvLogo" />View My CV</span>
                    <span className="effect-shine" />
                </a>

                <a href="#contact" className="tf-btn style-1 animate-hover-btn btn-w-full">
                    <span className="title">
                        <i className="icon-EnvelopeSimple" />
                        <span>Contact Me</span>
                    </span>
                </a>
            </div>

            {activeResumeItem && (
                <div className="resume-preview-panel" aria-live="polite">
                    <div className="resume-preview-header">
                        <div className="resume-preview-company mb_16">
                            <div className="resume-preview-company-logo">
                                {activeResumeItem.companyLogo ? (
                                    <Image
                                        src={activeResumeItem.companyLogo}
                                        alt={`${activeResumeItem.company} logo`}
                                        width={64}
                                        height={64}
                                        sizes="64px"
                                    />
                                ) : (
                                    <span className="text-label fw-6 font-3" aria-hidden="true">
                                        {activeResumeItem.companyInitials}
                                    </span>
                                )}
                            </div>
                            <div className="text-label fw-6 text_primary-color font-3">
                                {activeResumeItem.company}
                            </div>
                        </div>
                        <h5 className="font-4 text_white mb_12">{activeResumeItem.title}</h5>
                        <span className="resume-preview-date text-caption-2 text_secondary-color font-3">
                            {activeResumeItem.date}
                        </span>
                    </div>
                    <div className="resume-preview-summary">
                        <p className="resume-preview-description text-body-2 text_muted-color font-3 mb_0">
                            {activeResumeItem.description}
                        </p>
                    </div>
                    <div className="resume-preview-label text-label text-uppercase fw-6 text_primary-color font-3 letter-spacing-1">
                        Key Focus
                    </div>
                    <ul className="resume-preview-list text-caption-2 text_white font-3">
                        {activeResumeItem.highlights.map((highlight) => (
                            <li key={highlight}>{highlight}</li>
                        ))}
                    </ul>
                    <p className="resume-preview-footer text-caption-2 text_secondary-color font-3 mb_0">
                        {activeResumeItem.footerTag}
                    </p>
                </div>
            )}

            <div className="item-shape">
                <img src="/assets/images/item/small-comet.png" alt="item" />
            </div>
        </div>
    );
}
