import { useEffect, useState } from "react";
import Button from "./ui/Button";
export default function StickyHireMe() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const onScroll = () => setShow((window.scrollY || document.documentElement.scrollTop) > window.innerHeight * 0.33);
    onScroll(); window.addEventListener("scroll", onScroll, { passive:true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  if (!show) return null;
  return (
    <div className="fixed bottom-5 left-1/2 -translate-x-1/2 z-50">
      <Button asChild size="lg" className="shadow-xl backdrop-blur bg-black text-white dark:bg-white dark:text-black">
        <a href="#contact" aria-label="Jump to contact">👋 Hire me</a>
      </Button>
    </div>
  );
}