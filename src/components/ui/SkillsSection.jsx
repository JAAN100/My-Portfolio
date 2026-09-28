import SectionShell from "./SectionShell";
import { content } from "@/data/content";

// Skills station: grouped tech tags. The 3D scene carries the visual flourish;
// this is the accessible, semantic list of capabilities.
export default function SkillsSection() {
    return (
        <SectionShell label="Skills" title="The stack I ship with.">
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                {content.skills.map((group) => (
                    <div key={group.group} className="glass rounded-lg p-6">
                        <h3 className="font-mono text-xs tracking-[0.2em] uppercase text-cyan-400/80 mb-4">
                            {group.group}
                        </h3>
                        <ul className="flex flex-wrap gap-2">
                            {group.items.map((item) => (
                                <li
                                    key={item}
                                    className="rounded-md border border-white/10 bg-white/5 px-3 py-1.5 text-sm text-slate-200"
                                >
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </SectionShell>
    );
}