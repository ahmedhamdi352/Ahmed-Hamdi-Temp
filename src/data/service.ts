export interface ServiceItem {
    number: string;
    title: string;
    description: string;
}

export const services: ServiceItem[] = [
    {
        number: "01/",
        title: "AI Chatbot Experiences",
        description: "Web and mobile chatbot interfaces, guided service flows, feedback states, and backend AI integrations.",
    },
    {
        number: "02/",
        title: "Enterprise Dashboards",
        description: "Back-office dashboards, analytics views, filters, reporting screens, and operational visibility for business teams.",
    },
    {
        number: "03/",
        title: "Internal Service Platforms",
        description: "Service hubs, request workflows, role-aware access, and secure internal tools for enterprise teams.",
    },
    {
        number: "04/",
        title: "Full Stack Web Applications",
        description: "React/Next.js frontends, APIs, authentication, integrations, and production-ready delivery.",
    },
];
