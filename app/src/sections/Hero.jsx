import { AnimatePresence, motion } from "framer-motion";
import { Sparkles, ExternalLink } from "lucide-react";
import Button from "@/components/ui/Button";
import Parallax from "@/components/Parallax";
import Logo from "@/components/Logo";
import { useEffect, useState } from "react";

export default function Hero(){
  const titles = [".NET/C# specialist","clean architecture advocate","Microsoft Azure pro","Scrum & Agile enthusiast"];
  const [titleIdx,setTitleIdx] = useState(0);
  useEffect(() => { const id=setInterval(()=>setTitleIdx(i=>(i+1)%titles.length),2000); return ()=>clearInterval(id); }, []);

  return (
    <div className="grid md:grid-cols-2 gap-10 items-center">
      <div>
        <p className="text-sm uppercase tracking-widest text-gray-500">// Hi, I'm Caitee</p>
        <h1 className="text-4xl md:text-6xl font-extrabold mt-2 leading-tight">Software Engineer</h1>
        <div className="h-8 mt-4 relative" aria-live="polite">
          <AnimatePresence mode="wait">
            <motion.div key={titleIdx} initial={{opacity:0,y:8}} animate={{opacity:1,y:0}} exit={{opacity:0,y:-8}} className="absolute">
              <span className="text-lg md:text-xl">
                <span className="text-gray-500">I'm a</span> <span className="font-semibold">{titles[titleIdx]}</span>
              </span>
            </motion.div>
          </AnimatePresence>
        </div>
        <div className="mt-6 flex gap-2">
          <Button asChild variant="primaryPink"><a href="#projects"><Sparkles className="h-4 w-4 mr-2"/>See projects</a></Button>
          <Button asChild variant="primaryOrange"><a href="docs/Resume-Caitlyn-Smith-nocontact.pdf" target="_blank" rel="noreferrer"><ExternalLink className="h-4 w-4 mr-2"/>Resumé</a></Button>
        </div>
      </div>
      <div>
        <Parallax strength={16}>
          <div className="relative w-full max-w-sm mx-auto">
            <div className="absolute -inset-6 rounded-[32px] blur-2xl opacity-40 bg-gradient-to-tr from-pink-300/30 via-violet-300/30 to-amber-300/30" />
              <Logo className="relative rounded-2xl w-full mt-8" />
          </div>
        </Parallax>
      </div>
    </div>
  );
}