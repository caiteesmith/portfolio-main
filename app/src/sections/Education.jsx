import BrandLogo from "@/components/BrandLogo";
import { Card, CardContent, CardTitle, CardDescription } from "@/components/ui/Card";

export default function Education() {
  const schools = [
    { deg: "B.S. Computer Science", org: "Western Governors University", logo: "wgu" },
    { deg: "A.A.S. Computer Information Systems", org: "Hudson Valley Community College", logo: "hvcc" },
  ];

  return (
    <div className="grid md:grid-cols-2 gap-4">
      {schools.map((e, i) => (
        <Card key={i} className="flex items-center">
          <div className="p-4 flex-shrink-0">
            <BrandLogo name={e.logo} alt={e.org} className="h-12 w-12" />
          </div>

          <CardContent className="pt-4 pb-4 pl-0 pr-4">
            <CardTitle className="text-lg">{e.deg}</CardTitle>
            <CardDescription>{e.org}</CardDescription>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}