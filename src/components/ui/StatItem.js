"use client";

import { useCountUp } from "@/hooks/useCountUp";
import styles from "./StatItem.module.css";

export default function StatItem({ value, label, accent }) {
  const { ref, value: animated } = useCountUp(value);
  return (
    <div className={styles.stat} ref={ref}>
      <span className={`${styles.value} ${styles[accent]}`}>{animated}</span>
      <span className={styles.label}>{label}</span>
    </div>
  );
}
