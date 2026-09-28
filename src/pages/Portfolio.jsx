import { useState, lazy, Suspense } from "react";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";
import { usePerformanceTier } from "@/hooks/usePerformanceTier";
import Loader from "@/components/ui/Loader";
import Hud from "@/components/layout/Hud";
import HeroSection from "@/components/ui/HeroSection";
import AboutSection from "@/components/ui/AboutSection";
import SkillsSection from "@/components/ui/SkillsSection";
import ProjectsSection from "@/components/ui/ProjectsSection";
import ServicesSection from "@/components/ui/ServicesSection";
import ContactSection from "@/components/ui/ContactSection";
import { content } from "@/data/content";
import SceneErrorBoundary from "@/components/canvas/SceneErrorBoundary";
import { Linkedin, Github, Mail } from "lucide-react";


// Lazy-load the 3D scene so the initial HTML/SEO content paints fast and the
// heavy three.js bundle only loads when needed.
const Scene = lazy(() => import("@/components/canvas/Scene"));

export default function Portfolio() {
    const reduced = usePrefersReducedMotion();
    const tier = usePerformanceTier();
    const [ready, setReady] = useState(false);

    return (
        <div className="relative min-h-screen text-slate-200">
            {/* Skip link for keyboard users */}
            <a
                href="#main"
                className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-50 focus:rounded-md focus:bg-cyan-500 focus:px-3 focus:py-2 focus:text-[#020617]"
            >
                Skip to content
            </a>

            <Loader onDone={() => setReady(true)} />

            {/* 3D background (or static gradient fallback for reduced motion) */}
            {!reduced ? (
                <SceneErrorBoundary>
                    <div className="fixed inset-0 z-0 pointer-events-none">
                        <Suspense fallback={null}>
                            <Scene reducedMotion={reduced} perfTier={tier} />
                        </Suspense>
                    </div>
                </SceneErrorBoundary>
            ) : (
                <div className="fixed inset-0 -z-10 gradient-fallback" aria-hidden="true" />
            )}

            {/* Subtle data-grid overlay for the HUD aesthetic */}
            <div className="fixed inset-0 z-0 pointer-events-none grid-bg opacity-[0.06]" aria-hidden="true" />

            <Hud />

            <main
                id="main"
                className={`relative z-10 transition-opacity duration-700 ${ready ? "opacity-100" : "opacity-0"}`}
            >
                <HeroSection />
                <AboutSection />
                <SkillsSection />
                <ProjectsSection />
                <ServicesSection />
                <ContactSection />
            </main>

            <footer className="relative z-10 border-t border-white/10 px-6 sm:px-10 lg:px-24 py-10">
                <div className="mx-auto max-w-6xl flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-slate-500">
                    <p>©2024 - {new Date().getFullYear() < 2028 ? 2028 : new Date().getFullYear()} {content.name}. All rights reserved.</p>
                    <div className="flex items-center gap-4">
                        <a href="https://www.linkedin.com/in/hassan-jaan/" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition-colors">
                            <Linkedin className="h-5 w-5" />
                        </a>
                        <a href="https://github.com/JAAN100" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition-colors">
                            <Github className="h-5 w-5" />
                        </a>
                        <a href="mailto:hassan.jan.solo@gmail.com" className="hover:text-cyan-400 transition-colors">
                            <Mail className="h-5 w-5" />
                        </a>
                    </div>
                </div>
            </footer>
        </div>
    );
}