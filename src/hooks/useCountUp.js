"use client";

import { useState, useEffect, useRef } from "react";

/**
 * Animates a numeric value from 0 to `end` once the element enters view.
 * Non-numeric values (e.g. "Live", "Local") are returned unchanged.
 */
export function useCountUp(end, duration = 1400) {
  const numeric = typeof end === "number" || /^\d+$/.test(String(end));
  const target = numeric ? parseInt(end, 10) : 0;
  const [value, setValue] = useState(numeric ? 0 : end);
  const ref = useRef(null);
  const started = useRef(false);

  useEffect(() => {
    if (!numeric) return;
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const start = performance.now();
          const tick = (now) => {
            const progress = Math.min((now - start) / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setValue(Math.round(eased * target));
            if (progress < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
        }
      },
      { threshold: 0.4 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [numeric, target, duration]);

  return { ref, value };
}
