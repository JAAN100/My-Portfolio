import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink, Github, User } from "lucide-react";
import { Image } from "@/components/ui/image";
import LinkButton from "./LinkButton";

// Accessible detail dialog for a project. Traps focus loosely, closes on Esc
// and backdrop click, and exposes role/tech/links.
export default function ProjectModal({ project, onClose }) {
    useEffect(() => {
        if (!project) return;
        const onKey = (e) => e.key === "Escape" && onClose();
        document.addEventListener("keydown", onKey);
        document.body.style.overflow = "hidden";
        return () => {
            document.removeEventListener("keydown", onKey);
            document.body.style.overflow = "";
        };
    }, [project, onClose]);

    return (
        <AnimatePresence>
            {project && (
                <motion.div
                    className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                >
                    <div
                        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
                        onClick={onClose}
                        aria-hidden="true"
                    />
                    <motion.div
                        role="dialog"
                        aria-modal="true"
                        aria-label={project.title}
                        className="relative glass rounded-xl w-full max-w-lg p-6 sm:p-8 max-h-[85vh] overflow-y-auto"
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 20 }}
                        transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                    >
                        <button
                            onClick={onClose}
                            aria-label="Close project details"
                            className="absolute top-4 right-4 text-slate-400 hover:text-cyan-400 transition focus-visible:outline-2 focus-visible:outline-cyan-400 rounded-md p-1"
                        >
                            <X className="h-5 w-5" />
                        </button>

                        {project.image && (
                            <div className="relative -mx-6 -mt-6 sm:-mx-8 sm:-mt-8 mb-5 aspect-video w-[calc(100%+3rem)] sm:w-[calc(100%+4rem)] overflow-hidden">
                                <Image
                                    src={project.image}
                                    alt={`${project.title} preview`}
                                    className="h-full w-full object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#0b1220] via-transparent to-transparent" />
                            </div>
                        )}
                        <div className="font-mono text-[11px] tracking-[0.2em] uppercase text-cyan-400/80 mb-2">
                            {project.type}
                        </div>
                        <h3 className="font-heading text-2xl font-bold text-slate-50 mb-3">{project.title}</h3>
                        <p className="text-slate-300 leading-relaxed mb-5">{project.description}</p>

                        {project.features?.length > 0 && (
                            <ul className="mb-5 space-y-1.5">
                                {project.features.map((f) => (
                                    <li key={f} className="flex items-start gap-2 text-sm text-slate-400">
                                        <span className="mt-2 h-1 w-1 rounded-full bg-cyan-400 shrink-0" />
                                        {f}
                                    </li>
                                ))}
                            </ul>
                        )}

                        <div className="mb-5">
                            <div className="font-mono text-[11px] tracking-wider uppercase text-slate-500 mb-2">
                                Tech used
                            </div>
                            <div className="flex flex-wrap gap-2">
                                {project.tech.map((t) => (
                                    <span
                                        key={t}
                                        className="rounded-md border border-white/10 bg-white/5 px-2.5 py-1 text-xs text-slate-200"
                                    >
                                        {t}
                                    </span>
                                ))}
                            </div>
                        </div>

                        <div className="flex items-center gap-2 text-sm text-slate-400 mb-6">
                            <User className="h-4 w-4 text-cyan-400" />
                            <span className="font-mono text-xs tracking-wider uppercase text-slate-500">Role:</span>
                            {project.role}
                        </div>

                        <div className="flex flex-wrap gap-3">
                            <LinkButton href={project.links?.live} label="Live site" icon={ExternalLink} primary />
                            <LinkButton href={project.links?.github} label="GitHub" icon={Github} />
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}