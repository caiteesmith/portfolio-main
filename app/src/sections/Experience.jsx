import BrandLogo from "@/components/BrandLogo";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/Card";

export default function Experience() {
  const roles = [
    { 
      role:"Back-End Developer", org:"Valley Bank", when:"Jan 2025 - now", logo:"vb",
      quote:"Caitee has really stepped up for the team. Her productivity is through the roof. She listens and learns and applies new knowledge to achieve new goals for the team. She is the star of the development team."
    },
    { 
      role:"Software Development Intern", org:"Valley Bank", when:"Jun 2024 - Dec 2024", logo:"vb",
      quote:"I'd like to give a special thanks to Caitee Smith for being an amazing group leader for our internship group project."
    },
    { 
      role:"Mobile App Developer", org:"Thorlabs", when:"Jul 2023 - May 2024", logo:"thorlabs",
      chips:["Swift (iOS) & Java (Android)", "UI modernization & accessibility", "App Store & Play Store releases"]
    },
    { 
      role:"Web Developer", org:"HIPB2B", when:"May 2013 - Mar 2023", logo:"hipb2b",
      chips:["Landing pages", "PHP form handling", "SEO & performance tuning"]
    }
  ];

  return (
    <div className="grid md:grid-cols-3 gap-4">
      {roles.map((c,i)=>(
        <Card key={i} className="overflow-hidden">
          <CardHeader className="mb-2">
            <CardTitle className="text-lg">{c.role}</CardTitle>
            <CardDescription>{c.org}</CardDescription>
          </CardHeader>

          <CardContent className="flex items-start gap-3 pb-4">
            <BrandLogo name={c.logo} alt={c.org} />

            <div className="space-y-2">
              <p className="text-sm text-gray-500 dark:text-gray-400">{c.when}</p>

              {c.quote ? (
                <div className="mt-1 group">
                  <div
                    className="
                      relative rounded-xl px-4 py-3 text-sm italic
                      bg-gradient-to-r from-pink-100/60 via-violet-100/60 to-amber-100/60
                      dark:from-pink-900/30 dark:via-violet-900/30 dark:to-amber-900/30
                      text-gray-800 dark:text-gray-200 shadow-sm
                      max-h-12 overflow-hidden transition-[max-height] duration-300 group-hover:max-h-60
                    "
                    role="region"
                    aria-label="Manager quote"
                  >
                    “{c.quote}”
                    <div className="pointer-events-none absolute inset-x-0 bottom-0 h-10 bg-gradient-to-t from-black/5 to-transparent dark:from-black/30" />
                  </div>
                  <button
                    className="mt-1 text-xs text-gray-500 dark:text-gray-400 hover:underline"
                    onClick={(e) => {
                      const box = e.currentTarget.previousElementSibling;
                      box.classList.toggle("max-h-60");
                    }}
                  >
                    Read more
                  </button>
                </div>
              ) : (
                <div className="mt-2 flex flex-wrap gap-2" aria-label="Highlights">
                  {(c.chips ?? ["Ownership", "Cross-team collaboration", "Mentorship"]).map((s) => (
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
  );
}