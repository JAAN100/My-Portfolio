import { useState } from "react";
import { motion, AnimatePresence, useScroll, useSpring } from "framer-motion";
import { Menu, X } from "lucide-react";
import { content } from "@/data/content";

const NAV = [
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Work", href: "#work" },
    { label: "Services", href: "#services" },
    { label: "Contact", href: "#contact" },
];

// Fixed Heads-Up Display: brand mark, section nav, scroll progress bar, and a
// mobile menu. Keyboard navigable with visible focus states.
export default function Hud() {
    const [open, setOpen] = useState(false);
    const { scrollYProgress } = useScroll();
    const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 30, restDelta: 0.001 });

    return (
        <header className="fixed top-0 inset-x-0 z-40">
            {/* Scroll progress bar */}
            <motion.div
                className="h-0.5 origin-left bg-cyan-400"
                style={{ scaleX: progress }}
            />

            <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-24">
                <div className="flex h-16 items-center justify-between">
                    <a
                        href="#hero"
                        className="text-[25px] font-heading font-bold tracking-tight text-slate-50 text-glow focus-visible:outline-2 focus-visible:outline-cyan-400"
                    >
                        {content.name}
                    </a>

                    <nav className="hidden md:flex items-center gap-7" aria-label="Section navigation">
                        {NAV.map((n) => (
                            <a
                                key={n.href}
                                href={n.href}
                                className="font-mono text-xs tracking-wider uppercase text-slate-400 hover:text-cyan-400 transition focus-visible:outline-2 focus-visible:outline-cyan-400"
                            >
                                {n.label}
                            </a>
                        ))}
                    </nav>

                    <button
                        className="md:hidden text-slate-300 hover:text-cyan-400 transition focus-visible:outline-2 focus-visible:outline-cyan-400"
                        onClick={() => setOpen((o) => !o)}
                        aria-label="Toggle navigation menu"
                        aria-expanded={open}
                    >
                        {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                    </button>
                </div>
            </div>

            <AnimatePresence>
                {open && (
                    <motion.nav
                        className="md:hidden glass border-t border-white/10 px-6 py-4"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        aria-label="Mobile section navigation"
                    >
                        <div className="flex flex-col gap-3">
                            {NAV.map((n) => (
                                <a
                                    key={n.href}
                                    href={n.href}
                                    onClick={() => setOpen(false)}
                                    className="font-mono text-xs tracking-wider uppercase text-slate-300 hover:text-cyan-400 transition"
                                >
                                    {n.label}
                                </a>
                            ))}
                        </div>
                    </motion.nav>
                )}
            </AnimatePresence>
        </header>
    );
}