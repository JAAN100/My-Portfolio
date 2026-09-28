import { useState } from "react";
import emailjs from "@emailjs/browser";
import { Send, Loader2, CheckCircle2, AlertCircle } from "lucide-react";

// EmailJS-powered contact form with a simulated-send fallback when env vars
// are missing (so the form always works for demos / local dev).
const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
const CONFIGURED = Boolean(SERVICE_ID && TEMPLATE_ID && PUBLIC_KEY);

export default function ContactForm() {
    const [form, setForm] = useState({ name: "", email: "", message: "" });
    const [status, setStatus] = useState("idle"); // idle | sending | success | error
    const [error, setError] = useState("");

    const update = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));

    const onSubmit = async (e) => {
        e.preventDefault();
        setStatus("sending");
        setError("");
        try {
            if (CONFIGURED) {
                await emailjs.send(SERVICE_ID, TEMPLATE_ID, { ...form, to_email: "hassan.jan.solo@gmail.com" }, { publicKey: PUBLIC_KEY });
            } else {
                // Simulated send — no email is actually transmitted.
                await new Promise((r) => setTimeout(r, 900));
                // eslint-disable-next-line no-console
                console.info("[ContactForm] Simulated send (EmailJS not configured):", form);
            }
            setStatus("success");
            setForm({ name: "", email: "", message: "" });
        } catch (err) {
            console.error(err);
            setStatus("error");
            setError(err?.text || err?.message || "Something went wrong. Please try again.");
        }
    };

    if (status === "success") {
        return (
            <div className="glass rounded-lg p-6 flex items-center justify-center gap-3">
                <CheckCircle2 className="h-5 w-5 text-cyan-400 mt-0.5" />
                <div>
                    <p className="text-slate-100 font-medium">Message sent. Thanks for reaching out!</p>
                    <button
                        onClick={() => setStatus("idle")}
                        className="mt-3 text-sm text-cyan-400 hover:text-cyan-300 underline-offset-4 hover:underline"
                    >
                        Send another
                    </button>
                </div>
            </div>
        );
    }

    return (
        <form onSubmit={onSubmit} className="glass rounded-lg p-6 space-y-4">
            <div>
                <label htmlFor="cf-name" className="block font-mono text-[11px] tracking-wider uppercase text-slate-400 mb-1.5">
                    Name
                </label>
                <input
                    id="cf-name"
                    required
                    value={form.name}
                    onChange={update("name")}
                    className="w-full rounded-md border border-white/10 bg-white/5 px-3 py-2.5 text-slate-100 placeholder:text-slate-500 focus:border-cyan-400/60 focus-visible:outline-2 focus-visible:outline-cyan-400"
                    placeholder="Your name"
                />
            </div>
            <div>
                <label htmlFor="cf-email" className="block font-mono text-[11px] tracking-wider uppercase text-slate-400 mb-1.5">
                    Email
                </label>
                <input
                    id="cf-email"
                    type="email"
                    required
                    value={form.email}
                    onChange={update("email")}
                    className="w-full rounded-md border border-white/10 bg-white/5 px-3 py-2.5 text-slate-100 placeholder:text-slate-500 focus:border-cyan-400/60 focus-visible:outline-2 focus-visible:outline-cyan-400"
                    placeholder="you@example.com"
                />
            </div>
            <div>
                <label htmlFor="cf-message" className="block font-mono text-[11px] tracking-wider uppercase text-slate-400 mb-1.5">
                    Message
                </label>
                <textarea
                    id="cf-message"
                    required
                    rows={4}
                    value={form.message}
                    onChange={update("message")}
                    className="w-full rounded-md border border-white/10 bg-white/5 px-3 py-2.5 text-slate-100 placeholder:text-slate-500 focus:border-cyan-400/60 focus-visible:outline-2 focus-visible:outline-cyan-400 resize-y"
                    placeholder="Tell me about your project…"
                />
            </div>

            {status === "error" && (
                <div className="flex items-start gap-2 text-sm text-rose-400">
                    <AlertCircle className="h-4 w-4 mt-0.5" />
                    <span>{error}</span>
                </div>
            )}

            <button
                type="submit"
                disabled={status === "sending"}
                className="inline-flex items-center gap-2 rounded-md bg-cyan-500 px-5 py-2.5 text-sm font-medium text-[#020617] transition hover:bg-cyan-400 disabled:opacity-60 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-400"
            >
                {status === "sending" ? <Loader2 className="h-4 w-4 animate-spin" /> : <Send className="h-4 w-4" />}
                {status === "sending" ? "Sending…" : "Send message"}
            </button>

        </form>
    );
}