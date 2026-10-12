import React from "react";
import { Check, Layers, MonitorSmartphone, Rocket, ShieldCheck } from "lucide-react";
import { services } from "@/data/portfolio";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const ICONS = { MonitorSmartphone, Layers, Rocket, ShieldCheck };

export default function Services() {
    return (
        <section id="services" className="relative py-20 sm:py-28">
            <div className="shell">
                <Reveal>
                    <SectionHeading
                        eyebrow="Services"
                        title="What I can do for you"
                        description="Whether you need a new website a full-stack product or reliable DevOps and cloud computing solutions to deploy, scale and keep your systems running smoothly."
                    />
                </Reveal>

                <div className="mt-14 grid gap-5 sm:grid-cols-2">
                    {services.map((service, i) => {
                        const Icon = ICONS[service.icon] || Layers;
                        return (
                            <Reveal key={service.title} delay={i * 0.06} className="h-full">
                                <article className="paper lift h-full rounded-3xl p-7">
                                    <span className="grid h-12 w-12 place-items-center rounded-2xl bg-primary text-primary-foreground">
                                        <Icon className="h-5 w-5" />
                                    </span>
                                    <h3 className="mt-6 font-heading text-xl font-bold tracking-tight">
                                        {service.title}
                                    </h3>
                                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                                        {service.description}
                                    </p>
                                    <ul className="mt-6 space-y-2.5">
                                        {service.points.map((point) => (
                                            <li key={point} className="flex items-center gap-2.5 text-sm text-muted-foreground">
                                                <Check className="h-4 w-4 shrink-0 text-primary" />
                                                {point}
                                            </li>
                                        ))}
                                    </ul>
                                </article>
                            </Reveal>
                        );
                    })}
                </div>
            </div>
        </section>
    );
} 