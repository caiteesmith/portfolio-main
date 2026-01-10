"use client";

import { useEffect, useMemo, useState } from "react";
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
  june: 5,
  july: 6,
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

function isCurrentRange(when) {
  const w = when.toLowerCase();
  return w.includes("now") || w.includes("present");
}

/** -------- Components -------- */

function TenureChip({ when, tenureText }) {
  if (!tenureText) return null;

  const current = isCurrentRange(when);

  return (
    <div
      className={[
        "inline-flex items-center gap-2 rounded-full px-3 py-1 text-[11px] shadow-sm",
        current
          ? [
              "bg-gradient-to-r from-emerald-100/70 to-teal-100/70",
              "dark:from-emerald-900/30 dark:to-teal-900/30",
              "border border-emerald-200/70 dark:border-emerald-800/50",
              "text-emerald-900 dark:text-emerald-100",
            ].join(" ")
          : [
              "bg-gradient-to-r from-pink-100/60 via-violet-100/60 to-amber-100/60",
              "dark:from-pink-900/25 dark:via-violet-900/25 dark:to-amber-900/25",
              "border border-white/60 dark:border-white/10",
              "text-gray-800 dark:text-gray-200",
            ].join(" "),
      ].join(" ")}
      aria-label="Tenure"
    >
      {current && (
        <span className="inline-block h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
      )}

      <span className="font-medium">{current ? "Current" : "Tenure"}</span>
      <span className="font-mono tabular-nums">{tenureText}</span>
    </div>
  );
}

function HighlightsChips({ chips }) {
  const list = chips?.length
    ? chips
    : ["Ownership", "Cross-team collaboration", "Mentorship"];

  return (
    <div className="mt-2 flex flex-wrap gap-2" aria-label="Highlights">
      {list.map((s) => (
        <span
          key={s}
          className="px-2 py-1 text-[11px] rounded-full bg-gray-100 dark:bg-gray-800/60"
        >
          {s}
        </span>
      ))}
    </div>
  );
}

