export interface ResumeItem {
    title: string;
    company: string;
    date: string;
}
export interface ResumeSectionProps {
    className?: string;
}

export const resumeItems: ResumeItem[] = [
    {
        title: "AI Developer",
        company: "Google Inc.",
        date: "2020 - Present",
    },
    {
        title: "Machine Learning Engineer",
        company: "Microsoft Inc.",
        date: "2018 - 2020",
    },
    {
        title: "Data Scientist",
        company: "IBM Inc.",
        date: "2014 - 2018",
    },
    {
        title: "M.Sc. in Computer Science",
        company: "Stanford University",
        date: "2013 - 2014",
    },
    {
        title: "B.Sc. in Information Technology",
        company: "MIT",
        date: "2008 - 2013",
    },
];
