"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { testimonials } from "@data/testimonial";

export interface SectionTestimonialProp {
    className?: string;
}

export default function TestimonialSection() {
    return (
        <section id="testimonial" className="section-testimonial style-1 section spacing-5 sw-layout">
            <HeadingSectionTestimonial />

            <Swiper
                modules={[Navigation]}
                navigation={{
                    nextEl: ".nav-next-layout",
                    prevEl: ".nav-prev-layout",
                }}
                spaceBetween={12}
                breakpoints={{
                    320: { slidesPerView: 1 },
                    768: { slidesPerView: 2 },
                    1024: { slidesPerView: 2 },
                }}
                className="swiper"
            >
                {testimonials.map((item, index) => (
                    <SwiperSlide key={index} className="h-auto">
                        <div className="testimonial-item area-effect h-100">
                            <div className="icon">
                                <i className="icon-quote"></i>
                            </div>
                            <p className="text-body-2 text_white mb_21">"{item.text}"</p>
                            <div className="athor">
                                <h5 className="name text_white mb_4 font-4">
                                    <a href={item.author_link} className="link">
                                        {item.name}
                                    </a>
                                </h5>
                                <span className="text-label text-uppercase text_primary-color font-3">{item.role}</span>
                            </div>
                            <div className="item-shape spotlight">
                                <img src="/assets/images/item/small-comet.webp" alt="item" loading="lazy" />
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
}

export function HeadingSectionTestimonial() {
    return (
        <>
            <div className="heading-section mb_43 d-flex align-items-end justify-content-between">
                <div>
                    <div className="tag-heading text-uppercase text-label font-3 letter-spacing-1 mb_30">testimonials</div>
                    <h3 className="text_white fw-5 split-text effect-blur-fade">Trusted By Clients</h3>
                </div>
                <div className="wrap-sw-button d-flex gap_12">
                    <div className="sw-button nav-prev-layout cs-pointer">
                        <i className="icon-CaretLeft"></i>
                    </div>
                    <div className="sw-button nav-next-layout cs-pointer">
                        <i className="icon-CaretRight"></i>
                    </div>
                </div>
            </div>
        </>
    );
}

export function SectionTesttimonial2({ className = "" }: SectionTestimonialProp) {
    return (
        <>
            <div id="testimonial" className={`section-testimonial ${className}`}>
                <div className="heading-section mb_43">
                    <div className="tag-heading text-uppercase text-label font-3 letter-spacing-1 mb_30">testimonials</div>
                    <h3 className="text_white fw-5 split-text effect-blur-fade">Trusted By Clients</h3>
                </div>
                <Testimonial_swip1 />
            </div>
        </>
    );
}

export function Testimonial_swip1() {
    return (
        <>
            <div className="swiper sw-single">
                <Swiper
                    spaceBetween={12}
                    modules={[Navigation]}
                    navigation={{
                        prevEl: ".sw-single-prev",
                        nextEl: ".sw-single-next",
                    }}
                    className="swiper-wrapper"
                >
                    {testimonials.map((item, index) => (
                        <SwiperSlide key={index} className="h-auto">
                            <div className="testimonial-item area-effect h-100">
                                <div className="icon">
                                    <i className="icon-quote"></i>
                                </div>
                                <p className="text-body-2 text_white mb_21">"{item.text}"</p>
                                <div className="athor">
                                    <h5 className="name text_white mb_4 font-4">
                                        <a href={item.author_link} className="link">
                                            {item.name}
                                        </a>
                                    </h5>
                                    <span className="text-label text-uppercase text_primary-color font-3">{item.role}</span>
                                </div>
                                <div className="item-shape spotlight">
                                    <img src="/assets/images/item/small-comet.webp" alt="item" loading="lazy" />
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>

                <div className="wrap-sw-button d-flex gap_12">
                    <div className="sw-button cs-pointer sw-single-prev">
                        <i className="icon-CaretLeft"></i>
                    </div>
                    <div className="sw-button cs-pointer sw-single-next">
                        <i className="icon-CaretRight"></i>
                    </div>
                </div>
            </div>
        </>
    );
}
