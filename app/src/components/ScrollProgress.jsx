import { motion, useScroll, useSpring } from "framer-motion";
export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 20, mass: .2 });
  return <motion.div className="fixed top-0 left-0 right-0 h-1 z-50 bg-pink-500/70 dark:bg-pink-400/80 origin-left" style={{ scaleX }} />;
}