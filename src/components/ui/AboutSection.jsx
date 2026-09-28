import SectionShell from "./SectionShell";
import { content } from "@/data/content";

// About station: bio panel + floating stats card.
export default function AboutSection() {
    return (
        <SectionShell label="About" title="Bridging infrastructure and experience.">
            <div className="grid gap-10 md:grid-cols-5">
                <p className="md:col-span-3 text-slate-300 leading-relaxed text-lg">{content.about.bio}</p>
                <div className="md:col-span-2 grid grid-cols-2 gap-4 self-start">
                    {content.about.stats.map((s) => (
                        <div key={s.label} className="glass rounded-lg p-5">
                            <div className="font-heading text-2xl font-bold text-cyan-400 text-glow">{s.value}</div>
                            <div className="mt-1 font-mono text-[11px] tracking-wider uppercase text-slate-400">
                                {s.label}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </SectionShell>
    );
}