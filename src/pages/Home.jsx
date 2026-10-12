import React from "react";
import Navbar from "@/components/portfolio/Navbar";
import Hero from "@/components/portfolio/Hero";
import About from "@/components/portfolio/About";
import Skills from "@/components/portfolio/Skills";
import Projects from "@/components/portfolio/Projects";
import Services from "@/components/portfolio/Services";
import Contact from "@/components/portfolio/Contact";
import Footer from "@/components/portfolio/Footer";

export default function Home() {
    return (
        <div className="relative min-h-screen overflow-x-hidden bg-background">
            <Navbar />

            <main>
                <Hero />
                <About />
                <Skills />
                <Projects />
                <Services />
                <Contact />
            </main>

            <Footer />
        </div>
    );
}