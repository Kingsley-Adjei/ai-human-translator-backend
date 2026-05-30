"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Users, UserRound } from "lucide-react";
import PatternBackground from "@/components/ui/PatternBackground";
import LanguageSelect from "@/components/ui/LanguageSelect";
import { SELECTABLE_LANGUAGES } from "@/data/languages";
import { fadeUp, staggerParent, scaleIn } from "@/lib/motion";
import styles from "./Hero.module.css";

export default function Hero() {
  const [speakerA, setSpeakerA] = useState("twi");
  const [speakerB, setSpeakerB] = useState("ga");

  const handleStart = () => {
    // Placeholder for backend session start.
    // Backend team: initiate translation session with { speakerA, speakerB }.
    const target = document.getElementById("live-demo");
    target?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className={styles.hero} id="top">
      <PatternBackground />

      <motion.div
        className={`container ${styles.inner}`}
        variants={staggerParent}
        initial="hidden"
        animate="visible"
      >
        <motion.h1 className={styles.title} variants={fadeUp}>
          <span className="gradient-text">Two voices.</span>
          <br />
          <span className="gradient-text">One conversation.</span>
        </motion.h1>

        <motion.p className={styles.subtitle} variants={fadeUp}>
          Real-time voice translation for Ghana&apos;s native tongues. Bridging the gap
          between languages through the power of AI.
        </motion.p>

        <motion.div className={styles.card} id="hero-form" variants={scaleIn}>
          <div className={styles.glowBorder} aria-hidden="true" />
          <div className={styles.cardInner}>
            <LanguageSelect
              label="Speaker A"
              icon={Users}
              options={SELECTABLE_LANGUAGES}
              value={speakerA}
              onChange={setSpeakerA}
            />
            <LanguageSelect
              label="Speaker B"
              icon={UserRound}
              options={SELECTABLE_LANGUAGES}
              value={speakerB}
              onChange={setSpeakerB}
            />

            <button className={styles.startBtn} onClick={handleStart}>
              Start Session
            </button>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
