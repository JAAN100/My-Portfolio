import React from "react";
import { Binary, Database, Layout, Rocket, Server } from "lucide-react";
import { skillGroups } from "@/data/portfolio";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const ICONS = { Layout, Server, Database, Rocket, Binary };

export default function Skills() {
    return (
        <section id="skills" className="relative py-20 sm:py-28">
            <div className="shell">
                <Reveal>
                    <SectionHeading
                        eyebrow="Skills"
                        title="The toolkit I build with"
                        description="From interface polish to database design — the stack I reach for on client work."
                    />
                </Reveal>

                <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                    {skillGroups.map((group, i) => {
                        const Icon = ICONS[group.icon] || Layout;
                        return (
                            <Reveal key={group.title} delay={i * 0.06} className="h-full">
                                <article className="paper lift h-full rounded-3xl p-6">
                                    <span className="grid h-11 w-11 place-items-center rounded-2xl border border-[var(--hairline)] bg-[var(--wash)]">
                                        <Icon className="h-5 w-5 text-primary" />
                                    </span>
                                    <h3 className="mt-5 font-heading text-lg font-bold tracking-tight">
                                        {group.title}
                                    </h3>
                                    <div className="mt-4 flex flex-wrap gap-2">
                                        {group.items.map((item) => (
                                            <span key={item} className="chip">
                                                {item}
                                            </span>
                                        ))}
                                    </div>
                                </article>
                            </Reveal>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}