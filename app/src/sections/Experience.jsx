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

/** ----------------------------
 *  Data (keep outside component)
 *  ---------------------------- */
const ROLES = [
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
      "Change management",
    ],
    impact: [
      "Delivered 8+ .NET/C# microservices forming a product & notification platform",
      "Exposed REST APIs for CRUD operations and system status used by the platform",
      "Enhanced Vue.js dashboard consuming those APIs for real-time monitoring and visibility",
      "Built Terraform & Azure DevOps pipelines to standardize deployments",
      "Automated data transformations & synchronization into Cosmos DB with Python workflows",
      "Improved reliability with custom logging, response envelopes, and 80%+ unit tests",
      "Containerized an internal AI chatbot with Docker for consistent runtime",
    ],
  },
  {
    role: "Software Engineering Intern",
    org: "Valley Bank",
    when: "June 2024 - Dec 2024",
    logo: "vb",
    chips: ["Technical documentation"],
    // optionally add intern impact if you want it to show up in mergedImpact
    // impact: [...]
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
    impact: [
      "Led redesign of a cross-platform optical calculator (iOS & Android)",
      "Translated complex optical formulas into intuitive, user-facing tools",
      "Shipped and maintained production releases via App Store & Google Play",
      "Collaborated with engineers and product teams to modernize UI/UX",
    ],
  },
  {
    role: "Digital Platform Manager",
    org: "Automotive Specialty Wraps",
    when: "Mar 2023 - Nov 2023",
    logo: "asw",
    chips: [
      "Website optimization",
      "UX strategy",
      "Technical SEO",
      "Analytics & insights",
      "Content optimization",
      "Content creation",
      "Conversion-focused design",
      "Social media management",
    ],

    impact: [
      "Improved website UX across desktop and mobile experiences",
      "Applied technical SEO and performance optimizations",
      "Created and managed original photo/video content for social platforms",
      "Refined pages and content using analytics-driven insights",
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
      "HTML5",
      "CSS3",
      "PHP",
      "WordPress",
    ],
    impact: [
      "Led design & build of long-term web initiatives for B2B campaigns",
      "Created reusable HTML/CSS templates & PHP components for faster delivery",
      "Supported ongoing campaign iterations and client updates at scale",
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
    impact: [
      "Photographed 15-30 weddings/year with 99% client satisfaction",
      "Delivered ~1,000 curated images per wedding with 100% on-time delivery",
      "Managed clients, vendors, timelines, and second shooters end-to-end",
    ],
  },
];

/** ----------------------------
 *  Date utils
 *  ---------------------------- */
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
  oct: 9,
  nov: 10,
  dec: 11,
};

function parseMonthYear(input) {
  const parts = input.trim().split(/\s+/);
  if (parts.length < 2) return null;

  const key = parts[0].slice(0, 3).toLowerCase(); // handles June/July/etc
  const month = MONTHS[key];
  const year = Number(parts[1]);

  if (month === undefined || Number.isNaN(year)) return null;
  return new Date(year, month, 1);
}

function parseWhenRange(when) {
  const [startRaw, endRaw] = when.split("-").map((s) => s.trim());
  const start = parseMonthYear(startRaw);

  const endText = (endRaw || "").toLowerCase();
  const isCurrent = !endRaw || endText === "now" || endText === "present";
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

  if (years > 0 && months > 0) {
    return `${years} yr${years === 1 ? "" : "s"} ${months} mo${
      months === 1 ? "" : "s"
    }`;
  }
  if (years > 0) return `${years} yr${years === 1 ? "" : "s"}`;
  return `${Math.max(1, months)} mo${months === 1 ? "" : "s"}`;
}

function isCurrentRange(when) {
  const w = when.toLowerCase();
  return w.includes("now") || w.includes("present");
}

/** ----------------------------
 *  UI bits
 *  ---------------------------- */
