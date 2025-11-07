"use client";

import { useState, useMemo } from "react";
import BrandLogo from "@/components/BrandLogo";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/Card";

export default function Experience() {
  const roles = [
    {
      role: "Back-End Developer",
      org: "Valley Bank",
      when: "Jan 2025 - now",
      logo: "vb",
      chips: [
        ".NET 8", "Azure Functions",
        "Cosmos DB",
        "Docker",
        "Azure DevOps CI/CD",
        "Unit tests",
        "Clean Architecture",
        "REST APIs",
        "OpenAPI",
        "Scrum ceremonies",
        "Deployments",
      ],    
    },
    {
      role: "Software Development Intern",
      org: "Valley Bank",
      when: "Jun 2024 - Dec 2024",
      logo: "vb",
      chips: [
        "Intern group project lead (VIP)",
        ".NET microservice fundamentals",
        "Pair programming",
        "Code reviews",
        "Internship documentation",
      ],
    },
    {
      role: "Mobile App Developer",
      org: "Thorlabs",
      when: "Jul 2023 - May 2024",
      logo: "thorlabs",
      chips: [
        "Swift (iOS)",
        "Java (Android)", 
        "UI modernization & accessibility", 
        "Coordination with engineering teams",
        "App Store & Play Store releases"],
    },
    {
      role: "Web Developer",
      org: "HIPB2B",
      when: "May 2013 - Mar 2023",
      logo: "hipb2b",
      chips: [
        "Landing pages", 
        "PHP form handling", 
        "SEO & performance tuning", 
        "Email automation integrations"],
    },
  ];

  const [expanded, setExpanded] = useState({});

  const allQuotes = useMemo(() => {
    const collected = roles
      .flatMap((r) =>
        (r.quotes || []).map((q) => ({
          ...q,
          org: r.org,
          roleAtTime: r.role,
        }))
      )
      .filter((q) => q.text && q.text.trim().length > 0);

    const placeholders = [
      {
        text: "Since joining Valley, Caitee has shown how she can be relied upon to see things through to completion. This is in recognition of the ownership she has taken in further developing solutions in support of Valley's overall strategy to build and deploy services for our partners.",
        author: "Manager",
        authorRole: "Enterprise Solution Architecture",
        org: "Valley Bank",
        roleAtTime: "Back-End Developer",
      },
      {
        text: "I'd like to give a special thanks to Caitee Smith for being an amazing group leader for our internship group project.",
        author: "Co-Intern",
        authorRole: "Valley's Internship Program (VIP)",
        org: "Valley Bank",
        roleAtTime: "Back-End Developer",
      },
      {
        text: "Caitee has really stepped up for the team. Her productivity is through the roof. She listens and learns and applies new knowledge to achieve new goals for the team. She is the star of the development team.",
        author: "Manager",
        authorRole: "Enterprise Solution Architecture",
        org: "Valley Bank",
        roleAtTime: "Back-End Developer",
      },
      {
        text: "I want to thank Caitee for her perserverance and commitment to getting the latest release out for 2 of our updated microservices. The pre-deployment steps had a lot of challenges and her focus made the release a success. Thank you, Caitee!",
        author: "Solution Architect",
        authorRole: "Enterprise Solution Architecture",
        org: "Valley Bank",
        roleAtTime: "Back-End Developer",
      },
      {
        text: "Thank you, Caitee, for showing true ownership of a project and sticking through all the hurdles with the deployment and ensuring it goes live!",
        author: "Manager",
        authorRole: "Enterprise Solution Architecture",
        org: "Valley Bank",
        roleAtTime: "Back-End Developer",
      },
    ];

    return [...collected, ...placeholders];
  }, [roles]);

  return (
    <div className="space-y-6">
      <div className="grid md:grid-cols-3 gap-4">
        {roles.map((c, i) => (
          <Card key={`${c.org}-${c.role}-${i}`} className="overflow-hidden">
            <CardHeader className="mb-2">
              <CardTitle className="text-lg">{c.role}</CardTitle>
              <CardDescription>{c.org}</CardDescription>
            </CardHeader>

            <CardContent className="flex items-start gap-3 pb-4">
              <BrandLogo name={c.logo} alt={c.org} />

              <div className="space-y-2 flex-1">
                <p className="text-sm text-gray-500 dark:text-gray-400">{c.when}</p>

                {c.quotes && c.quotes.length > 0 ? (
                  <div className="space-y-3" aria-label="Testimonials">
                    {c.quotes.map((q, qi) => {
                      const key = `${i}-${qi}`;
                      const isOpen = !!expanded[key];
                      return (
                        <div key={key} className="group">
                          <div
                            className={[
                              "relative rounded-xl px-4 py-3 text-sm italic",
                              "bg-gradient-to-r from-pink-100/60 via-violet-100/60 to-amber-100/60",
                              "dark:from-pink-900/30 dark:via-violet-900/30 dark:to-amber-900/30",
                              "text-gray-800 dark:text-gray-200 shadow-sm",
                              isOpen ? "max-h-96" : "max-h-14",
                              "overflow-hidden transition-[max-height] duration-300",
                            ].join(" ")}
                            role="region"
                            aria-label="Coworker quote"
                            aria-expanded={isOpen}
                          >
                            “{q.text}”
                            {!isOpen && (
                              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-10 bg-gradient-to-t from-black/5 to-transparent dark:from-black/30" />
                            )}
                          </div>

                          <div className="mt-1 flex items-center justify-between">
                            <div className="text-xs text-gray-600 dark:text-gray-400">
                              {q.author && <span className="font-medium">{q.author}</span>}
                              {q.author && q.authorRole && <span> · </span>}
                              {q.authorRole && <span>{q.authorRole}</span>}
                            </div>

                            <button
                              className="text-xs text-gray-500 dark:text-gray-400 hover:underline"
                              aria-label={isOpen ? "Collapse quote" : "Expand quote"}
                              onClick={() =>
                                setExpanded((prev) => ({
                                  ...prev,
                                  [key]: !prev[key],
                                }))
                              }
                            >
                              {isOpen ? "Show less" : "Read more"}
                            </button>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                ) : (
                  <div className="mt-2 flex flex-wrap gap-2" aria-label="Highlights">
                    {(c.chips || ["Ownership", "Cross-team collaboration", "Mentorship"]).map((s) => (
                      <span key={s} className="px-2 py-1 text-[11px] rounded-full bg-gray-100 dark:bg-gray-800/60">
                        {s}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {allQuotes.length > 0 && (
        <Card>
          <CardHeader className="mb-2">
            <CardTitle>Testimonials</CardTitle>
            <CardDescription>What teammates and managers have said</CardDescription>
          </CardHeader>
          <CardContent className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 pb-4">
            {allQuotes.map((q, idx) => (
              <div
                key={idx}
                className="rounded-xl border border-gray-200 dark:border-gray-800 p-4 bg-white/60 dark:bg-black/20"
              >
                <p className="text-sm italic text-gray-800 dark:text-gray-200">“{q.text}”</p>
                <div className="mt-2 text-xs text-gray-600 dark:text-gray-400">
                  <div className="font-medium">{q.author || "Coworker"}</div>
                  <div>
                    {q.authorRole ? `${q.authorRole} · ` : ""}
                    {q.org} ({q.roleAtTime})
                  </div>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      )}
    </div>
  );
}
