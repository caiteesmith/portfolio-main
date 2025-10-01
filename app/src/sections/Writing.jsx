// src/sections/Writing.jsx
import { Link as LinkIcon } from "lucide-react";
import Button from "@/components/ui/Button";
import { Card, CardFooter, CardHeader, CardTitle } from "@/components/ui/Card";
import { WRITING } from "@/data/writing"; // keep data in data/writing.js

export default function Writing() {
  return (
    <div className="grid md:grid-cols-2 gap-4">
      {WRITING.map((w, i) => (
        <Card key={i}>
          <CardHeader>
            <CardTitle className="text-base leading-snug">{w.title}</CardTitle>
          </CardHeader>
          <CardFooter>
            <Button asChild variant="ghost">
              <a href={w.href} target="_blank" rel="noreferrer" style={{ "--link": "#ff85a7", "--link-hover": "#ff8a52" }}>
                <LinkIcon className="h-4 w-4 mr-2" />
                Read on Medium
              </a>
            </Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}