import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Menu, Moon, Sun, X } from "lucide-react";
import { navLinks, profile } from "@/data/portfolio";
import useTheme from "@/hooks/useTheme";

export default function Navbar() {
    const { theme, toggle } = useTheme();
    const [scrolled, setScrolled] = useState(false);
    const [active, setActive] = useState("");
    const [open, setOpen] = useState(false);

    useEffect(() => {
        const ids = navLinks.map((link) => link.href.replace("#", ""));

        const onScroll = () => {
            setScrolled(window.scrollY > 16);
            const mark = window.scrollY + 160;
            let current = "";
            ids.forEach((id) => {
                const el = document.getElementById(id);
                if (el && el.offsetTop <= mark) current = id;
            });
            setActive(current);
        };

        onScroll();
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <header
            className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${scrolled
                ? "border-b border-[var(--hairline-strong)] bg-background"
                : "border-b border-transparent bg-transparent"
                }`}
        >
            <nav className="shell flex h-16 items-center justify-between sm:h-20">
                <a href="#top" className="flex items-center gap-2.5">
                    <span className="text-[#b5805e] grid h-9 w-9 place-items-center rounded-lg border border-[var(--hairline-strong)] font-heading text-xs font-bold">
                        HJ
                    </span>
                    <span className="font-heading text-sm font-bold tracking-tight">{profile.name}</span>
                </a>

                <div className="hidden items-center gap-1 md:flex">
                    {navLinks.map((link) => {
                        const isActive = active === link.href.replace("#", "");
                        return (
                            <a
                                key={link.href}
                                href={link.href}
                                className={`relative rounded-full px-3.5 py-2 text-sm transition-colors ${isActive ? "text-foreground" : "text-muted-foreground hover:text-foreground"
                                    }`}
                            >
                                {link.label}
                                {isActive ? (
                                    <motion.span
                                        layoutId="nav-underline"
                                        className="absolute inset-x-3 -bottom-0.5 h-[2px] rounded-full bg-primary"
                                        transition={{ type: "spring", stiffness: 380, damping: 32 }}
                                    />
                                ) : null}
                            </a>
                        );
                    })}
                </div>

                <div className="flex items-center gap-2">
                    <button
                        type="button"
                        onClick={toggle}
                        aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
                        className="grid h-11 w-11 place-items-center rounded-full border border-[var(--hairline)] text-muted-foreground transition-colors hover:border-primary/40 hover:text-foreground"
                    >
                        {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
                    </button>

                    <button
                        type="button"
                        onClick={() => setOpen((o) => !o)}
                        aria-label={open ? "Close menu" : "Open menu"}
                        aria-expanded={open}
                        className="grid h-11 w-11 place-items-center rounded-full border border-[var(--hairline)] text-muted-foreground md:hidden"
                    >
                        {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                    </button>
                </div>
            </nav>

            {open ? (
                <div className="border-t border-[var(--hairline-strong)] bg-background md:hidden">
                    <div className="shell flex flex-col py-3">
                        {navLinks.map((link) => (
                            <a
                                key={link.href}
                                href={link.href}
                                onClick={() => setOpen(false)}
                                className="rounded-xl px-3 py-3 text-sm text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
                            >
                                {link.label}
                            </a>
                        ))}
                    </div>
                </div>
            ) : null}
        </header>
    );
}