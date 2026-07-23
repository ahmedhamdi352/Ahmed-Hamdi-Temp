export interface ResumeItem {
    title: string;
    company: string;
    date: string;
    description: string;
    highlights: string[];
    footerTag: string;
    compactDescription: string;
    compactHighlights: string[];
}
export interface ResumeSectionProps {
    className?: string;
    onPreviewChange?: (item: ResumeItem | null) => void;
}

export const resumeItems: ResumeItem[] = [
    {
        title: "Senior Full Stack Engineer",
        company: "Dubai Police - Department of AI",
        date: "Jul 2025 - Present",
        description: "Building secure AI-enabled platforms that connect chatbot experiences, internal services, dashboards, and operational workflows for enterprise government teams.",
        highlights: [
            "Enterprise AI platforms",
            "AI chatbot experiences",
            "Back-office dashboards",
            "Internal AI service hub",
            "Secure on-premise delivery",
        ],
        footerTag: "Government AI • Full Stack • Secure Systems",
        compactDescription: "Building secure AI-enabled platforms, chatbot systems, dashboards, and internal service workflows.",
        compactHighlights: [
            "Enterprise AI platforms",
            "AI chatbot experiences",
            "Back-office dashboards",
            "Internal AI service hub",
        ],
    },
    {
        title: "Senior Front-End Developer",
        company: "Apps Wave",
        date: "Jan 2024 - Jun 2025",
        description: "Delivered scalable web and mobile interfaces for enterprise and public-facing digital products with focus on usability, performance, and reusable UI patterns.",
        highlights: [
            "React and Next.js interfaces",
            "React Native mobile delivery",
            "REST API integrations",
            "Reusable component patterns",
            "Product-focused frontend delivery",
        ],
        footerTag: "Frontend Architecture • Web & Mobile",
        compactDescription: "Delivered scalable web and mobile interfaces for enterprise and public-facing digital products.",
        compactHighlights: [
            "React / Next.js interfaces",
            "React Native delivery",
            "REST API integrations",
            "Reusable UI patterns",
        ],
    },
    {
        title: "Senior Full Stack Developer",
        company: "Barq Systems",
        date: "Jan 2022 - Jan 2024",
        description: "Worked on full-stack applications across frontend, backend integrations, code quality, maintainability, and delivery workflows for business-critical platforms.",
        highlights: [
            "React and TypeScript apps",
            "Node.js backend integration",
            "Code reviews and mentoring",
            "Legacy code refactoring",
            "CI/CD delivery support",
        ],
        footerTag: "Full Stack • Mentoring • Delivery Quality",
        compactDescription: "Worked on full-stack applications with focus on maintainability, integrations, and delivery quality.",
        compactHighlights: [
            "React / TypeScript apps",
            "Node.js integrations",
            "Code reviews",
            "CI/CD support",
        ],
    },
    {
        title: "Front-End Developer",
        company: "Terkwaz Business Solution",
        date: "Sep 2020 - Jan 2022",
        description: "Built responsive frontend applications and translated product designs into production-ready interfaces for distributed teams and client projects.",
        highlights: [
            "Responsive web applications",
            "JavaScript and React features",
            "UX/UI implementation",
            "REST API integration",
            "Git-based collaboration",
        ],
        footerTag: "Frontend Delivery • Remote Collaboration",
        compactDescription: "Built responsive frontend applications and production-ready interfaces for client projects.",
        compactHighlights: [
            "Responsive web apps",
            "React features",
            "UX/UI implementation",
            "REST API integration",
        ],
    },
    {
        title: "Front-End / Full Stack Developer",
        company: "Cuisine Company",
        date: "Jan 2018 - Sep 2020",
        description: "Built and maintained internal restaurant operations and POS workflows across frontend and backend layers to support daily business operations.",
        highlights: [
            "POS system workflows",
            "React and Redux frontend",
            "Backend feature support",
            "Restaurant operations tools",
            "Internal business workflows",
        ],
        footerTag: "POS Systems • Internal Tools • Operations",
        compactDescription: "Built internal restaurant operations and POS workflows across frontend and backend layers.",
        compactHighlights: [
            "POS workflows",
            "React / Redux frontend",
            "Backend support",
            "Internal tools",
        ],
    },
    {
        title: "B.Sc. Computer & Information Sciences",
        company: "Ain Shams University",
        date: "Sep 2013 - May 2017",
        description: "Academic foundation in computer science, software development, databases, information systems, and problem solving.",
        highlights: [
            "Computer science fundamentals",
            "Software development",
            "Databases",
            "Information systems",
            "Problem solving",
        ],
        footerTag: "Computer Science • Software Engineering",
        compactDescription: "Academic foundation in computer science, software development, databases, and information systems.",
        compactHighlights: [
            "Computer science",
            "Software development",
            "Databases",
            "Information systems",
        ],
    },
];
