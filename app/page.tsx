"use client";

import {HeroSection} from "@/components/sections/HeroSection";
import NewsSection from "@/components/sections/NewsSection";
import AboutSection from "@/components/sections/AboutSection";
import TeachingSection from "@/components/sections/TeachingSection";
import ExpertServiceSection from "@/components/sections/ExpertServiceSection";
import PublicationsSection from "@/components/sections/PublicationsSection";
import ContactSection from "@/components/sections/ContactSection";
import InauguralLectureSection from "@/components/sections/InauguralLectureSection";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-white dark:bg-[#020617] selection:bg-brand-gold selection:text-brand-navy">
      
      {/* 1. Hero Section — The impact entry */}
      <HeroSection />

      {/* 2. News & Updates — Dynamic pulse */}
      <NewsSection />

      {/* 2.5 Inaugural Lecture Showcase */}
      <InauguralLectureSection />

      {/* 3. Biography & Core Credentials */}
      <AboutSection />

      {/* 5. Teaching & Mentorship — Future of Lab */}
      <TeachingSection />

      {/* 6. Expert Service & Leadership */}
      <ExpertServiceSection />

      {/* 7. Scientific Publications Library */}
      <PublicationsSection />
      
      {/* 8. Get In Touch — Premium contact node */}
      <ContactSection />

    </main>
  );
}