function QuoteAccordion({ quotes, expanded, setExpanded, parentIndex }) {
  if (!quotes?.length) return null;

  return (
    <div className="space-y-3" aria-label="Testimonials">
      {quotes.map((q, qi) => {
        const key = `${parentIndex}-${qi}`;
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
  );
}

function RoleTimeline({ items }) {
  // items: [{ role, when }]
  return (
    <div className="mt-2 space-y-2" aria-label="Role timeline">
      {items.map((it) => (
        <div
          key={`${it.role}-${it.when}`}
          className="flex items-start justify-between gap-3 rounded-lg border border-gray-200/60 dark:border-gray-800/60 px-3 py-2 bg-white/40 dark:bg-black/10"
        >
          <div className="text-sm font-medium text-gray-900 dark:text-gray-100">
            {it.role}
          </div>
          <div className="text-xs text-gray-600 dark:text-gray-400 whitespace-nowrap">
            {it.when}
          </div>
        </div>
      ))}
    </div>
  );
}

function RoleCard({
  item,
  tenureText,
  index,
  expanded,
  setExpanded,
  childrenBottom, // optional slot (timeline, etc.)
}) {
  return (
    <Card className="overflow-hidden">
      <CardHeader className="mb-2">
        <CardTitle className="text-lg">{item.title}</CardTitle>
        <CardDescription>{item.subtitle}</CardDescription>
      </CardHeader>

      <CardContent className="flex items-start gap-3 pb-4">
        <BrandLogo name={item.logo} alt={item.subtitle} />

        <div className="space-y-2 flex-1">
          <p className="text-sm text-gray-500 dark:text-gray-400">
            {item.when}
          </p>

          <TenureChip when={item.when} tenureText={tenureText} />

          {childrenBottom ? (
            childrenBottom
          ) : item.quotes?.length ? (
            <QuoteAccordion
              quotes={item.quotes}
              expanded={expanded}
              setExpanded={setExpanded}
              parentIndex={index}
            />
          ) : (
            <HighlightsChips chips={item.chips} />
          )}
        </div>
      </CardContent>
    </Card>
  );
}

function TestimonialsWall({ quotes }) {
  if (!quotes?.length) return null;

  return (
    <Card>
      <CardHeader className="mb-2">
        <CardTitle>Testimonials</CardTitle>
        <CardDescription>What teammates and managers have said</CardDescription>
      </CardHeader>

      <CardContent className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 pb-4">
        {quotes.map((q, idx) => (
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
  );
}

/** -------- Page -------- */

export default function Experience() {
  // Raw roles (your original source of truth)
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
        "Microservices",
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
        "Change management"
      ],
    },
    {
      role: "Software Engineering Intern",
      org: "Valley Bank",
      when: "June 2024 - Dec 2024",
      logo: "vb",
      chips: [
        "Technical documentation",
      ],
    },
    {
      role: "Software Engineer",
      org: "Thorlabs",
      when: "July 2023 - May 2024",
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
      when: "June 2018 - now",
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

  // Build "cards" where Valley Bank becomes ONE grouped card
  const cards = useMemo(() => {
    const valley = roles.filter((r) => r.org === "Valley Bank");
    const others = roles.filter((r) => r.org !== "Valley Bank");

    // If for some reason data changes, fail gracefully
    const hasValley = valley.length > 0;

    const valleyCard = hasValley
      ? (() => {
          // Determine overall range: min(start), max(end)
          const ranges = valley
            .map((r) => ({ r, parsed: parseWhenRange(r.when) }))
            .filter((x) => x.parsed.start && x.parsed.end);

          const starts = ranges.map((x) => x.parsed.start);
          const ends = ranges.map((x) =>
            x.parsed.isCurrent ? new Date(nowTick) : x.parsed.end
          );

          const overallStart = starts.reduce(
            (min, d) => (d < min ? d : min),
            starts[0]
          );
          const overallEnd = ends.reduce(
            (max, d) => (d > max ? d : max),
            ends[0]
          );
          const overallMonths = monthsInclusive(overallStart, overallEnd);
          const overallTenure = formatLinkedInTenure(overallMonths);

          // Pretty overall "when" label from your known dates
          // (We know: Jun 2024 – now)
          const overallWhen = "June 2024 - now";

          // Role timeline order: most recent first (optional)
          const timeline = [...valley].sort((a, b) => {
            const pa = parseWhenRange(a.when);
            const pb = parseWhenRange(b.when);
            if (!pa.start || !pb.start) return 0;
            return pb.start - pa.start;
          });

          // Merge chips (you can adjust this: current-first, de-dupe)
          const mergedChips = Array.from(
            new Set(valley.flatMap((r) => r.chips || []))
          );

          return {
            type: "group",
            key: "valley-bank-group",
            title: "Valley Bank",
            subtitle: "Software Engineer",
            when: overallWhen,
            logo: "vb",
            chips: mergedChips,
            tenureOverride: overallTenure, // computed across both roles
            timeline: timeline.map((t) => ({ role: t.role, when: t.when })),
            // if later you want quotes on the company card, attach quotes here
          };
        })()
      : null;

    const otherCards = others.map((r, idx) => ({
      type: "single",
      key: `${r.org}-${r.role}-${idx}`,
      title: r.role,
      subtitle: r.org,
      when: r.when,
      logo: r.logo,
      chips: r.chips,
      quotes: r.quotes,
    }));

    return valleyCard ? [valleyCard, ...otherCards] : otherCards;
  }, [roles, nowTick]);

  // Tenure per card (cards have different shape now)
  const tenureByKey = useMemo(() => {
    const map = new Map();

    cards.forEach((c) => {
      if (c.tenureOverride) {
        map.set(c.key, c.tenureOverride);
        return;
      }

      const { start, end, isCurrent } = parseWhenRange(c.when);
      if (!start || !end) return;

      const effectiveEnd = isCurrent ? new Date(nowTick) : end;
      const totalMonths = monthsInclusive(start, effectiveEnd);
      map.set(c.key, formatLinkedInTenure(totalMonths));
    });

    return map;
  }, [cards, nowTick]);

  const allQuotes = useMemo(() => {
    // Grab quotes from roles if you have them (currently you don’t attach quotes to roles)
    const collected = roles
      .flatMap((r) =>
        (r.quotes || []).map((q) => ({
          ...q,
          org: r.org,
          roleAtTime: r.role,
        }))
      )
      .filter((q) => q.text && q.text.trim().length > 0);

    // Your placeholders (unchanged)
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
        {cards.map((c, i) => {
          const tenureText = tenureByKey.get(c.key);

          if (c.type === "group") {
            return (
              <div
                key={c.key}
                className={c.type === "group" ? "md:col-span-2" : undefined}
              >
                <RoleCard
                  item={c}
                  tenureText={tenureText}
                  index={i}
                  expanded={expanded}
                  setExpanded={setExpanded}
                  childrenBottom={
                    c.type === "group" ? (
                      <>
                        <RoleTimeline items={c.timeline} />
                        <HighlightsChips chips={c.chips} />
                      </>
                    ) : undefined
                  }
                />
              </div>
            );
          }

          return (
            <RoleCard
              key={c.key}
              item={c}
              tenureText={tenureText}
              index={i}
              expanded={expanded}
              setExpanded={setExpanded}
            />
          );
        })}
      </div>

      <TestimonialsWall quotes={allQuotes} />
    </div>
  );
}
