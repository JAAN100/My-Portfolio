import { Linkedin, Github, Mail } from "lucide-react";
import SectionShell from "./SectionShell";
import ContactForm from "./ContactForm";
import { content } from "@/data/content";

// Contact station: working form plus LinkedIn / GitHub / email links.
export default function ContactSection() {
    return (
        <SectionShell
            id="contact"
            label="Contact"
            title="Let's build something."
            kicker="Have a project, a site that needs maintaining or built from scratch? Send a message or reach me directly."
        >
            <div className="grid gap-8 lg:grid-cols-2">
                <ContactForm />
                <div className="flex flex-col justify-center gap-4">
                    <p className="text-slate-400 leading-relaxed">
                        Prefer a direct line? Use any of the channels below.
                    </p>
                    <div className="space-y-3">
                        <a
                            href={`mailto:${content.email}`}
                            className="flex items-center gap-3 glass rounded-lg p-4 hover:border-cyan-400/40 transition focus-visible:outline-2 focus-visible:outline-cyan-400"
                        >
                            <Mail className="h-5 w-5 text-cyan-400" />
                            <span className="text-slate-200">{content.email}</span>
                        </a>
                        <a
                            href={content.socials.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-3 glass rounded-lg p-4 hover:border-cyan-400/40 transition focus-visible:outline-2 focus-visible:outline-cyan-400"
                        >
                            <Linkedin className="h-5 w-5 text-cyan-400" />
                            <span className="text-slate-200">LinkedIn · /in/hassan-jaan</span>
                        </a>
                        <a
                            href={content.socials.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-3 glass rounded-lg p-4 hover:border-cyan-400/40 transition focus-visible:outline-2 focus-visible:outline-cyan-400"
                        >
                            <Github className="h-5 w-5 text-cyan-400" />
                            <span className="text-slate-200">GitHub · /JAAN100</span>
                        </a>
                    </div>
                </div>
            </div>
        </SectionShell>
    );
}