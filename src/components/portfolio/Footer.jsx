import React from "react";
import { ArrowUp, Github, Linkedin, Mail } from "lucide-react";
import { navLinks, profile } from "@/data/portfolio";

export default function Footer() {
    const year = new Date().getFullYear();

    return (
        <footer className="relative overflow-hidden border-t border-[var(--hairline)]">
            <div className="shell relative pt-16">
                <div className="grid gap-10 pb-14 sm:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr]">
                    <div>
                        <a href="#top" className="flex items-center gap-2.5">
                            <span className="text-[#b5805e] grid h-9 w-9 place-items-center rounded-lg border border-[var(--hairline-strong)] font-heading text-xs font-bold">
                                HJ
                            </span>
                            <span className="font-heading text-sm font-bold tracking-tight">
                                {profile.name}
                            </span>
                        </a>
                        <p className="mt-5 max-w-xs text-sm leading-relaxed text-muted-foreground">
                            Full-stack development, web design, hosting and IT management for businesses that
                            want their tech handled properly.
                        </p>
                        <div className="mt-6 flex items-center gap-2">
                            <a
                                href={profile.github}
                                target="_blank"
                                rel="noreferrer"
                                aria-label="GitHub profile"
                                className="grid h-10 w-10 place-items-center rounded-full border border-[var(--hairline)] text-muted-foreground transition-colors hover:border-primary/40 hover:text-foreground"
                            >
                                <Github className="h-4 w-4" />
                            </a>
                            <a
                                href={profile.linkedin}
                                target="_blank"
                                rel="noreferrer"
                                aria-label="LinkedIn profile"
                                className="grid h-10 w-10 place-items-center rounded-full border border-[var(--hairline)] text-muted-foreground transition-colors hover:border-primary/40 hover:text-foreground"
                            >
                                <Linkedin className="h-4 w-4" />
                            </a>
                            <a
                                href={`mailto:${profile.email}`}
                                aria-label="Send an email"
                                className="grid h-10 w-10 place-items-center rounded-full border border-[var(--hairline)] text-muted-foreground transition-colors hover:border-primary/40 hover:text-foreground"
                            >
                                <Mail className="h-4 w-4" />
                            </a>
                        </div>
                    </div>

                    <div>
                        <h3 className="font-heading text-sm font-semibold tracking-tight">Quick links</h3>
                        <ul className="mt-5 space-y-3">
                            {navLinks.map((link) => (
                                <li key={link.href}>
                                    <a
                                        href={link.href}
                                        className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                                    >
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-heading text-sm font-semibold tracking-tight">Get in touch</h3>
                        <ul className="mt-5 space-y-3">
                            <li>
                                <a
                                    href={`mailto:${profile.email}`}
                                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                                >
                                    {profile.email}
                                </a>
                            </li>
                            <li>
                                <a
                                    href={profile.github}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                                >
                                    github.com/JAAN100
                                </a>
                            </li>
                            <li>
                                <a
                                    href={profile.linkedin}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                                >
                                    linkedin.com/in/hassan-jaan
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="flex flex-col gap-4 border-t border-[var(--hairline)] py-6 sm:flex-row sm:items-center sm:justify-between">
                    <p className="text-xs text-muted-foreground">
                        © 2024 - {year} {profile.name}. All rights reserved.
                    </p>
                    <div className="flex items-center gap-4">
                        <a
                            href="#top"
                            aria-label="Back to top"
                            className="grid h-9 w-9 place-items-center rounded-full border border-[var(--hairline)] text-muted-foreground transition-colors hover:border-primary/40 hover:text-foreground"
                        >
                            <ArrowUp className="h-4 w-4" />
                        </a>
                    </div>
                </div>
            </div>

            <div aria-hidden="true" className="pointer-events-none select-none">
                <p className="whitespace-nowrap text-center font-heading text-[13vw] font-bold leading-[0.85] tracking-tighter text-foreground/[0.06]">
                    HASSAN JAAN
                </p>
            </div>
        </footer>
    );
}