import Badge from "@/components/ui/Badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/Card";
import { INTERESTS } from "@/data/interests";

export default function About() {
  return (
    <div className="grid md:grid-cols-3 gap-6 items-start">
      <Card className="md:col-span-2">
        <CardHeader className="mb-2">
          <CardTitle>Background</CardTitle>
          <CardDescription>Back-End Developer · Problem Solver · Creative at Heart</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4 pb-4">
          <p>
            I'm a Back-End Developer specializing in C# and Azure. 
            My focus is on building reliable, testable services from clear requirements, always with an eye on 
            observability, clean architecture, and leaving codebases better than I found them. 
            I like solving problems in a way that keeps systems maintainable and teams confident.
          </p>

          <p>
            I value Agile practices, Scrum, and strong documentation because they keep teams aligned, 
            make context easy to share, and give delivery a sense of rhythm. 
            Clear process means we can spend less time misaligned and untangling miscommunication 
            and more time solving the right problems together.
          </p>

          <p>
            My path into software started with web and design work, which taught me to care about 
            detail, usability, and user experience, even when the “users” are other developers. 
            That design background also informs how I approach APIs and system interfaces: 
            clear, consistent, and approachable.
          </p>

          <p>
            Outside of code, I'm also a{" "}
            <a href="https://www.caiteesmithphotography.com/" target="_blank" rel="noreferrer">
              wedding photographer
            </a>
            , which balances structure with creativity and keeps me grounded in storytelling. 
            I bring that same balance into engineering with precision where it matters 
            and creativity where it helps ideas land.
          </p>

          <p>
            I've called New Jersey, New York (15 years including 5 in NYC), north Texas, 
            and southern Louisiana home. Moving often shaped how I collaborate: 
            direct, adaptable, and quick to connect across teams and personalities.
          </p>
        </CardContent>
      </Card>

      <div className="space-y-6">
        {/* Interests */}
        <Card>
          <CardHeader className="mb-2">
            <CardTitle>Hobbies & Interests</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-wrap gap-2 pb-4">
            {INTERESTS.map((i) => (
              <Badge key={i} variant="secondary">{i}</Badge>
            ))}
          </CardContent>
        </Card>

        {/* Fun Facts */}
        <Card>
          <CardHeader className="mb-2">
            <CardTitle>Fun Facts</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-wrap gap-2 pb-4">
            {[
              "🚗 Drives a 2020 Subaru WRX STI",
              "🏔️ Hiked 35/46 ADK High Peaks",
              "🏴 Traveled to Scotland",
              "🇮🇪 Traveled to Ireland",
              "🇯🇵 Traveled to Japan",
              "🇨🇦 Traveled to Banff",
              "🍣 Addicted to poke bowls",
              "🎸 Lover of Sleep Token",
              "🎮 Gamer of Skyrim, Fallout 4, Overwatch",
            ].map((fact) => (
              <Badge key={fact} variant="secondary">{fact}</Badge>
            ))}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}