import React from "react";
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";
import { Image } from "@/components/ui/image";
import { profile } from "@/data/portfolio";
import Reveal from "./Reveal";
import Typewriter from "./Typewriter";

const socialLink =
    "grid h-11 w-11 place-items-center rounded-full border border-[var(--hairline-strong)] text-muted-foreground transition-colors hover:border-primary hover:text-primary";

export default function Hero() {
    return (
        <section id="top" className="relative overflow-hidden pt-32 pb-16 sm:pt-40 sm:pb-24">
            <div className="shell grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-12">
                <div>
                    <Reveal>
                        <span className="chip gap-2">
                            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                            {profile.availability}
                        </span>
                    </Reveal>

                    <Reveal delay={0.06}>
                        <h1 className="mt-6 font-heading text-4xl font-black leading-[1.03] tracking-[-0.03em] sm:text-6xl lg:text-7xl">
                            Hi, I&apos;m <span className="text-[hsl(var(--muted-foreground))]">{profile.name}</span>
                        </h1>
                    </Reveal>

                    <Reveal delay={0.12}>
                        <p className="mt-6 min-h-[2rem] font-heading text-lg font-medium tracking-tight sm:text-2xl text-[hsl(var(--primary))]">
                            <Typewriter words={profile.roles} />
                        </p>
                    </Reveal>

                    <Reveal delay={0.18}>
                        <p className="mt-6 max-w-xl text-base font-light leading-relaxed text-muted-foreground">
                            {profile.pitch}
                        </p>
                    </Reveal>

                    <Reveal delay={0.24}>
                        <div className="mt-9 flex flex-wrap items-center gap-3">
                            <a
                                href="#projects"
                                className="inline-flex h-12 items-center gap-2 rounded-full bg-primary px-7 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90">

                                View Projects
                                <ArrowRight className="h-4 w-4" />
                            </a>
                            <a
                                href="#contact"
                                className="inline-flex h-12 items-center gap-2 rounded-full border border-[var(--hairline-strong)] px-7 text-sm font-medium transition-colors hover:border-primary hover:text-primary">

                                Contact Me
                            </a>
                        </div>
                    </Reveal>

                    <Reveal delay={0.3}>
                        <div className="mt-10 flex items-center gap-3">
                            <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub profile" className={socialLink}>
                                <Github className="h-4 w-4" />
                            </a>
                            <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn profile" className={socialLink}>
                                <Linkedin className="h-4 w-4" />
                            </a>
                            <a href={`mailto:${profile.email}`} aria-label="Email Hassan" className={socialLink}>
                                <Mail className="h-4 w-4" />
                            </a>
                        </div>
                    </Reveal>
                </div>

                <Reveal delay={0.15} className="justify-self-center">
                    <div className="paper h-64 w-64 rounded-full p-3 sm:h-80 sm:w-80 lg:h-[21rem] lg:w-[21rem]">
                        <div className="h-full w-full overflow-hidden rounded-full bg-background">
                            <Image
                                src={profile.avatar}
                                alt={`${profile.name} monogram`}
                                className="h-full w-full rounded-full object-cover"
                                fittingType="fill" />

                        </div>
                    </div>
                </Reveal>
            </div>
        </section>);

}