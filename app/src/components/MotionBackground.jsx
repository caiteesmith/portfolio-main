// src/components/MotionBackground.jsx
import { motion, useMotionValue, useTransform, useScroll } from "framer-motion";
import { useEffect } from "react";

export default function MotionBackground({ dark }) {
  // stronger motion in light, subtler in dark
  const AMP_X = dark ? 40 : 90;
  const AMP_Y = dark ? 20 : 50;
  const DUR1  = dark ? 16 : 12;
  const DUR2  = dark ? 18 : 14;
  const DUR3  = dark ? 20 : 16;

  // mouse/scroll parallax
  const mx = useMotionValue(0.5);
  const my = useMotionValue(0.5);
  useEffect(() => {
    const onMove = (e) => {
      mx.set(e.clientX / window.innerWidth);
      my.set(e.clientY / window.innerHeight);
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, [mx, my]);

  const { scrollY } = useScroll();
  const makeParallax = (depth = 1) => {
    const range = (dark ? 40 : 60) / depth; // px
    const px = useTransform(mx, [0, 1], [ range, -range ]);
    const py = useTransform(my, [0, 1], [ range, -range ]);
    const sy = useTransform(scrollY, [0, 1200], [0, -40 / depth]);
    return { x: useTransform([px, sy], ([a,b]) => a + b), y: py };
  };
  const p1 = makeParallax(0.7);
  const p2 = makeParallax(1.2);
  const p3 = makeParallax(1.8);

  return (
    <div aria-hidden className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
      {/* Pink */}
      <motion.div
        className="soft-blob"
        style={{
          width: "52vmax",
          height: "52vmax",
          top: "-14vmax",
          left: "-14vmax",
          background: "radial-gradient(circle at center, rgba(232,79,147,0.65) 0%, rgba(232,79,147,0) 72%)",
          x: p1.x, y: p1.y,
        }}
        animate={{ x: [-AMP_X, AMP_X, -AMP_X], y: [-AMP_Y, AMP_Y, -AMP_Y], scale: [1, 1.06, 1] }}
        transition={{ duration: DUR1, repeat: Infinity, repeatType: "mirror", ease: "easeInOut" }}
      />

      {/* Lavender */}
      <motion.div
        className="soft-blob"
        style={{
          width: "46vmax",
          height: "46vmax",
          bottom: "-12vmax",
          right: "-12vmax",
          background: "radial-gradient(circle at center, rgba(79,74,232,0.60) 0%, rgba(79,74,232,0) 72%)",
          x: p2.x, y: p2.y,
        }}
        animate={{ x: [AMP_X * 0.75, -AMP_X * 0.75, AMP_X * 0.75], y: [AMP_Y * 0.5, -AMP_Y * 0.5, AMP_Y * 0.5], scale: [1, 1.07, 1] }}
        transition={{ duration: DUR2, repeat: Infinity, repeatType: "mirror", ease: "easeInOut", delay: .4 }}
      />

      {/* Peach */}
      <motion.div
        className="soft-blob"
        style={{
          width: "42vmax",
          height: "42vmax",
          top: "22%",
          right: "12%",
          background: "radial-gradient(circle at center, rgba(255,135,79,0.60) 0%, rgba(255,135,79,0) 72%)",
          x: p3.x, y: p3.y,
        }}
        animate={{ x: [-AMP_X * 0.6, AMP_X * 0.6, -AMP_X * 0.6], y: [AMP_Y * 0.4, -AMP_Y * 0.4, AMP_Y * 0.4], scale: [1, 1.05, 1] }}
        transition={{ duration: DUR3, repeat: Infinity, repeatType: "mirror", ease: "easeInOut", delay: .8 }}
      />

      {/* subtle scrim */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/30 to-transparent dark:from-black/40" />
    </div>
  );
}