function TenureChip({ when, tenureText }) {
  if (!tenureText) return null;
  const current = isCurrentRange(when);

  const base =
    "inline-flex items-center gap-2 rounded-full px-3 py-1 text-[11px] shadow-sm";
  const currentCls = [
    "bg-gradient-to-r from-emerald-100/70 to-teal-100/70",
    "dark:from-emerald-900/30 dark:to-teal-900/30",
    "border border-emerald-200/70 dark:border-emerald-800/50",
    "text-emerald-900 dark:text-emerald-100",
  ].join(" ");
  const pastCls = [
    "bg-gradient-to-r from-pink-100/60 via-violet-100/60 to-amber-100/60",
    "dark:from-pink-900/25 dark:via-violet-900/25 dark:to-amber-900/25",
    "border border-white/60 dark:border-white/10",
    "text-gray-800 dark:text-gray-200",
  ].join(" ");

  return (
    <div
      className={`${base} ${current ? currentCls : pastCls}`}
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

function ImpactRows({ items }) {
  if (!items?.length) return null;

  return (
    <div className="mt-3 space-y-1">
      {items.map((t, i) => (
        <div
          key={`${t}-${i}`}
          className="flex items-start gap-2 text-sm text-gray-700 dark:text-gray-300"
        >
          <span className="mt-0.5 text-emerald-500">✓</span>
          <span>{t}</span>
        </div>
      ))}
    </div>
  );
}

function RoleStack({ items }) {
  if (!items?.length) return null;

  return (
    <div className="mt-3 rounded-xl border border-gray-200/60 dark:border-gray-800/60 bg-white/50 dark:bg-black/20">
      {items.map((it, i) => (
        <div
          key={`${it.role}-${it.when}-${i}`}
          className={[
            "flex items-center justify-between gap-3 px-3 py-2",
            i === 0
              ? ""
              : "border-t border-gray-200/60 dark:border-gray-800/60",
          ].join(" ")}
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

function RoleCard({ item, tenureText, childrenBottom }) {
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
          ) : (
            <>
              <HighlightsChips chips={item.chips} />
              <ImpactRows items={item.impact} />
            </>
          )}
        </div>
      </CardContent>
    </Card>
  );
}

/** ----------------------------
 *  Card builders
 *  ---------------------------- */
function buildValleyGroupCard(valleyRoles, nowTick) {
  const ranges = valleyRoles
    .map((r) => ({ r, parsed: parseWhenRange(r.when) }))
    .filter((x) => x.parsed.start && x.parsed.end);

  if (!ranges.length) return null;

  const starts = ranges.map((x) => x.parsed.start);
  const ends = ranges.map((x) =>
    x.parsed.isCurrent ? new Date(nowTick) : x.parsed.end
  );

  const overallStart = starts.reduce(
    (min, d) => (d < min ? d : min),
    starts[0]
  );
  const overallEnd = ends.reduce((max, d) => (d > max ? d : max), ends[0]);

  const overallTenure = formatLinkedInTenure(
    monthsInclusive(overallStart, overallEnd)
  );

  const mergedChips = Array.from(
    new Set(valleyRoles.flatMap((r) => r.chips || []))
  );

  const mergedImpact = Array.from(
    new Set(
      valleyRoles
        .flatMap((r) => r.impact || [])
        .map((x) => (typeof x === "string" ? x.trim() : ""))
        .filter(Boolean)
    )
  );

  const timeline = [...valleyRoles].sort((a, b) => {
    const pa = parseWhenRange(a.when);
    const pb = parseWhenRange(b.when);
    if (!pa.start || !pb.start) return 0;
    return pb.start - pa.start;
  });

  return {
    type: "group",
    key: "valley-bank-group",
    title: "Valley Bank",
    subtitle: "Software Engineer",
    when: "June 2024 - now",
    logo: "vb",
    chips: mergedChips,
    impact: mergedImpact,
    tenureOverride: overallTenure,
    timeline: timeline.map((t) => ({ role: t.role, when: t.when })),
  };
}

/** ----------------------------
 *  Page
 *  ---------------------------- */
export default function Experience() {
  const [nowTick, setNowTick] = useState(Date.now());

  useEffect(() => {
    const id = setInterval(() => setNowTick(Date.now()), 60 * 60 * 1000);
    return () => clearInterval(id);
  }, []);

  const cards = useMemo(() => {
    const valley = ROLES.filter((r) => r.org === "Valley Bank");
    const others = ROLES.filter((r) => r.org !== "Valley Bank");

    const valleyCard = valley.length
      ? buildValleyGroupCard(valley, nowTick)
      : null;

    const otherCards = others.map((r, idx) => ({
      type: "single",
      key: `${r.org}-${r.role}-${idx}`,
      title: r.role,
      subtitle: r.org,
      when: r.when,
      logo: r.logo,
      chips: r.chips,
      impact: r.impact,
    }));

    return valleyCard ? [valleyCard, ...otherCards] : otherCards;
  }, [nowTick]);

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
      map.set(
        c.key,
        formatLinkedInTenure(monthsInclusive(start, effectiveEnd))
      );
    });

    return map;
  }, [cards, nowTick]);

  return (
    <div className="space-y-6">
      <div className="grid md:grid-cols-3 gap-4">
        {cards.map((c) => {
          const tenureText = tenureByKey.get(c.key);

          if (c.type === "group") {
            return (
              <div key={c.key} className="md:col-span-2">
                <RoleCard
                  item={c}
                  tenureText={tenureText}
                  childrenBottom={
                    <>
                      <HighlightsChips chips={c.chips} />
                      <RoleStack items={c.timeline} />
                      <ImpactRows items={c.impact} />
                    </>
                  }
                />
              </div>
            );
          }

          return <RoleCard key={c.key} item={c} tenureText={tenureText} />;
        })}
      </div>
    </div>
  );
}
