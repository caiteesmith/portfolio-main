"use client";

import { useState, useMemo, useEffect } from "react";
import BrandLogo from "@/components/BrandLogo";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/Card";

const MONTHS = {
  jan: 0,
  feb: 1,
  mar: 2,
  apr: 3,
  may: 4,
  jun: 5,
  jul: 6,
  aug: 7,
  sep: 8,
  sept: 8,
  oct: 9,
  nov: 10,
  dec: 11,
};

function parseMonthYear(input) {
  const parts = input.trim().split(/\s+/);
  if (parts.length < 2) return null;

  const month = MONTHS[parts[0].slice(0, 3).toLowerCase()];
  const year = Number(parts[1]);

  if (month === undefined || Number.isNaN(year)) return null;
  return new Date(year, month, 1);
}

function parseWhenRange(when) {
  const [startRaw, endRaw] = when.split("-").map((s) => s.trim());
  const start = parseMonthYear(startRaw);

  const isCurrent =
    !endRaw || ["now", "present"].includes(endRaw.toLowerCase());

  const end = isCurrent ? new Date() : parseMonthYear(endRaw);
  return { start, end, isCurrent };
}

function monthsInclusive(start, end) {
  const startIdx = start.getFullYear() * 12 + start.getMonth();
  const endIdx = end.getFullYear() * 12 + end.getMonth();
  return Math.max(1, endIdx - startIdx + 1);
}

function formatLinkedInTenure(totalMonths) {
  const years = Math.floor(totalMonths / 12);
  const months = totalMonths % 12;

  if (years > 0 && months > 0)
    return `${years} yr${years === 1 ? "" : "s"} ${months} mo${
      months === 1 ? "" : "s"
    }`;
  if (years > 0) return `${years} yr${years === 1 ? "" : "s"}`;
  return `${Math.max(1, months)} mo${months === 1 ? "" : "s"}`;
}

function isCurrentRole(when) {
  return (
    when.toLowerCase().includes("now") || when.toLowerCase().includes("present")
  );
}

function clampPct(n) {
  return Math.max(0, Math.min(100, n));
}

