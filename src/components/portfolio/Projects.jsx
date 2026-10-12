import React from "react";
import { ExternalLink, Github } from "lucide-react";
import { Image } from "@/components/ui/image";
import { profile, projects } from "@/data/portfolio";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const liveButton =
    "inline-flex h-10 items-center gap-2 rounded-full bg-primary px-5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90";
const ghostButton =
    "inline-flex h-10 items-center gap-2 rounded-full border border-[var(--hairline-strong)] px-5 text-sm font-medium transition-colors hover:border-primary hover:text-primary";

export default function Projects() {
    return (
        <section id="projects" className="relative py-20 sm:py-28">
            <div className="shell">
                <Reveal>
                    <SectionHeading
                        eyebrow="Projects"
                        title="Selected work"
                        description="Client websites, full-stack apps and Python projects — a mix of product work and problem solving."
                    />
                </Reveal>

                <div className="mt-14 grid gap-6 md:grid-cols-2">
                    {projects.map((project, i) => (
                        <Reveal key={project.title} delay={(i % 2) * 0.08} className="h-full">
                            <article className="paper lift group flex h-full flex-col overflow-hidden rounded-3xl">
                                <div className="relative m-3 overflow-hidden rounded-2xl">
                                    <div className="relative aspect-video">
                                        <Image
                                            src={project.image}
                                            alt={project.imageAlt}
                                            className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.05]"
                                            fittingType="fill"
                                        />
                                    </div>
                                    <div
                                        className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/70 via-background/5 to-transparent"
                                        aria-hidden="true"
                                    />
                                </div>

                                <div className="flex flex-1 flex-col p-6 pt-3">
                                    <h3 className="font-heading text-xl font-bold tracking-tight">
                                        {project.title}
                                    </h3>
                                    <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">
                                        {project.description}
                                    </p>

                                    <div className="mt-5 flex flex-wrap gap-2">
                                        {project.tags.map((tag) => (
                                            <span key={tag} className="chip">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>

                                    <div className="mt-6 flex flex-wrap gap-2.5 pt-1">
                                        {project.live ? (
                                            <a href={project.live} target="_blank" rel="noreferrer" className={liveButton}>
                                                Live
                                                <ExternalLink className="h-4 w-4" />
                                            </a>
                                        ) : null}
                                        {
                                            project.github ? (
                                                <a
                                                    href={project.github || profile.github}
                                                    target="_blank"
                                                    rel="noreferrer"
                                                    className={ghostButton}
                                                >
                                                    <Github className="h-4 w-4" />
                                                    GitHub
                                                </a>

                                            ) : null
                                        }
                                    </div>
                                </div>
                            </article>
                        </Reveal>
                    ))}
                </div>

                <Reveal delay={0.1}>
                    <p className="mt-10 text-center text-sm text-muted-foreground">
                        More experiments and coursework live on{" "}
                        <a
                            href={profile.github}
                            target="_blank"
                            rel="noreferrer"
                            className="text-foreground underline decoration-primary/40 underline-offset-4 transition hover:decoration-primary"
                        >
                            GitHub
                        </a>
                        .
                    </p>
                </Reveal>
            </div>
        </section>
    );
}