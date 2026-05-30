"use client";

import { motion } from "framer-motion";
import styles from "./Waveform.module.css";

/** Compact animated waveform used inside the demo bubbles / mic buttons. */
export default function Waveform({ active = false, bars = 5, color = "teal" }) {
  return (
    <div className={styles.wave} aria-hidden="true">
      {Array.from({ length: bars }).map((_, i) => (
        <motion.span
          key={i}
          className={`${styles.bar} ${styles[color]}`}
          animate={
            active
              ? { scaleY: [0.4, 1, 0.5, 0.9, 0.4] }
              : { scaleY: 0.3 }
          }
          transition={{
            duration: 1.1,
            repeat: active ? Infinity : 0,
            delay: i * 0.12,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}
