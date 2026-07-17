"use client";
import { BackgroundChoose, ColorChoose } from "@components/common/MenuColor";
import Layout from "@components/layout/Layout";
import Image from "next/image";

export default function LandingPage() {
    return (
        <>
            <Layout>
                <div className="body-overlay d-none">
                    <div className="bg-shape"></div>
                </div>
                <HeaderLanding />
                <div className="tf-container w-4 z-2">
                    <SectionBoxDemo />
                </div>

                <div className="tf-container w-5 z-2">
                    <div className="section-features">
                        <div className="heading-section text-center mb_40">
                            <h3 className=" split-text effect-blur-fade">Features Special</h3>
                        </div>
                        <div className="wrap-features">
                            <ColorChoose />
                            <span className="line"></span>
                            <BackgroundChoose targetBlank={true} />
                        </div>
                        <div className="item item-1 scroll-tranform">
                            <Image width={208} height={208} src="/assets/images/landing/landing-item-3.png" alt="landing-item" />
                        </div>
                        <div className="item item-2 animate4">
                            <Image width={208} height={208} src="/assets/images/landing/landing-item-4.png" alt="landing-item" />
                        </div>
                        <div className="item item-3  position-absolute animate3">
                            <Image width={202} height={202} src="/assets/images/landing/landing-item-6.png" alt="landing-item" />
                        </div>
                    </div>
                </div>
                <FooterLanding />

                <div className="bg-shape position-absolute">
                    <Image width={1920} height={1321} src="/assets/images/landing/bg-title-landing.webp" alt="bg-title-landing" />
                </div>
                <div className="bg-shape-2 position-absolute">
                    <Image width={1917} height={1109} src="/assets/images/landing/bg-footer-landing.webp" alt="bg-footer" />
                </div>

                <div className="bg-shape-3  position-absolute ">
                    <div className="body-overlay d-block">
                        <div className="bg-shape"></div>
                    </div>
                </div>
                <div className="bg-overlay-landing  position-absolute">
                    <Image width={1918} height={438} src="/assets/images/landing/overlay-landing.webp" alt="overlay" />
                </div>
            </Layout>
        </>
    );
}

const HeaderLanding = () => {
    return (
        <div className="heading-top">
            <div className="tf-container w-3 z-2 ">
                <div className="header-landing">
                    <a href="/" className="site-logo font-2">
                        ZenG
                    </a>
                    <a href="#" className="tf-btn style-1 animate-hover-btn btn-switch-text">
                        <span>
                            <span className="btn-double-text" data-text="Purchase now">
                                Purchase Now
                            </span>
                        </span>
                    </a>
                </div>
                <div className="page-title">
                    <div className="title-border-shape mx-auto mb_24">
                        <div className="text-label text_white text-uppercase fw-6 font-3 letter-spacing-1">
                            Resume and Personal Portfolio One Page
                        </div>
                        <div className="shape">
                            <span className="shape-1"></span>
                            <span className="shape-2"></span>
                            <span className="shape-3"></span>
                            <span className="shape-4"></span>
                        </div>
                        <div className="line">
                            <span className="line-horizontal horizontal-1"></span>
                            <span className="line-horizontal horizontal-2"></span>
                            <span className="line-vertical vertical-1"></span>
                            <span className="line-vertical vertical-2"></span>
                        </div>
                    </div>
                    <h1 className="title mb_24 split-text split-lines-rotation-x">
                        Supercharge Your <br /> Workflow With ZenG
                    </h1>
                    <p className="text-body-2 split-text split-lines-transform">
                        All-in-one platform to automate tasks, manage teams, and scale faster.
                    </p>
                </div>
            </div>
            <div className="item item-1 animate1 ">
                <Image width={201} height={201} src="/assets/images/landing/landing-item-1.png" alt="landing-item" />
            </div>
            <div className="item item-2 shape-animaiton2 ">
                <Image width={207} height={207} src="/assets/images/landing/landing-item-2.png" alt="landing-item" />
            </div>
        </div>
    );
};

