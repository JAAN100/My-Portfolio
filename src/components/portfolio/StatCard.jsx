import React, { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

/** One number card; the digit counts up the first time it enters view. */
export default function StatCard({ value, label }) {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, amount: 0.4 });

    const match = /^(\d+)(.*)$/.exec(value);
    const target = match ? parseInt(match[1], 10) : null;
    const suffix = match ? match[2] : "";

    const [display, setDisplay] = useState(target === null ? 0 : 0);

    useEffect(() => {
        if (!inView || target === null) return;
        const duration = 1100;
        const start = performance.now();
        let frame;
        const tick = (now) => {
            const progress = Math.min((now - start) / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setDisplay(Math.round(target * eased));
            if (progress < 1) frame = requestAnimationFrame(tick);
        };
        frame = requestAnimationFrame(tick);
        return () => cancelAnimationFrame(frame);
    }, [inView, target]);

    return (
        <div ref={ref} className="paper lift rounded-2xl px-6 py-5">
            <div className="text-accent font-heading text-3xl font-extrabold tracking-tight">
                {target === null ? value : `${display}${suffix}`}
            </div>
            <p className="mt-1.5 text-sm text-muted-foreground">{label}</p>
        </div>
    );
}