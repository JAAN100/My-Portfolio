import React, { useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle2, Github, Linkedin, Loader2, Mail, Send } from "lucide-react";
import { profile } from "@/data/portfolio";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

// EmailJS via its REST API (no npm package needed), with a simulated-send
// fallback when the credentials are missing (so the form always works for
// demos / local dev).
const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
const CONFIGURED = Boolean(SERVICE_ID && TEMPLATE_ID && PUBLIC_KEY);

const EMPTY = { name: "", email: "", message: "" };

export default function Contact() {
    const [form, setForm] = useState(EMPTY);
    const [status, setStatus] = useState("idle"); // idle | sending | sent
    const [error, setError] = useState("");

    const update = (field) => (event) => setForm((f) => ({ ...f, [field]: event.target.value }));

    const handleSubmit = async (event) => {
        event.preventDefault();
        setError("");

        if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
            setError("Please fill in every field.");
            return;
        }

        const payload = {
            name: form.name.trim(),
            email: form.email.trim(),
            message: form.message.trim(),
        };

        setStatus("sending");
        try {
            if (CONFIGURED) {
                const res = await fetch("https://api.emailjs.com/api/v1.0/email/send", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({
                        service_id: SERVICE_ID,
                        template_id: TEMPLATE_ID,
                        user_id: PUBLIC_KEY,
                        template_params: { ...payload, to_email: profile.email },
                    }),
                });
                if (!res.ok) throw new Error(await res.text());
            } else {
                // Simulated send — no email is actually transmitted.
                await new Promise((r) => setTimeout(r, 900));
                // eslint-disable-next-line no-console
                console.info("[Contact] Simulated send (EmailJS not configured):", payload);
            }
            setForm(EMPTY);
            setStatus("sent");
        } catch (err) {
            console.error(err);
            setStatus("idle");
            setError("That didn't send. Please try again, or email me directly.");
        }
    };

    return (
        <section id="contact" className="relative py-20 sm:py-28">
            <div className="shell">
                <Reveal>
                    <SectionHeading
                        eyebrow="Contact"
                        title="Let's build something together"
                        description="Tell me what you have in mind a new site, a web app or help with the technical side of your business."
                    />
                </Reveal>

                <div className="mt-14 grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">
                    <Reveal delay={0.05}>
                        <div className="paper h-full rounded-3xl p-7">
                            <h3 className="font-heading text-lg font-bold tracking-tight">
                                Prefer to reach out directly?
                            </h3>
                            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                                I usually reply within a day. Send a message using any of the links below.
                            </p>

                            <div className="mt-7 space-y-3">
                                <a
                                    href={`mailto:${profile.email}`}
                                    className="lift paper-flat flex items-center gap-3 rounded-2xl px-4 py-3.5"
                                >
                                    <span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-primary text-primary-foreground">
                                        <Mail className="h-4 w-4" />
                                    </span>
                                    <span className="min-w-0">
                                        <span className="block text-xs text-muted-foreground">Email</span>
                                        <span className="block truncate text-sm">{profile.email}</span>
                                    </span>
                                </a>

                                <a
                                    href={profile.github}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="lift paper-flat flex items-center gap-3 rounded-2xl px-4 py-3.5"
                                >
                                    <span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl border border-[var(--hairline)] bg-[var(--wash)]">
                                        <Github className="h-4 w-4 text-primary" />
                                    </span>
                                    <span className="min-w-0">
                                        <span className="block text-xs text-muted-foreground">GitHub</span>
                                        <span className="block truncate text-sm">github.com/JAAN100</span>
                                    </span>
                                </a>

                                <a
                                    href={profile.linkedin}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="lift paper-flat flex items-center gap-3 rounded-2xl px-4 py-3.5"
                                >
                                    <span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl border border-[var(--hairline)] bg-[var(--wash)]">
                                        <Linkedin className="h-4 w-4 text-primary" />
                                    </span>
                                    <span className="min-w-0">
                                        <span className="block text-xs text-muted-foreground">LinkedIn</span>
                                        <span className="block truncate text-sm">linkedin.com/in/hassan-jaan</span>
                                    </span>
                                </a>
                            </div>
                        </div>
                    </Reveal>

                    <Reveal delay={0.1}>
                        <div className="paper rounded-3xl p-7">
                            {status === "sent" ? (
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.98 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                                    className="flex h-full flex-col items-center justify-center py-10 text-center"
                                >
                                    <span className="grid h-14 w-14 place-items-center rounded-full bg-primary text-primary-foreground">
                                        <CheckCircle2 className="h-7 w-7" />
                                    </span>
                                    <h3 className="mt-5 font-heading text-xl font-semibold tracking-tight">
                                        Message received
                                    </h3>
                                    <p className="mt-2 max-w-sm text-sm leading-relaxed text-muted-foreground">
                                        Thanks for reaching out — I've got your message and I'll reply as soon as I can.
                                    </p>
                                    <Button variant="outline" className="mt-6" onClick={() => setStatus("idle")}>
                                        Send another message
                                    </Button>
                                </motion.div>
                            ) : (
                                <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                                    <div className="grid gap-5 sm:grid-cols-2">
                                        <div className="space-y-2">
                                            <Label htmlFor="contact-name">Name</Label>
                                            <Input
                                                id="contact-name"
                                                value={form.name}
                                                onChange={update("name")}
                                                placeholder="Your name"
                                                autoComplete="name"
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <Label htmlFor="contact-email">Email</Label>
                                            <Input
                                                id="contact-email"
                                                type="email"
                                                value={form.email}
                                                onChange={update("email")}
                                                placeholder="you@example.com"
                                                autoComplete="email"
                                            />
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <Label htmlFor="contact-message">Message</Label>
                                        <Textarea
                                            id="contact-message"
                                            value={form.message}
                                            onChange={update("message")}
                                            placeholder="Tell me about your project…"
                                            rows={6}
                                        />
                                    </div>

                                    {error ? <p className="text-sm text-destructive">{error}</p> : null}

                                    <Button
                                        type="submit"
                                        disabled={status === "sending"}
                                        className="w-full bg-primary text-primary-foreground hover:opacity-90"
                                    >
                                        {status === "sending" ? (
                                            <>
                                                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                                Sending…
                                            </>
                                        ) : (
                                            <>
                                                <Send className="mr-2 h-4 w-4" />
                                                Send message
                                            </>
                                        )}
                                    </Button>
                                </form>
                            )}
                        </div>
                    </Reveal>
                </div>
            </div>
        </section>
    );
}