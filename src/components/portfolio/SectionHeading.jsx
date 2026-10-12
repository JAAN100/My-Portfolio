import React from "react";

/**
 * Editorial section heading: a full-width hairline rule carrying a small
 * uppercase numeral at its left end and the section label at its right.
 */
export default function SectionHeading({ numeral, eyebrow, title, description, align = "center" }) {
    const centered = align === "center";

    return (
        <div>
            <div className="flex items-center justify-between gap-6 border-t border-[var(--hairline-strong)] pt-3.5">
                <span className="label-xs">{numeral}</span>
                {eyebrow ? <span className="label-xs">{eyebrow}</span> : null}
            </div>

            <div className={centered ? "mx-auto mt-7 max-w-2xl text-center" : "mt-7 max-w-2xl"}>
                <h2 className="font-heading text-3xl font-extrabold leading-tight tracking-[-0.02em] sm:text-4xl lg:text-[2.75rem]">
                    {title}
                </h2>
                {description ? (
                    <p className="mt-4 text-base font-light leading-relaxed text-muted-foreground">
                        {description}
                    </p>
                ) : null}
            </div>
        </div>
    );
}