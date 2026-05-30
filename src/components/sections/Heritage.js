"use client";

import { motion } from "framer-motion";
import { LANGUAGES } from "@/data/languages";
import { fadeUp, staggerParent, viewportOnce } from "@/lib/motion";
import styles from "./Heritage.module.css";

export default function Heritage() {
  return (
    <section className="section" id="heritage">
      <div className="container">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          <h2 className={styles.heading}>Linguistic Heritage</h2>
          <p className={styles.sub}>
            Currently supporting Ghana&apos;s major tongues with more being added monthly.
          </p>
        </motion.div>

        <motion.div
          className={styles.grid}
          variants={staggerParent}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          {LANGUAGES.map((lang) => (
            <motion.div
              key={lang.code}
              className={`${styles.chip} ${
                !lang.available ? styles.chipMuted : ""
              } ${styles[`accent_${lang.accent}`]}`}
              variants={fadeUp}
            >
              {lang.name}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
