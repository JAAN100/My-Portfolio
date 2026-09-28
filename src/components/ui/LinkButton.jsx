// A link button that gracefully handles placeholder URLs. When the href is a
// "[PLACEHOLDER]" or null, it renders a disabled-looking label instead of a
// broken link, so it's clear where a real link should go.
export function isPlaceholder(v) {
    return !v || String(v).startsWith("[");
}

export default function LinkButton({ href, label, icon: Icon, primary = false }) {
    const base =
        "inline-flex items-center gap-2 rounded-md px-3.5 py-2 text-sm font-medium transition focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-400";
    if (isPlaceholder(href)) {
        return (
            <span
                className={`${base} border border-white/10 text-slate-500 cursor-not-allowed`}
                aria-disabled="true"
                title="Link not set yet"
            >
                {Icon && <Icon className="h-4 w-4" />}
                {label}
            </span>
        );
    }
    return (
        <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className={
                primary
                    ? `${base} bg-cyan-500 text-[#020617] hover:bg-cyan-400`
                    : `${base} border border-white/15 text-slate-200 hover:border-cyan-400/60 hover:text-cyan-300`
            }
        >
            {Icon && <Icon className="h-4 w-4" />}
            {label}
        </a>
    );
}