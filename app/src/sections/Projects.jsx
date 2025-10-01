import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/Card";
import { Github, ExternalLink } from "lucide-react";
import { PROJECTS } from "@/data/projects";

export default function Projects({ onOpenCaseStudy }) {
  const [selectedTags,setSelectedTags]=useState([]);
  const allTags = useMemo(()=>Array.from(new Set(PROJECTS.flatMap(p=>p.tags))).sort(),[]);
  const filtered = useMemo(()=>{
    return PROJECTS.filter(p => selectedTags.length ? selectedTags.every(t=>p.tags.includes(t)) : true);
  },[selectedTags]);

  return (
    <>
      <div className="flex flex-col md:flex-row md:items-center gap-3 mb-6">
        <div className="flex flex-wrap gap-2">
          {allTags.map(t=>(
            <Badge key={t} variant={selectedTags.includes(t) ? "default" : "secondary"} className="cursor-pointer" onClick={()=>setSelectedTags(cur=>cur.includes(t)?cur.filter(x=>x!==t):[...cur,t])}>{t}</Badge>
          ))}
        </div>
      </div>

      <motion.div layout className="grid md:grid-cols-2 gap-6">
        <AnimatePresence>
          {filtered.map(p=>(
            <motion.div key={p.id} layout initial={{opacity:0,y:12}} animate={{opacity:1,y:0}} exit={{opacity:0,y:-12}}>
              <Card className="overflow-hidden">
                <CardHeader className="mb-2">
                  <CardTitle className="text-xl">{p.title}</CardTitle>
                  <Badge variant="secondary" className="mt-1">{p.org}</Badge>
                </CardHeader>
                <CardContent>
                  {(!p.href && !p.code) ? (
                    <div className="rounded-lg w-full aspect-video mb-3 bg-gradient-to-br from-pink-300/40 via-violet-300/40 to-amber-300/40 grid place-items-center">
                      <span className="text-sm text-gray-600 dark:text-gray-300">Internal Application</span>
                    </div>
                  ) : (
                    <img src={p.img} alt={`Screenshot of ${p.title}`} className="rounded-lg w-full aspect-video object-cover mb-3" />
                  )}

                  <p className="text-sm text-gray-500 dark:text-gray-400">{p.summary}</p>

                  {p.impact?.length > 0 && (
                    <div className="mt-3 flex flex-wrap gap-2">
                      {p.impact.map((item, idx) => (
                        <span key={idx} className="px-3 py-1 rounded-full bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300 text-xs shadow-sm">
                          {item}
                        </span>
                      ))}
                    </div>
                  )}

                  <div className="mt-3 flex flex-wrap gap-2">
                    {p.tags.map(t => <Badge key={t} variant="outline">{t}</Badge>)}
                  </div>
                </CardContent>

                <CardFooter>
                  {(!p.href && !p.code) ? (
                    <Button size="sm" onClick={onOpenCaseStudy}>Case study</Button>
                  ) : (
                    <>
                      <Button asChild size="sm"  variant="outline">
                        <a href={p.href} target="_blank" rel="noreferrer"><ExternalLink className="h-4 w-4 mr-1" />Live</a>
                      </Button>
                      {p.code && (
                        <Button asChild size="sm" variant="outline">
                          <a href={p.code} target="_blank" rel="noreferrer"><Github className="h-4 w-4 mr-1" />Code</a>
                        </Button>
                      )}
                    </>
                  )}
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {!filtered.length && <p className="text-sm text-gray-500 dark:text-gray-400 mt-6">No matches. Try different tags or search text.</p>}
    </>
  );
}