"use client";

import { motion } from "framer-motion";
import { Mic, Languages, Volume2 } from "lucide-react";
import { HOW_IT_WORKS } from "@/data/content";
import { fadeUp, staggerParent, viewportOnce } from "@/lib/motion";
import styles from "./HowItWorks.module.css";

const ICONS = { mic: Mic, languages: Languages, volume: Volume2 };

export default function HowItWorks() {
  return (
    <section className="section" id="how-it-works">
      <div className="container">
        <motion.h2
          className={styles.heading}
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          How It Works
        </motion.h2>

        <motion.div
          className={styles.grid}
          variants={staggerParent}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          {HOW_IT_WORKS.map((step, i) => {
            const Icon = ICONS[step.icon];
            return (
              <motion.article key={step.title} className={styles.card} variants={fadeUp}>
                <div className={styles.iconWrap}>
                  <Icon size={20} strokeWidth={2} />
                </div>
                <h3 className={styles.cardTitle}>
                  <span className={styles.num}>{i + 1}.</span> {step.title}
                </h3>
                <p className={styles.cardBody}>{step.body}</p>
              </motion.article>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
