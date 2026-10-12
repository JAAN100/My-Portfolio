import React, { useEffect, useState } from "react";

/** Types a role out, pauses, deletes it, then moves to the next. */
export default function Typewriter({ words, className = "" }) {
    const [index, setIndex] = useState(0);
    const [text, setText] = useState("");
    const [deleting, setDeleting] = useState(false);

    useEffect(() => {
        const word = words[index % words.length];

        if (!deleting && text === word) {
            const pause = setTimeout(() => setDeleting(true), 1700);
            return () => clearTimeout(pause);
        }

        if (deleting && text === "") {
            setDeleting(false);
            setIndex((i) => (i + 1) % words.length);
            return;
        }

        const timer = setTimeout(
            () => setText(deleting ? word.slice(0, text.length - 1) : word.slice(0, text.length + 1)),
            deleting ? 38 : 78
        );
        return () => clearTimeout(timer);
    }, [text, deleting, index, words]);

    return (
        <span className={className}>
            <span className="text-[hsl(var(--chart-3))]">{text}</span>
            <span className="animate-caret ml-0.5 font-light text-primary">|</span>
            <span className="sr-only">{words.join(", ")}</span>
        </span>);

}