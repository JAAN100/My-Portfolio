import { motion } from "framer-motion";

// Shared wrapper for every portfolio "station". Keeps section markup DRY and
// applies the consistent reveal animation + station label.
export default function SectionShell({ id, index, label, title, kicker, children, className = "" }) {
    return (
        <section
            id={id}
            tabIndex={-1}
            className={`relative min-h-screen w-full flex items-center px-6 sm:px-10 lg:px-24 py-28 ${className}`}
        >
            <div className="mx-auto w-full max-w-6xl">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.25 }}
                    transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                >
                    <div className="flex items-center gap-3 mb-6 font-mono text-[11px] tracking-[0.3em] text-cyan-400/80 uppercase">
                        <span className="h-px w-10 bg-cyan-400/50" />
                        {index} · {label}
                    </div>
                    {title && (
                        <h2 className="font-heading text-3xl sm:text-5xl font-bold tracking-tight text-slate-50 mb-6 text-glow">
                            {title}
                        </h2>
                    )}
                    {kicker && <p className="text-slate-400 max-w-2xl mb-10 leading-relaxed">{kicker}</p>}
                    {children}
                </motion.div>
            </div>
        </section>
    );
}