import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Layout from "@components/layout/Layout";
import { portfolioItems } from "@data/portfolioFeature";

interface ProjectPageProps {
    params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
    return portfolioItems.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
    const { slug } = await params;
    const project = portfolioItems.find((item) => item.slug === slug);

    if (!project) return {};

    return {
        title: `${project.title} — Ahmed Hamdi`,
        description: project.shortDescription,
    };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
    const { slug } = await params;
    const project = portfolioItems.find((item) => item.slug === slug);

    if (!project) notFound();

    return (
        <Layout>
            <div className="body-overlay d-block" aria-hidden="true">
                <div className="bg-shape" />
            </div>
            <main className="case-study-page position-relative">
                <div className="tf-container w-6">
                    <Link href="/#portfolio" className="case-study-back text-body-2 font-3">
                        ← Back to Home
                    </Link>

                    <header className="case-study-hero">
                        <div className="tag-heading text-uppercase text-label font-3 letter-spacing-1 mb_24">{project.category}</div>
                        <h1 className="text_white font-4 fw-5 mb_20">{project.title}</h1>
                        <p className="case-study-summary text_muted-color font-3 mb_24">{project.shortDescription}</p>
                        <ul className="case-study-tech-list">
                            {project.tech.map((technology) => (
                                <li key={technology} className="text-caption-1 text_white font-3">{technology}</li>
                            ))}
                        </ul>
                    </header>

                    <section className="case-study-section">
                        <h2 className="font-4 text_white">Overview</h2>
                        <p className="text-body-1 text_muted-color font-3">{project.overview}</p>
                    </section>
                    <section className="case-study-section">
                        <h2 className="font-4 text_white">Problem / Context</h2>
                        <p className="text-body-1 text_muted-color font-3">{project.problem}</p>
                    </section>
                    <section className="case-study-section">
                        <h2 className="font-4 text_white">My Role</h2>
                        <p className="text-body-1 text_muted-color font-3">{project.role}</p>
                    </section>
                    <section className="case-study-section">
                        <h2 className="font-4 text_white">Key Features / Use Cases</h2>
                        <ul className="case-study-list text-body-1 text_muted-color font-3">
                            {project.features.map((feature) => <li key={feature}>{feature}</li>)}
                        </ul>
                    </section>
                    <section className="case-study-section">
                        <h2 className="font-4 text_white">Technical Stack</h2>
                        <div className="case-study-stack">
                            {project.technicalStack.map((group) => (
                                <div key={group.label} className="case-study-stack-group">
                                    <h3 className="text-label text-uppercase text_primary-color font-3 letter-spacing-1">{group.label}</h3>
                                    <p className="text-body-1 text_muted-color font-3">{group.items.join(", ")}</p>
                                </div>
                            ))}
                        </div>
                    </section>
                    <section className="case-study-section">
                        <h2 className="font-4 text_white">Technical / Product Challenges</h2>
                        <ul className="case-study-list text-body-1 text_muted-color font-3">
                            {project.challenges.map((challenge) => <li key={challenge}>{challenge}</li>)}
                        </ul>
                    </section>
                    <section className="case-study-section">
                        <h2 className="font-4 text_white">Outcome</h2>
                        <p className="text-body-1 text_muted-color font-3">{project.outcome}</p>
                    </section>

                    <div className="case-study-visual" role="img" aria-label={`${project.title}, ${project.category}`}>
                        <h2 className="font-4 text_white">{project.title}</h2>
                        <p className="text-body-2 text_muted-color font-3 mb_0">{project.category}</p>
                    </div>

                    <section className="case-study-cta bs-light-mode">
                        <div>
                            <div className="text-label text-uppercase text_primary-color font-3 letter-spacing-1 mb_8">Let&apos;s work together</div>
                            <h2 className="font-4 text_white mb_0">Need something similar?</h2>
                        </div>
                        <div className="case-study-actions">
                            <Link href="/#contact" className="tf-btn style-1 animate-hover-btn">
                                <span>Contact Me</span>
                            </Link>
                            <Link href="/#portfolio" className="tf-btn style-border">
                                <span className="bg_btn" />
                                <span className="title">Back to Work</span>
                                <span className="effect-shine" />
                            </Link>
                        </div>
                    </section>
                </div>
            </main>
        </Layout>
    );
}
