import { useEffect, useState } from "react";
export default function useActiveSection(ids) {
  const [active, setActive] = useState(ids[0]);
  useEffect(() => {
    const observers = ids.map(id => {
      const el = document.getElementById(id); if (!el) return null;
      const o = new IntersectionObserver(es => es.forEach(e => e.isIntersecting && setActive(id)), { rootMargin:"-40% 0px -55% 0px" });
      o.observe(el); return o;
    });
    return () => observers.forEach(o => o && o.disconnect());
  }, [ids.join(",")]);
  return active;
}