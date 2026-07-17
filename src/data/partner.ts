export interface Partner {
    id: number;
    img: string;
    size: string;
    delay?: number;
}

export const partners: Partner[] = [
    { id: 1, img: "/assets/images/logo/partner-1.png", size: "sz-100", delay: 0.3 },
    { id: 2, img: "/assets/images/logo/partner-3.png", size: "sz-80" },
    { id: 3, img: "/assets/images/logo/partner-2.png", size: "sz-80" },
    { id: 4, img: "/assets/images/logo/partner-5.png", size: "sz-60" },
    { id: 5, img: "/assets/images/logo/partner-8.png", size: "sz-60" },
    { id: 6, img: "/assets/images/logo/partner-6.png", size: "sz-100" },
    { id: 7, img: "/assets/images/logo/partner-9.png", size: "sz-200", delay: 0.4 },
    { id: 8, img: "/assets/images/logo/partner-4.png", size: "sz-160", delay: 0.5 },
    { id: 9, img: "/assets/images/logo/partner-7.png", size: "sz-120", delay: 0.6 },
    { id: 10, img: "/assets/images/logo/partner-7.png", size: "sz-120", delay: 0.7 },
    { id: 11, img: "/assets/images/logo/partner-6.png", size: "sz-100" },
    { id: 12, img: "/assets/images/logo/partner-3.png", size: "sz-80" },
];
