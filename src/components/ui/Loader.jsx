import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Full-screen loading overlay with a progress indicator.
// Intentionally dependency-free (no @react-three/drei here) so the 3D stack
// loads only via the lazy Scene import — if three/drei ever fails to load, the
// rest of the portfolio still renders. Progress is simulated; a safety timer
// guarantees the overlay always dismisses.
export default function Loader({ onDone }) {
    const [pct, setPct] = useState(0);
    const [hidden, setHidden] = useState(false);

    // Animate a simulated progress bar to 100%.
    useEffect(() => {
        let v = 0;
        const id = setInterval(() => {
            v = Math.min(100, v + Math.random() * 16 + 8);
            setPct(Math.round(v));
            if (v >= 100) clearInterval(id);
        }, 130);
        return () => clearInterval(id);
    }, []);

    // Dismiss once progress completes.
    useEffect(() => {
        if (pct >= 100) {
            const t = setTimeout(() => {
                setHidden(true);
                onDone?.();
            }, 450);
            return () => clearTimeout(t);
        }
    }, [pct, onDone]);

    // Safety net: never let the loader hang.
    useEffect(() => {
        const t = setTimeout(() => {
            setPct(100);
            setHidden(true);
            onDone?.();
        }, 4000);
        return () => clearTimeout(t);
    }, [onDone]);

    return (
        <AnimatePresence>
            {!hidden && (
                <motion.div
                    className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#020617]"
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.6 }}
                    aria-live="polite"
                >
                    <div className="font-mono text-xs tracking-[0.4em] text-cyan-400/80 mb-6">
                        INITIALIZING SCENE
                    </div>
                    <div className="h-px w-56 bg-white/10 overflow-hidden">
                        <motion.div
                            className="h-full bg-cyan-400"
                            animate={{ width: `${pct}%` }}
                            transition={{ ease: "easeOut", duration: 0.3 }}
                        />
                    </div>
                    <div className="mt-3 font-mono text-xs text-slate-500">{pct}%</div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}