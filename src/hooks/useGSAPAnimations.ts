"use client";

import { useEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";
import SplitText from "gsap/SplitText";

gsap.registerPlugin(ScrollTrigger, SplitText);

export function useGSAPAnimations() {
    useEffect(() => {
        animationText();
        scrollingEffect();
        stackElement();
        animationFooter();
        scrollTransform();
    }, []);
}

/* ------------- animationText ------------- */
function animationText() {
    const elements = document.querySelectorAll<HTMLElement>(".split-text");

    elements.forEach((el) => {
        const target = el.querySelector("p, a") || el;

        const split = new SplitText(target, {
            type: "words, chars",
            linesClass: "split-line",
        });

        let splitSet = split.chars;

        gsap.set(target, { perspective: 400 });

        const config: gsap.TweenVars = {
            scrollTrigger: {
                trigger: target,
                start: "top 86%",
                toggleActions: "play none none reverse",
            },
            duration: 0.9,
            stagger: 0.02,
            ease: "power3.out",
        };

        if (el.classList.contains("effect-fade")) {
            config.opacity = 0;
        }

        if (el.classList.contains("split-lines-transform") || el.classList.contains("split-lines-rotation-x")) {
            split.split({ type: "lines" });
            splitSet = split.lines;
            config.opacity = 0;
            config.stagger = 0.5;

            if (el.classList.contains("split-lines-rotation-x")) {
                config.rotationX = -120;
                config.transformOrigin = "top center -50";
            } else {
                config.yPercent = 100;
                config.autoAlpha = 0;
            }
        }

        if (el.classList.contains("split-words-scale")) {
            split.split({ type: "words" });
            splitSet = split.words;

            splitSet.forEach((word, i) => {
                gsap.set(word, {
                    opacity: 0,
                    scale: i % 2 === 0 ? 0 : 2,
                    force3D: true,
                    duration: 0.1,
                    ease: "power3.out",
                });
            });

            gsap.to(splitSet, {
                scrollTrigger: {
                    trigger: el,
                    start: "top 86%",
                },
                rotateX: 0,
                scale: 1,
                opacity: 1,
            });
        } else if (el.classList.contains("effect-blur-fade")) {
            split.split({ type: "words" });
            splitSet = split.words;

            gsap.fromTo(
                splitSet,
                { opacity: 0, filter: "blur(10px)", y: 20 },
                {
                    opacity: 1,
                    filter: "blur(0px)",
                    y: 0,
                    duration: 1,
                    stagger: 0.1,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: target,
                        start: "top 86%",
                        toggleActions: "play none none reverse",
                    },
                }
            );
        } else {
            gsap.from(splitSet, config);
        }
    });
}

/* ------------- scrollingEffect ------------- */
function scrollingEffect() {
    const elements = document.querySelectorAll<HTMLElement>(".scrolling-effect");

    elements.forEach((el) => {
        const config: gsap.TweenVars = {
            scrollTrigger: {
                trigger: el,
                scrub: 3,
                toggleActions: "play none none reverse",
                start: "30px bottom",
                end: "bottom bottom",
            },
            duration: 0.8,
            ease: "power3.out",
        };

        if (el.classList.contains("effectRight")) {
            config.opacity = 0;
            config.x = 80;
        }
        if (el.classList.contains("effectLeft")) {
            config.opacity = 0;
            config.x = -80;
        }
        if (el.classList.contains("effectBottom")) {
            config.opacity = 0;
            config.y = 100;
        }
        if (el.classList.contains("effectTop")) {
            config.opacity = 0;
            config.y = -80;
        }
        if (el.classList.contains("effectZoomIn")) {
            config.opacity = 0;
            config.scale = 0.4;
        }

        gsap.from(el, config);
    });
}

/* ------------- stackElement ------------- */
function stackElement() {
    const wrapper = document.querySelector(".stack-element");
    if (!wrapper) return;

    const header = document.querySelector(".header-fixed");
    const headerHeight = header?.clientHeight || 0;

    const tabsContent = document.querySelector(".tabs-content-wrap") as HTMLElement;
    if (!tabsContent) return;

    let totalHeight = tabsContent.offsetHeight;
    let triggers: ScrollTrigger[] = [];

    const updateStack = () => {
        triggers.forEach((trigger) => trigger.kill());
        triggers = [];

        const elements = document.querySelectorAll(".element:not(:last-child)");

        elements.forEach((el) => {
            const height = (el as HTMLElement).offsetHeight;
            totalHeight -= height;

            const trigger = ScrollTrigger.create({
                trigger: el,
                scrub: 1,
                start: `top+=-${headerHeight} top`,
                end: `+=${totalHeight}`,
                pin: true,
                pinSpacing: false,
                animation: gsap.to(el, {
                    scale: 0.7,
                    opacity: 0,
                }),
            });

            triggers.push(trigger);
        });
    };

    updateStack();
    window.addEventListener("resize", () => {
        setTimeout(updateStack, 150);
    });
}

/* ------------- animationFooter ------------- */
function animationFooter() {
    const footer = document.querySelector(".footer-container");
    const main = document.querySelector(".main-content");
    if (!footer || !main) return;

    gsap.set(footer, {
        yPercent: -100,
        scale: 0.8,
        opacity: 0,
        transformOrigin: "center bottom",
    });

    const tl = gsap.timeline({ paused: true });
    tl.to(footer, {
        yPercent: 0,
        scale: 1,
        opacity: 1,
        ease: "none",
    });

    ScrollTrigger.create({
        trigger: main,
        start: "bottom bottom",
        end: "+=10%",
        animation: tl,
        scrub: 1,
    });
}

/* ------------- scrollTransform ------------- */
function scrollTransform() {
    const elements = document.querySelectorAll<HTMLElement>(".scroll-tranform");

    elements.forEach((el) => {
        const direction = el.dataset.direction || "up";
        const distance = el.dataset.distance || "10%";
        let animationProp: gsap.TweenVars = {};

        switch (direction.toLowerCase()) {
            case "left":
                animationProp = { x: `-${distance}` };
                break;
            case "right":
                animationProp = { x: distance };
                break;
            case "down":
                animationProp = { y: distance };
                break;
            case "up":
            default:
                animationProp = { y: `-${distance}` };
        }

        gsap.to(el, {
            ...animationProp,
            scrollTrigger: {
                trigger: el,
                start: "top center",
                end: "bottom top",
                scrub: 2,
            },
        });
    });
}
