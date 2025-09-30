import BrandLogo from "@/components/BrandLogo";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/Card";

export default function Education() {
  const schools = [
    { deg:"B.S. Computer Science", org:"Western Governors University", when:"2024", logo:"wgu" },
    { deg:"A.A.S. Computer Information Systems", org:"Hudson Valley Community College", when:"2023", logo:"hvcc" },
  ];

  return (
    <div className="grid md:grid-cols-2 gap-4">
      {schools.map((e,i)=>(
        <Card key={i}>
          <CardHeader>
            <CardTitle className="text-lg">{e.deg}</CardTitle>
            <CardDescription>{e.org}</CardDescription>
          </CardHeader>
          <CardContent className="flex items-center gap-3 pb-4">
            <BrandLogo name={e.logo} alt={e.org} />
            <p className="text-sm text-gray-500 dark:text-gray-400">{e.when}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}