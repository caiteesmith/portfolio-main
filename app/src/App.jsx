import React, { useEffect, useState } from "react";
import "./index.css";
import "./theme.css";

import MotionBackground from "@/components/MotionBackground";
import Section from "@/components/Section";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollProgress from "@/components/ScrollProgress";
import StickyHireMe from "@/components/StickyHireMe";
import CaseStudyModal from "@/components/CaseStudyModal"; // HIT case study
import ChatbotCaseStudyModal from "@/components/ChatbotCaseStudyModal"; // NEW: chatbots case study

import useLocalStorage from "@/hooks/useLocalStorage";
import useActiveSection from "@/hooks/useActiveSection";

import Hero from "@/sections/Hero";
import Expertise from "@/sections/Expertise";
import Experience from "@/sections/Experience";
import Education from "@/sections/Education";
import Projects from "@/sections/Projects";
import Writing from "@/sections/Writing";
import About from "@/sections/About";
import Contact from "@/sections/Contact";

import {
  BriefcaseBusiness,
  User2,
  GraduationCap,
  Search,
  BookOpen,
  Sparkles,
  Mail,
} from "lucide-react";

export default function App() {
  const [dark, setDark] = useLocalStorage("cs-theme-dark", true);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
    const themeColor = document.querySelector("meta[name='theme-color']");
    if (themeColor) {
      themeColor.setAttribute("content", dark ? "#0a0a0a" : "#ffffff");
    }
  }, [dark]);

  const sectionIds = [
    "home",
    "expertise",
    "education",
    "experience",
    "projects",
    "writing",
    "about",
    "contact",
  ];
  const active = useActiveSection(sectionIds);

  const [showHit, setShowHit] = useState(false);
  const [showChatbots, setShowChatbots] = useState(false);

  return (
    <div className="relative min-h-screen portfolio-bg">
      <ScrollProgress />
      <MotionBackground dark={dark} />

      {/* Header */}
      <Header dark={dark} setDark={setDark} active={active} />

      <main className="relative z-10">
        {/* Hero */}
        <Section id="home" icon={<></>} title="">
          <Hero />
        </Section>

        {/* Expertise */}
        <Section
          id="expertise"
          icon={<BriefcaseBusiness className="h-6 w-6" />}
          title="Expertise_"
        >
          <Expertise />
        </Section>

        {/* Experience */}
        <Section
          id="experience"
          icon={<User2 className="h-6 w-6" />}
          title="Experience_"
        >
          <Experience />
        </Section>

        {/* Education */}
        <Section
          id="education"
          icon={<GraduationCap className="h-6 w-6" />}
          title="Education_"
        >
          <Education />
        </Section>

        {/* Projects */}
        <Section
          id="projects"
          icon={<Search className="h-6 w-6" />}
          title="Projects_"
        >
          <Projects
            onOpenCaseStudy={(id) => {
              if (id === "hit") setShowHit(true);
              if (id === "chatbots") setShowChatbots(true);
            }}
          />
        </Section>

        {/* AI/ML Chatbots containerization case study */}
        <ChatbotCaseStudyModal
          open={showChatbots}
          onClose={() => setShowChatbots(false)}
        />
        
        {/* HIT microservices case study */}
        <CaseStudyModal open={showHit} onClose={() => setShowHit(false)} />

        {/* Writing */}
        <Section
          id="writing"
          icon={<BookOpen className="h-6 w-6" />}
          title="Writing_"
        >
          <Writing />
        </Section>

        {/* About */}
        <Section
          id="about"
          icon={<Sparkles className="h-6 w-6" />}
          title="About_"
        >
          <About />
        </Section>

        {/* Contact */}
        <Section
          id="contact"
          icon={<Mail className="h-6 w-6" />}
          title="Connect_"
        >
          <Contact />
        </Section>

        <Footer />
        <StickyHireMe />
      </main>
    </div>
  );
}
