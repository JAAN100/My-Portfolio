import React from "react";
import { motion } from "framer-motion";

/** Gentle fade + rise as a section scrolls into view. */
export default function Reveal({ children, delay = 0, y = 18, className = "" }) {
    return (
        <motion.div
            className={className}
            initial={{ opacity: 0, y }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] }}
        >
            {children}
        </motion.div>
    );
}