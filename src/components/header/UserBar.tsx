interface UserBarProps {
    className?: string;
}

export default function UserBar({ className = "" }: UserBarProps) {
    return (
        <div className={`user-bar text-center ${className}`}>
            <div className="box-author mb_12">
                <div className="img-style mb_16">
                    <img src="/assets/images/user/avatar.webp" alt="feature post" />
                </div>

                <div className="info">
                    <div className="name font-2 text_white mb_8">ZenG</div>
                    <div className="text-label text-uppercase fw-6 text_primary-color font-3 mb_16 letter-spacing-1">AI Developer</div>
                    <a href="mailto:themesflat@gmail.com" className="hover-underline-link text_white text-body-2 mb_4">
                        themesflat@gmail.com
                    </a>
                    <p className="text-caption-2 text_secondary-color font-3">Based in San Francisco, CA</p>
                </div>
            </div>

            <ul className="list-icon d-flex justify-content-center mb_28">
                <li>
                    <a href="https://www.linkedin.com/">
                        <span className="icon-LinkedIn" />
                    </a>
                </li>
                <li>
                    <a href="https://github.com/">
                        <span className="icon-GitHub" />
                    </a>
                </li>
                <li>
                    <a href="https://x.com">
                        <span className="icon-X" />
                    </a>
                </li>
                <li>
                    <a href="https://dribbble.com/">
                        <span className="icon-dribbble" />
                    </a>
                </li>
            </ul>

            <a href="#" className="tf-btn btn-w-full style-border mb_20">
                <span className="bg_btn" />
                <span className="title">
                    <i className="icon-ReadCvLogo" />
                    View My CV
                </span>
                <span className="effect-shine" />
            </a>

            <a href="#contact" className="tf-btn style-1 animate-hover-btn btn-w-full">
                <span className="title">
                    <i className="icon-EnvelopeSimple" />
                    <span>Contact Me</span>
                </span>
            </a>

            <div className="item-shape">
                <img src="/assets/images/item/small-comet.png" alt="item" />
            </div>
        </div>
    );
}
