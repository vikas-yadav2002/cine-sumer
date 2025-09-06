"use client";

import AboutSumerFade from "@/components/roadmap/Into";
import Roadmap from "@/components/roadmap/roadmap";
import { Footer } from "@/components/site/Footer";
import { Navbar } from "@/components/site/Navbar";


export default function RoadmapPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-filmbox-bg text-white">
        {/* SumerFade Intro Section */}
        <section id="intro" className="py-16 px-6 max-w-6xl mx-auto">
          <AboutSumerFade />
        </section>

        {/* Roadmap Section */}
        <section id="roadmap" className="py-16 px-6 max-w-6xl mx-auto">
          <Roadmap />
        </section>
      </main>
      <Footer />
    </>
  );
}
