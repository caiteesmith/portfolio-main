import BrandLogo from "@/components/BrandLogo";
import {
  Card,
  CardContent,
  CardTitle,
  CardDescription,
} from "@/components/ui/Card";

export default function Education() {
  const schools = [
    {
      degreeType: "Bachelor of Science",
      field: "Computer Science",
      org: "Western Governors University",
      logo: "wgu",
    },
    {
      degreeType: "Associate of Applied Science",
      field: "Computer Information Systems",
      org: "Hudson Valley Community College",
      logo: "hvcc",
    },
  ];

  return (
    <div className="grid md:grid-cols-2 gap-4">
      {schools.map((e, i) => (
        <Card key={i}>
          <CardContent className="flex items-start gap-4 p-4">
            <div className="flex-shrink-0 rounded-xl bg-gray-100 dark:bg-gray-800/60 p-2">
              <BrandLogo name={e.logo} alt={e.org} className="h-10 w-10" />
            </div>

            <div className="space-y-1">
              <div className="text-xs uppercase tracking-wide text-gray-500">
                {e.degreeType}
              </div>
              <CardTitle className="text-base font-semibold">
                {e.field}
              </CardTitle>

              <CardDescription className="text-sm">{e.org}</CardDescription>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}