export interface ServiceItem {
    number: string;
    title: string;
    link: string;
    hoverImage: string;
}

export const services: ServiceItem[] = [
    {
        number: "01/",
        title: "Custom AI Solutions",
        link: "#contact",
        hoverImage: "/assets/images/item/service-item-1.webp",
    },
    {
        number: "02/",
        title: "Data Analysis & Visualization",
        link: "#contact",
        hoverImage: "/assets/images/item/service-item-2.webp",
    },
    {
        number: "03/",
        title: "Machine Learning Automation",
        link: "#contact",
        hoverImage: "/assets/images/item/service-item-3.webp",
    },
    {
        number: "04/",
        title: "AI Consulting & Training",
        link: "#contact",
        hoverImage: "/assets/images/item/service-item-4.webp",
    },
];
