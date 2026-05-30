"use client";

import { motion } from "framer-motion";
import StatItem from "@/components/ui/StatItem";
import { STATS, MISSION_QUOTE } from "@/data/content";
import { fadeUp, staggerParent, viewportOnce } from "@/lib/motion";
import styles from "./Mission.module.css";

const ACCENTS = ["gold", "teal", "gold"];

export default function Mission() {
  return (
    <section className={styles.section}>
      <div className={styles.overlay} aria-hidden="true" />
      <div className={`container ${styles.inner}`}>
        <motion.h2
          className={styles.heading}
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          <span className="gradient-text">Built for Ghana.</span>
          <br />
          <span className="gradient-text">Built for everyone.</span>
        </motion.h2>

        <motion.div
          className={styles.stats}
          variants={staggerParent}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          {STATS.map((s, i) => (
            <motion.div key={s.label} variants={fadeUp}>
              <StatItem value={s.value} label={s.label} accent={ACCENTS[i]} />
            </motion.div>
          ))}
        </motion.div>

        <motion.blockquote
          className={styles.quote}
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          &ldquo;{MISSION_QUOTE}&rdquo;
        </motion.blockquote>
      </div>
    </section>
  );
}
