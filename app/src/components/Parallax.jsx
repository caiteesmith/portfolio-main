import { useMotionValue, useTransform, motion } from "framer-motion";

export default function Parallax({ children, strength = 20 }) {
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const tx = useTransform(mx, [0, 1], [-strength, strength]);
  const ty = useTransform(my, [0, 1], [-strength, strength]);

  const onMove = (e) => {
    const b = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - b.left) / b.width;
    const y = (e.clientY - b.top) / b.height;
    mx.set(x); my.set(y);
  };

  return (
    <motion.div onMouseMove={onMove} className="relative">
      <motion.div style={{ x: tx, y: ty }}>
        {children}
      </motion.div>
    </motion.div>
  );
}