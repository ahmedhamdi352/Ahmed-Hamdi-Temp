export interface ServiceItem {
    number: string;
    title: string;
    description: string;
}

export const services: ServiceItem[] = [
    {
        number: "01/",
        title: "Full Stack Web Applications",
        description: "I build production-ready web platforms from UI to backend integration — including dashboards, portals, workflows, authentication, and API-connected business systems.",
    },
    {
        number: "02/",
        title: "AI Chatbot Experiences",
        description: "I design and build chatbot interfaces that connect users with real services — including guided flows, response states, feedback handling, service actions, and backend AI integration.",
    },
    {
        number: "03/",
        title: "Enterprise Dashboards",
        description: "I turn complex operational data into clear dashboards with filters, tables, charts, monitoring views, and reporting interfaces for business and support teams.",
    },
    {
        number: "04/",
        title: "Internal Service Platforms",
        description: "I build secure internal portals and service hubs that help teams request services, track workflows, manage permissions, and access tools from one place.",
    },
];
