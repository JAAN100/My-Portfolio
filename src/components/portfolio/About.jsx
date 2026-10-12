import React from "react";
import { Briefcase, MapPin } from "lucide-react";
import { about, profile } from "@/data/portfolio";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import StatCard from "./StatCard";

export default function About() {
    return (
        <section id="about" className="relative py-20 sm:py-28">
            <div className="shell">
                <Reveal>
                    <SectionHeading
                        eyebrow="About"
                        title="A developer who also runs the IT side"
                        align="left"
                    />
                </Reveal>

                <div className="mt-12 grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:gap-14">
                    <Reveal delay={0.05}>
                        <div className="space-y-5 text-base leading-relaxed text-muted-foreground">
                            {about.paragraphs.map((paragraph) => (
                                <p key={paragraph}>{paragraph}</p>
                            ))}
                        </div>

                        <div className="mt-8 flex flex-wrap gap-3">
                            <span className="chip gap-2">
                                <MapPin className="h-3.5 w-3.5" />
                                {profile.location}
                            </span>
                            <span className="chip gap-2">
                                <Briefcase className="h-3.5 w-3.5" />
                                AI Engineer & Full-stack Developer
                            </span>
                        </div>
                    </Reveal>

                    <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
                        {about.stats.map((stat, i) => (
                            <Reveal key={stat.label} delay={0.1 + i * 0.07}>
                                <StatCard value={stat.value} label={stat.label} />
                            </Reveal>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}