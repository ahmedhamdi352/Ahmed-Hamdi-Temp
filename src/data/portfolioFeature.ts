export interface PortfolioItem {
    image: string;
    tag: string;
    title: string;
    alt: string;
    link?: string;
}

export const portfolioItems: PortfolioItem[] = [
    {
        image: "/assets/images/user/portfolio-item-1-1.webp",
        tag: "Conversational AI",
        title: "AI-Powered Chatbot",
        alt: "portfolio-1",
    },
    {
        image: "/assets/images/user/portfolio-item-3-1.webp",
        tag: "Predictive Analytics",
        title: "Sales Forecast Dashboard",
        alt: "portfolio-2",
    },
    {
        image: "/assets/images/user/portfolio-item-2-1.webp",
        tag: "Computer Vision",
        title: "Real-Time Object Detection",
        alt: "portfolio-3",
    },
    {
        image: "/assets/images/user/portfolio-item-4-1.webp",
        tag: "Resume Pro",
        title: "Resume ZenG pro",
        alt: "portfolio-4",
    },
];
