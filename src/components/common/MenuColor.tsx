"use client";
import { useEffect } from "react";
import { featureBackgrounds } from "@data/featureBg";

export default function SettingMenu() {
    return (
        <div className="offcanvas offcanvas-bottom popup-setting" id="setting-menu">
            <div className="close-menu" data-bs-dismiss="offcanvas">
                <i className="icon icon-times-solid"></i>
            </div>

            <div className="offcanvas-body">
                <div className="mb-body">
                    <div className="inner">
                        <div className="setting-color-option">
                            <div className="wrap-features">
                                <ColorChoose />
                                <span className="line"></span>
                                <BackgroundChoose />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export function ColorChoose() {
    useEffect(() => {
        import("bootstrap/dist/js/bootstrap.bundle.min");

        const COLOR_KEY = "selectedColorIndex";
        const items = document.querySelectorAll<HTMLAnchorElement>(".choose-item");

        function setColor(index: string | number) {
            document.body.setAttribute("data-color-primary", `color-primary-${index}`);
        }

        function setActiveItem(index: number) {
            items.forEach((el) => el.classList.remove("active"));
            if (items[index]) {
                items[index].classList.add("active");
            }
        }

        const savedIndex = localStorage.getItem(COLOR_KEY);
        if (savedIndex !== null) {
            setColor(savedIndex);
            setActiveItem(Number(savedIndex) - 1);
        }

        items.forEach((item, index) => {
            item.addEventListener("click", () => {
                setColor(index + 1);
                setActiveItem(index);
                localStorage.setItem(COLOR_KEY, String(index + 1));
            });
        });

        return () => {
            items.forEach((item) => {
                const newItem = item.cloneNode(true);
                item.replaceWith(newItem);
            });
        };
    }, []);
    return (
        <>
            <div className="feature-color tf-setting-color">
                <h5 className="font-4 mb_29">Color</h5>
                <div className="settings-color list-choose">
                    {Array.from({ length: 8 }).map((_, index) => (
                        <a
                            key={index}
                            href="#"
                            className={`choose-item link-no-action ${index === 0 ? "active" : ""}`}
                            onClick={(e) => {
                                e.preventDefault();
                            }}
                        ></a>
                    ))}
                </div>
            </div>
        </>
    );
}
export function BackgroundChoose({ targetBlank = false }: { targetBlank?: boolean }) {
    useEffect(() => {
        const VIDEO_KEY = "selectedVideoFile";
        const items = document.querySelectorAll<HTMLElement>(".feature-bg-item");

        function setVideo(videoFile: string) {
            const sourceEl = document.querySelector(".bg-video source") as HTMLSourceElement | null;
            const videoEl = document.querySelector(".bg-video") as HTMLVideoElement | null;

            if (sourceEl && videoEl) {
                const newSrc = `/assets/video/${videoFile}`;
                if (sourceEl.src !== location.origin + newSrc) {
                    sourceEl.src = newSrc;
                    videoEl.load();
                }
            }
        }

        function setActiveItem(index: number) {
            const bodyOverlay = document.querySelector(".body-overlay");
            items.forEach((el) => el.classList.remove("active"));

            if (bodyOverlay?.classList.contains("bg-video") && items[index]) {
                items[index].classList.add("active");
            }
        }

        const savedVideo = localStorage.getItem(VIDEO_KEY);
        if (savedVideo) {
            const index = featureBackgrounds.findIndex((item) => item.videoFile === savedVideo);
            if (index !== -1) {
                setVideo(savedVideo);
                setActiveItem(index);
            }
        }

        items.forEach((item, index) => {
            item.addEventListener("click", (e) => {
                const videoFile = featureBackgrounds[index].videoFile;
                if (videoFile) {
                    const bodyOverlay = document.querySelector(".body-overlay");
                    localStorage.setItem(VIDEO_KEY, videoFile);

                    if (bodyOverlay?.classList.contains("bg-video")) {
                        setVideo(videoFile);
                        setActiveItem(index);
                    } else {
                        items.forEach((el) => el.classList.remove("active"));
                        if (!targetBlank) {
                            window.location.href = "home-background-video";
                        }
                    }
                }
            });
        });

        return () => {
            items.forEach((item) => {
                const newItem = item.cloneNode(true);
                item.replaceWith(newItem);
            });
        };
    }, []);

    return (
        <div className="features-background">
            <h5 className="font-4 mb_19">Background</h5>
            <div className="d-flex flex-wrap wrap-feature-bg-item">
                {featureBackgrounds.map((item, index) => (
                    <div className="feature-bg-item" key={index}>
                        <img src={item.imgSrc} alt="feature-bg" loading="lazy" />
                        {targetBlank ? (
                            <a href="home-background-video" target="_blank" className="text-body-1 text_white font-3">
                                {item.label}
                            </a>
                        ) : (
                            <a
                                href="home-background-video"
                                className="text-body-1 text_white font-3"
                                onClick={(e) => {
                                    const bodyOverlay = document.querySelector(".body-overlay");
                                    if (bodyOverlay?.classList.contains("bg-video")) {
                                        e.preventDefault();
                                    }
                                }}
                            >
                                {item.label}
                            </a>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}