const SectionBoxDemo = () => {
    return (
        <>
            <div className="section-box-home">
                <div className="tf-grid-layout md-col-3">
                    <div className="home-box scrolling-effect effectRight">
                        <div className="thumbs">
                            <Image src="/assets/images/landing/home-3.webp" width="572" height="450" alt="home" />
                            <a href="/" className="tf-btn style-1 animate-hover-btn" target="_blank">
                                <span>View Demo</span>
                            </a>
                            <a href="/" className="overlay-link" target="_blank"></a>
                        </div>
                        <div className="title">
                            <h4>
                                <a href="/" target="_blank" className="link">
                                    Home 1<span className="text_primary-color text-body-1"> (Home Default)</span>
                                </a>
                            </h4>
                        </div>
                    </div>
                    <div className="home-box scrolling-effect effectRight">
                        <div className="thumbs">
                            <Image src="/assets/images/landing/home-1.webp" width="572" height="450" alt="home" />
                            <a href="home-vertical" className="tf-btn style-1 animate-hover-btn" target="_blank">
                                <span>View Demo</span>
                            </a>
                            <a href="home-vertical" className="overlay-link" target="_blank"></a>
                        </div>
                        <div className="title">
                            <h4>
                                <a href="home-vertical" target="_blank" className="link">
                                    Home 2<span className="text_primary-color text-body-1"> (Menu Vertical)</span>
                                </a>
                            </h4>
                        </div>
                    </div>
                    <div className="home-box scrolling-effect effectRight">
                        <div className="thumbs">
                            <Image src="/assets/images/landing/home-2.webp" width="572" height="450" alt="home" />
                            <a href="home-horizontal" className="tf-btn style-1 animate-hover-btn" target="_blank">
                                <span>View Demo</span>
                            </a>
                            <a href="home-horizontal" className="overlay-link" target="_blank"></a>
                        </div>
                        <div className="title">
                            <h4>
                                <a href="home-horizontal" target="_blank" className="link">
                                    Home 3<span className="text_primary-color text-body-1"> (Menu horizontal)</span>
                                </a>
                            </h4>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

const FooterLanding = () => {
    return (
        <>
            <div className="footer-landing position-relative z-2">
                <div className="tf-container">
                    <div className="content ">
                        <div className="title-border-shape mx-auto mb_24">
                            <div className="text-label text_white text-uppercase fw-6 font-3 letter-spacing-1">
                                Resume and Personal Portfolio One Page
                            </div>
                            <div className="shape">
                                <span className="shape-1"></span>
                                <span className="shape-2"></span>
                                <span className="shape-3"></span>
                                <span className="shape-4"></span>
                            </div>
                            <div className="line">
                                <span className="line-horizontal horizontal-1"></span>
                                <span className="line-horizontal horizontal-2"></span>
                                <span className="line-vertical vertical-1"></span>
                                <span className="line-vertical vertical-2"></span>
                            </div>
                        </div>
                        <h2 className=" title text_white mb_24 split-text split-lines-rotation-x">
                            Your Dream Job Starts with a Perfect <br /> CV – Let’s Build It!
                        </h2>

                        <a href="#" className="tf-btn style-1 animate-hover-btn mx-auto btn-switch-text ">
                            <span>
                                <span className="btn-double-text" data-text="Purchase now">
                                    Purchase Now
                                </span>
                            </span>
                        </a>
                    </div>
                    <div className="bg-footer scrolling-effect effectBottom z-2">{/* <img src="/assets/images/landing/ZENG.png" alt="" /> */}</div>
                </div>
                <div className="item position-absolute animate2">
                    <Image width={277} height={277} src="/assets/images/landing/landing-item-5.png" alt="landing-item" />
                </div>
            </div>
        </>
    );
};
