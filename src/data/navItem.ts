// navItems.ts

interface SubMenuNav {
    name: string;
    link: string;
}
export interface NavItem {
    label: string;
    href: string;
    iconClass?: string;
    subMenu?: SubMenuNav[];
}

export const navItems: NavItem[] = [
    {
        label: "Demos",
        href: "#Demos",
        subMenu: [
            {
                name: "Home Default",
                link: "/",
            },
            {
                name: "Home Menu Vertical",
                link: "/home-vertical",
            },
            {
                name: "Home Menu horizontal",
                link: "/home-horizontal",
            },
            {
                name: "Home Backgroud Video",
                link: "/home-background-video",
            },
        ],
    },
    { label: "About", href: "#about", iconClass: "icon icon-User" },
    { label: "Resume", href: "#resume", iconClass: "icon icon-ReadCvLogo" },
    { label: "Services", href: "#services", iconClass: "icon icon-GearFine" },
    { label: "Portfolio", href: "#portfolio", iconClass: "icon icon-Briefcase" },
    { label: "Pricing", href: "#pricing", iconClass: "icon icon-Tag" },
    { label: "Contact", href: "#contact", iconClass: "icon icon-PaperPlaneTilt" },
];
