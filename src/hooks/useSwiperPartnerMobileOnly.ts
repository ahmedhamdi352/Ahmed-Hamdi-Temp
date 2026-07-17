"use client";
import { useEffect, useRef } from "react";
import Swiper from "swiper";
import "swiper/css";

const useSwiperOnMobileOnly = () => {
    const swiperRef = useRef<Swiper | null>(null);
    const screenLimit = 992;

    useEffect(() => {
        const el = document.querySelector<HTMLElement>(".tf-sw-partner");
        if (!el) return;

        const tablet = Number(el.dataset.tablet);
        const mobile = Number(el.dataset.mobile);
        const mobileSm = Number(el.dataset.mobileSm);

        const spacing = Number(el.dataset.space);
        const spacingMd = Number(el.dataset.spaceMd);

        const initSwiper = () => {
            if (window.innerWidth <= screenLimit) {
                if (!swiperRef.current) {
                    swiperRef.current = new Swiper(".tf-sw-partner", {
                        autoplay: {
                            delay: 0,
                            disableOnInteraction: false,
                            pauseOnMouseEnter: true,
                        },
                        slidesPerView: mobile,
                        spaceBetween: spacing,
                        loop: true,
                        speed: 3000,
                        navigation: {
                            nextEl: ".nav-next-partner",
                            prevEl: ".nav-prev-partner",
                        },
                        pagination: {
                            el: ".sw-pagination-partner",
                            clickable: true,
                        },
                        breakpoints: {
                            575: {
                                slidesPerView: mobileSm,
                                spaceBetween: spacing,
                            },
                            768: {
                                slidesPerView: tablet,
                                spaceBetween: spacingMd,
                            },
                        },
                    });
                }
            } else {
                if (swiperRef.current) {
                    swiperRef.current.destroy(true, true);
                    swiperRef.current = null;
                    const wrapper = el.querySelector(".swiper-wrapper");
                    const slides = el.querySelectorAll(".swiper-slide");
                    if (wrapper) wrapper.removeAttribute("style");
                    slides.forEach((slide) => slide.removeAttribute("style"));
                }
            }
        };

        initSwiper();

        const handleResize = (() => {
            clearTimeout((handleResize as { timeout?: ReturnType<typeof setTimeout> }).timeout);
            (handleResize as { timeout?: ReturnType<typeof setTimeout> }).timeout = setTimeout(initSwiper, 200);
        }) as unknown as () => void;

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);
};

export default useSwiperOnMobileOnly;
