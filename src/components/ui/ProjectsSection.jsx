import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Image } from "@/components/ui/image";
import SectionShell from "./SectionShell";
import ProjectModal from "./ProjectModal";
import { content } from "@/data/content";

// Projects station: floating cards with a 3D tilt on hover. Click opens the
// detail modal. Markup is written once and reflows via Tailwind responsive grids.
function ProjectCard({ project, onOpen }) {
    return (
        <motion.button
            onClick={() => onOpen(project)}
            whileHover={{ rotateX: 5, rotateY: -5, scale: 1.02 }}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
            style={{ transformPerspective: 1000 }}
            className="group text-left glass rounded-xl p-0 h-full overflow-hidden focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-400"
            aria-label={`Open details for ${project.title}`}
        >
            {project.image && (
                <div className="relative aspect-video w-full overflow-hidden">
                    <Image
                        src={project.image}
                        alt={`${project.title} preview`}
                        className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-transparent to-transparent" />
                </div>
            )}
            <div className="p-6">
                <div className="flex items-start justify-between gap-3 mb-3">
                    <div className="font-mono text-[11px] tracking-[0.2em] uppercase text-cyan-400/80">
                        {project.type}
                    </div>
                    <ArrowUpRight className="h-4 w-4 text-slate-500 group-hover:text-cyan-400 transition" />
                </div>
                <h3 className="font-heading text-xl font-semibold text-slate-50 mb-2">{project.title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed mb-4 line-clamp-3">{project.description}</p>
                <div className="flex flex-wrap gap-1.5">
                    {project.tech.slice(0, 4).map((t) => (
                        <span
                            key={t}
                            className="rounded border border-white/10 bg-white/5 px-2 py-0.5 text-[11px] text-slate-300"
                        >
                            {t}
                        </span>
                    ))}
                    {project.tech.length > 4 && (
                        <span className="rounded border border-white/10 px-2 py-0.5 text-[11px] text-slate-500">
                            +{project.tech.length - 4}
                        </span>
                    )}
                </div>
            </div>
        </motion.button>
    );
}

export default function ProjectsSection() {
    const [active, setActive] = useState(null);

    return (
        <SectionShell
            label="Work"
            title="Selected projects."
            kicker="From multi-vendor e-commerce to client websites and full-stack apps. Click any project for details, tech, and links."
        >
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {content.projects.map((p) => (
                    <ProjectCard key={p.title} project={p} onOpen={setActive} />
                ))}
            </div>
            <ProjectModal project={active} onClose={() => setActive(null)} />
        </SectionShell>
    );
}