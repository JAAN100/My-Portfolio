import {
    Palette, Code2, ShoppingCart, Globe, Gauge, Layers,
    Wrench, Server, HardDrive, Network, ShieldCheck, Cloud,
} from "lucide-react";
import SectionShell from "./SectionShell";
import { content } from "@/data/content";

const ICONS = {
    Palette, Code2, ShoppingCart, Globe, Gauge, Layers,
    Wrench, Server, HardDrive, Network, ShieldCheck, Cloud,
};

// Services station: what the IT management business and web design service offer.
export default function ServicesSection() {
    return (
        <SectionShell
            label="Services"
            title="What I build and what I keep running."
            kicker="Two sides of one business: modern web design & development, and the IT management that hosts, secures, and maintains it."
        >
            <div className="space-y-12">
                {content.services.map((section) => (
                    <div key={section.category}>
                        <h3 className="font-mono text-xs tracking-[0.2em] uppercase text-cyan-400/80 mb-5">
                            {section.category}
                        </h3>
                        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                            {section.items.map((item) => {
                                const Icon = ICONS[item.icon] || Code2;
                                return (
                                    <div key={item.title} className="glass rounded-lg p-5 transition hover:border-cyan-400/40">
                                        <Icon className="h-5 w-5 text-cyan-400 mb-3" />
                                        <h4 className="font-heading font-semibold text-slate-100 mb-1">{item.title}</h4>
                                        <p className="text-sm text-slate-400 leading-relaxed">{item.description}</p>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                ))}
            </div>
        </SectionShell>
    );
}