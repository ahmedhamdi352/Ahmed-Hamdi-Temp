// navItems.ts

export interface NavItem {
    label: string;
    href: string;
    iconClass?: string;
}

export const navItems: NavItem[] = [
    { label: "About", href: "#about", iconClass: "icon icon-User" },
    { label: "Resume", href: "#resume", iconClass: "icon icon-ReadCvLogo" },
    { label: "Services", href: "#services", iconClass: "icon icon-GearFine" },
    { label: "Portfolio", href: "#portfolio", iconClass: "icon icon-Briefcase" },
    { label: "Engagement", href: "#engagement", iconClass: "icon icon-Tag" },
    { label: "Contact", href: "#contact", iconClass: "icon icon-PaperPlaneTilt" },
];
