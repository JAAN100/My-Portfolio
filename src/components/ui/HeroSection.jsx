import { motion } from "framer-motion";
import { ArrowDown, FolderOpen, Mail } from "lucide-react";
import { content } from "@/data/content";

// Hero station. The visible name is rendered in 3D (behind, in the canvas);
// this <h1> is visually hidden so screen readers still announce it.
export default function HeroSection() {
    return (
        <section
            id="hero"
            className="relative min-h-screen w-full flex items-center px-6 sm:px-10 lg:px-24"
        >
            <div className="mx-auto w-full max-w-6xl">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
                    className="max-w-2xl"
                >
                    <h1 className="sr-only">{content.name}</h1>
                    <p className="font-mono text-sm text-slate-400 mb-4">{content.role}</p>
                    <p className="font-heading text-2xl sm:text-4xl font-semibold tracking-tight text-slate-50 leading-tight mb-10 text-glow">
                        {content.tagline}
                    </p>
                    <div className="flex flex-wrap items-center gap-4">
                        <a
                            href="#work"
                            className="inline-flex items-center gap-2 rounded-md bg-cyan-500 px-5 py-3 text-sm font-medium text-[#020617] transition hover:bg-cyan-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-400"
                        >
                            <FolderOpen className="h-4 w-4" /> View my work
                        </a>
                        <a
                            href="#contact"
                            className="inline-flex items-center gap-2 rounded-md border border-white/15 px-5 py-3 text-sm font-medium text-slate-200 transition hover:border-cyan-400/60 hover:text-cyan-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-400"
                        >
                            <Mail className="h-4 w-4" /> Contact me
                        </a>
                    </div>
                </motion.div>

                <motion.a
                    href="#about"
                    aria-label="Scroll to about"
                    className="absolute bottom-10 left-1/2 -translate-x-1/2 text-slate-500 hover:text-cyan-400 transition"
                    animate={{ y: [0, 8, 0] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                >
                    <ArrowDown className="h-5 w-5" />
                </motion.a>
            </div>
        </section>
    );
}