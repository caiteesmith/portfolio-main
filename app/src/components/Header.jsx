// src/components/Header.jsx
import { useEffect, useRef } from "react";
import { Stars, Github, Linkedin, Moon, SunMedium } from "lucide-react";
import Button from "@/components/ui/Button";

const NAV = [
  { id: "expertise", label: "Expertise" },
  { id: "experience", label: "Experience" },
  { id: "education", label: "Education" },
  { id: "projects", label: "Projects" },
  { id: "writing", label: "Writing" },
  { id: "about", label: "About" },
  { id: "contact", label: "Connect" },
];

export default function Header({ dark, setDark, active }) {
  const headerRef = useRef(null);

  // Add subtle shadow when page is scrolled
  useEffect(() => {
    const el = headerRef.current;
    if (!el) return;
    const onScroll = () => el.classList.toggle("shadow-sm", window.scrollY > 4);
    onScroll(); // set initial state
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      ref={headerRef}
      className="sticky top-0 z-40 backdrop-blur bg-white/70 dark:bg-black/50 border-b border-gray-200 dark:border-gray-800"
      role="navigation"
      aria-label="Primary"
    >
      <div className="max-w-6xl mx-auto px-4 md:px-6 h-16 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-3 font-semibold">
          <Stars className="h-5 w-5" />
          <span>Caitee Smith</span>
        </a>

        <nav className="hidden md:flex items-center gap-1">
          {NAV.map((item) => {
            const isActive = active === item.id;
            return (
              <Button
                key={item.id}
                asChild
                variant={active === item.id ? "default" : "ghost"}
                className="rounded-full"
              >
                <a href={`#${item.id}`} className="nav-link">{item.label}</a>
              </Button>
            );
          })}
        </nav>

        <div className="flex items-center gap-1">
          <a
            href="https://github.com/caiteesmith"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub profile"
          >
            <Button variant="ghost" size="sm">
              <Github className="h-5 w-5" />
            </Button>
          </a>
          <a
            href="https://www.linkedin.com/in/caiteesmith"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn profile"
          >
            <Button variant="ghost" size="sm">
              <Linkedin className="h-5 w-5" />
            </Button>
          </a>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setDark((d) => !d)}
            aria-label="Toggle theme"
          >
            {dark ? <Moon className="h-4 w-4" /> : <SunMedium className="h-4 w-4" />}
          </Button>
        </div>
      </div>
    </header>
  );
}