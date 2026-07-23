export interface PortfolioItem {
    slug: string;
    route: string;
    image: string;
    category: string;
    title: string;
    shortDescription: string;
    tech: string[];
    overview: string;
    problem: string;
    role: string;
    features: string[];
    challenges: string[];
    outcome: string;
}

export const portfolioItems: PortfolioItem[] = [
    {
        slug: "aix-chatbot-platform",
        route: "/work/aix-chatbot-platform",
        image: "/assets/images/user/portfolio-item-1-1.webp",
        category: "Government AI Platform",
        title: "AIx Chatbot Platform",
        shortDescription: "AI chatbot experience deployed across web and mobile channels, connecting users with AI-powered services and internal workflows.",
        tech: ["React", "TypeScript", "AI Integration", "APIs"],
        overview: "Enterprise AI chatbot experience deployed across web and mobile channels.",
        problem: "Users need simple access to AI-powered services across multiple digital channels while internal teams need maintainable workflows and visibility.",
        role: "Built and improved chatbot-facing UI, integration flows, service interaction patterns, and support for operational visibility.",
        features: [
            "Web and mobile chatbot experience",
            "Guided service flows",
            "AI response rendering",
            "Feedback and interaction states",
            "Backend service integration",
            "Back-office visibility support",
        ],
        challenges: [
            "Consistent behavior across web and mobile",
            "Handling async AI response states",
            "Secure enterprise integration",
            "Reusable conversational UI patterns",
        ],
        outcome: "Improved access to AI-powered services and supported a scalable foundation for future chatbot capabilities.",
    },
    {
        slug: "ai-service-hub",
        route: "/work/ai-service-hub",
        image: "/assets/images/user/portfolio-item-3-1.webp",
        category: "Internal AI Platform",
        title: "AI Service Hub",
        shortDescription: "Secure internal platform for discovering, accessing, and consuming on-premise AI services through governed workflows.",
        tech: ["Next.js", "TypeScript", "Node.js", "Python", "APIs"],
        overview: "Secure internal platform that helps teams discover and consume on-premise AI services.",
        problem: "Internal teams need governed access to AI services without dealing with service complexity or security concerns directly.",
        role: "Worked on platform UI, service access flows, reusable patterns, and integration-ready frontend structures.",
        features: [
            "AI service catalog",
            "Service request flows",
            "Role-aware access patterns",
            "Internal service consumption",
            "Governed AI service usage",
            "Request tracking",
        ],
        challenges: [
            "Secure on-premise constraints",
            "Scalable service catalog design",
            "Reusable integration patterns",
            "Clear UX for non-technical users",
        ],
        outcome: "Created a centralized entry point for internal AI services and improved service discoverability.",
    },
    {
        slug: "customer-insights-back-office",
        route: "/work/customer-insights-back-office",
        image: "/assets/images/user/portfolio-item-2-1.webp",
        category: "Analytics Dashboard",
        title: "Customer Insights Back Office",
        shortDescription: "Back-office dashboard experience for chatbot operations, customer insights, monitoring, filters, and service performance visibility.",
        tech: ["React", "TypeScript", "Dashboards", "APIs", "Analytics"],
        overview: "Back-office dashboard experience for chatbot operations, analytics, customer insights, and service performance.",
        problem: "Teams need visibility into chatbot usage, customer interaction patterns, monitoring, and service performance.",
        role: "Designed and built dashboard interfaces, filters, state handling, tables, charts, and data-driven UI patterns.",
        features: [
            "Chatbot performance dashboards",
            "Customer insights views",
            "Filters and reporting",
            "Monitoring screens",
            "Tables and charts",
            "Empty, loading, and error states",
        ],
        challenges: [
            "Presenting data clearly",
            "Handling analytics-heavy views",
            "Responsive dashboard layouts",
            "Permission-aware states",
        ],
        outcome: "Improved operational visibility and reporting workflows for chatbot and customer insight teams.",
    },
    {
        slug: "misk-city-digital-products",
        route: "/work/misk-city-digital-products",
        image: "/assets/images/user/portfolio-item-4-1.webp",
        category: "Web & Mobile Product",
        title: "Misk City Digital Products",
        shortDescription: "React Native mobile app and React web experience for city services, events, community features, and digital engagement.",
        tech: ["React Native", "React", "JavaScript/TypeScript", "APIs"],
        overview: "Web and mobile digital experience for city services, events, community features, and user engagement.",
        problem: "Users need a smooth digital channel to access city services and community updates.",
        role: "Contributed to React Native mobile app and React web interfaces.",
        features: ["Mobile app screens", "Web experience", "City services", "Events", "Community features", "API integration"],
        challenges: ["Cross-platform delivery", "Responsive UX", "Consistent web and mobile experience"],
        outcome: "Supported delivery of a digital product across web and mobile channels.",
    },
    {
        slug: "pif-cobuilderops",
        route: "/work/pif-cobuilderops",
        image: "/assets/images/user/portfolio-item-3-1.webp",
        category: "Enterprise Workflow Platform",
        title: "PIF CoBuilderOps",
        shortDescription: "Project management platform supporting task management, progress tracking, resource allocation, and team collaboration.",
        tech: ["React", "APIs", "Enterprise UI", "Performance Optimization"],
        overview: "Enterprise project management platform supporting construction and infrastructure workflows.",
        problem: "Teams need structured workflows for task management, progress tracking, resource allocation, and collaboration.",
        role: "Enhanced frontend interfaces, workflow views, data-heavy screens, and usability.",
        features: ["Task management views", "Progress tracking", "Resource allocation", "Team collaboration", "Filters and tables", "Workflow interfaces"],
        challenges: ["Complex workflow UI", "Data-heavy screens", "Performance and usability", "Clear status visibility"],
        outcome: "Improved usability and interface quality for project management workflows.",
    },
    {
        slug: "restaurant-operations-platform",
        route: "/work/restaurant-operations-platform",
        image: "/assets/images/user/portfolio-item-4-1.webp",
        category: "Internal Operations System",
        title: "Restaurant Operations Platform",
        shortDescription: "Internal POS and restaurant operations platform supporting sales, administration, and daily workflow management.",
        tech: ["React", "Redux", "Node.js", "Django", "Laravel", "SQLite"],
        overview: "Internal POS and restaurant operations platform supporting sales, administration, and daily workflows.",
        problem: "Restaurant teams needed a system to manage operational workflows and sales processes.",
        role: "Built frontend interfaces and contributed to backend features for internal operations.",
        features: ["POS workflows", "Sales and admin flows", "Internal tools", "Restaurant operations", "Backend support"],
        challenges: ["Internal workflow complexity", "Maintaining business operations features", "Frontend and backend coordination"],
        outcome: "Supported daily restaurant operations through an internal full-stack system.",
    },
];