export default function Experience() {
  const roles = [
    {
      role: "Software Engineer",
      org: "Valley Bank",
      when: "Jan 2025 - now",
      logo: "vb",
      chips: [
        ".NET 8",
        "C#",
        "Vue.js",
        "Azure Functions",
        "Python workflows",
        "Azure DevOps",
        "CI/CD pipelines",
        "Unit testing",
        "Clean Architecture",
        "REST APIs",
        "OpenAPI",
        "Agile/Scrum",
        "Cloud deployments",
        "Cosmos DB",
        "Docker",
      ],
    },
    {
      role: "Software Engineering Intern",
      org: "Valley Bank",
      when: "Jun 2024 - Dec 2024",
      logo: "vb",
      chips: [
        "Intern group project leadership",
        ".NET microservice fundamentals",
        "Pair programming",
        "Code reviews",
        "Technical documentation",
      ],
    },
    {
      role: "Software Engineer",
      org: "Thorlabs",
      when: "Jul 2023 - May 2024",
      logo: "thorlabs",
      chips: [
        "Mobile app redesign",
        "Cross-platform development",
        "UI/UX modernization",
        "Release management",
        "Cross-team collaboration",
        "Swift (iOS)",
        "Java (Android)",
        "App Store & Play Store",
      ],
    },
    {
      role: "Digital Platform Manager",
      org: "Automotive Specialty Wraps",
      when: "Mar 2023 - Nov 2023",
      logo: "asw",
      chips: [
        "Website optimization",
        "Business analysis",
        "Technical SEO",
        "Performance analytics",
        "Content strategy",
        "Brand growth",
        "Social media management",
      ],
    },
    {
      role: "Senior Web Developer",
      org: "HIPB2B",
      when: "May 2013 - Mar 2023",
      logo: "hipb2b",
      chips: [
        "Frontend system ownership",
        "High-conversion landing pages",
        "Long-term client support",
        "SEO & performance optimization",
        "CMS architecture",
        "HTML & CSS",
        "PHP",
        "WordPress",
      ],
    },
    {
      role: "Owner, Wedding Photographer",
      org: "Caitee Smith Photography",
      when: "Jun 2018 - now",
      logo: "csp",
      chips: [
        "Creative direction",
        "Business operations",
        "Client experience design",
        "Wedding day coordination",
        "High-volume photo editing",
        "Content development",
        "Team & vendor coordination",
      ],
    },
  ];

  const [expanded, setExpanded] = useState({});
  const [nowTick, setNowTick] = useState(Date.now());

  useEffect(() => {
    const id = setInterval(() => setNowTick(Date.now()), 60 * 60 * 1000);
    return () => clearInterval(id);
  }, []);

  const tenureByIndex = useMemo(() => {
    return roles.map((r) => {
      const { start, end, isCurrent } = parseWhenRange(r.when);
      if (!start || !end) return null;

      const effectiveEnd = isCurrent ? new Date(nowTick) : end;
      const totalMonths = monthsInclusive(start, effectiveEnd);

      return formatLinkedInTenure(totalMonths);
    });
  }, [roles, nowTick]);

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
        author: "Manager & Solution Architect",
        authorRole: "Enterprise Solution Architecture",
        org: "Valley Bank",
      },
      {
        text: "Caitee has really stepped up for the team. Her productivity is through the roof. She listens and learns and applies new knowledge to achieve new goals for the team. She is the star of the development team.",
        author: "Manager",
        authorRole: "Enterprise Solution Architecture",
        org: "Valley Bank",
      },
      {
        text: "I want to thank Caitee for her perserverance and commitment to getting the latest release out for 2 of our updated microservices. The pre-deployment steps had a lot of challenges and her focus made the release a success. Thank you, Caitee!",
        author: "Solution Architect",
        authorRole: "Enterprise Solution Architecture",
        org: "Valley Bank",
      },
      {
        text: "Thank you, Caitee, for showing true ownership of a project and sticking through all the hurdles with the deployment and ensuring it goes live!",
        author: "Manager",
        authorRole: "Enterprise Solution Architecture",
        org: "Valley Bank",
      },
      {
        text: "I'd like to give a special thanks to Caitee Smith for being an amazing group leader for our internship group project.",
        author: "Co-Intern",
        authorRole: "Valley's Internship Program (VIP)",
        org: "Valley Bank",
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
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {c.when}
                </p>
                {tenureByIndex[i] && (
                  <div
                    className={[
                      "inline-flex items-center gap-2 rounded-full px-3 py-1 text-[11px] shadow-sm",
                      isCurrentRole(c.when)
                        ? [
                            // current = green/teal
                            "bg-gradient-to-r from-emerald-100/70 to-teal-100/70",
                            "dark:from-emerald-900/30 dark:to-teal-900/30",
                            "border border-emerald-200/70 dark:border-emerald-800/50",
                            "text-emerald-900 dark:text-emerald-100",
                          ].join(" ")
                        : [
                            // past = your pretty pink/violet/amber
                            "bg-gradient-to-r from-pink-100/60 via-violet-100/60 to-amber-100/60",
                            "dark:from-pink-900/25 dark:via-violet-900/25 dark:to-amber-900/25",
                            "border border-white/60 dark:border-white/10",
                            "text-gray-800 dark:text-gray-200",
                          ].join(" "),
                    ].join(" ")}
                    aria-label="Tenure"
                  >
                    {isCurrentRole(c.when) && (
                      <span className="inline-block h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    )}

                    <span className="font-medium">
                      {isCurrentRole(c.when) ? "Current" : "Tenure"}
                    </span>

                    <span className="font-mono tabular-nums">
                      {tenureByIndex[i]}
                    </span>
                  </div>
                )}

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
                              {q.author && (
                                <span className="font-medium">{q.author}</span>
                              )}
                              {q.author && q.authorRole && <span> · </span>}
                              {q.authorRole && <span>{q.authorRole}</span>}
                            </div>

                            <button
                              className="text-xs text-gray-500 dark:text-gray-400 hover:underline"
                              aria-label={
                                isOpen ? "Collapse quote" : "Expand quote"
                              }
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
                  <div
                    className="mt-2 flex flex-wrap gap-2"
                    aria-label="Highlights"
                  >
                    {(
                      c.chips || [
                        "Ownership",
                        "Cross-team collaboration",
                        "Mentorship",
                      ]
                    ).map((s) => (
                      <span
                        key={s}
                        className="px-2 py-1 text-[11px] rounded-full bg-gray-100 dark:bg-gray-800/60"
                      >
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
            <CardDescription>
              What teammates and managers have said
            </CardDescription>
          </CardHeader>
          <CardContent className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 pb-4">
            {allQuotes.map((q, idx) => (
              <div
                key={idx}
                className="rounded-xl border border-gray-200 dark:border-gray-800 p-4 bg-white/60 dark:bg-black/20"
              >
                <p className="text-sm italic text-gray-800 dark:text-gray-200">
                  “{q.text}”
                </p>
                <div className="mt-2 text-xs text-gray-600 dark:text-gray-400">
                  <div className="font-medium">{q.author || "Coworker"}</div>
                  <div>
                    {q.authorRole ? `${q.authorRole} · ` : ""}
                    {q.org}
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
