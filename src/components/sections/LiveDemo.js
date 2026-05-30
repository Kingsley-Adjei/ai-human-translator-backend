"use client";

import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Volume2, RefreshCw } from "lucide-react";
import Waveform from "@/components/ui/Waveform";
import { DEMO_EXCHANGE } from "@/data/content";
import { fadeUp, viewportOnce } from "@/lib/motion";
import styles from "./LiveDemo.module.css";

export default function LiveDemo() {
  const [activeBubble, setActiveBubble] = useState(0);
  const [syncing, setSyncing] = useState(false);
  const timer = useRef(null);

  // Cycle the demo: highlight a bubble, flash the sync pulse, advance.
  useEffect(() => {
    const cycle = () => {
      setSyncing(true);
      timer.current = setTimeout(() => {
        setSyncing(false);
        setActiveBubble((b) => (b + 1) % DEMO_EXCHANGE.length);
      }, 900);
    };
    const interval = setInterval(cycle, 3200);
    return () => {
      clearInterval(interval);
      if (timer.current) clearTimeout(timer.current);
    };
  }, []);

  return (
    <section className={`section ${styles.section}`} id="live-demo">
      <div className="container">
        <motion.div
          className={styles.panel}
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          {DEMO_EXCHANGE.map((msg, i) => {
            const isActive = i === activeBubble;
            const accent = msg.speaker === "A" ? "teal" : "gold";
            return (
              <div
                key={i}
                className={`${styles.row} ${
                  msg.speaker === "B" ? styles.rowEnd : ""
                }`}
              >
                <div
                  className={`${styles.bubble} ${
                    isActive ? styles.bubbleActive : ""
                  }`}
                >
                  <span className={`${styles.tag} ${styles[`tag_${accent}`]}`}>
                    {msg.lang} · Speaker {msg.speaker}
                  </span>
                  <p className={styles.text}>&ldquo;{msg.text}&rdquo;</p>
                  <div className={styles.bubbleFoot}>
                    <Waveform active={isActive} color={accent} />
                  </div>
                </div>

                <button
                  className={`${styles.playBtn} ${styles[`play_${accent}`]}`}
                  aria-label={`Play ${msg.lang} audio`}
                >
                  <Volume2 size={17} />
                </button>
              </div>
            );
          })}

          {/* Central sync pulse */}
          <div className={styles.syncWrap}>
            <motion.div
              className={styles.sync}
              animate={
                syncing
                  ? { rotate: 360, scale: [1, 1.12, 1] }
                  : { rotate: 0, scale: 1 }
              }
              transition={{ duration: 0.9, ease: "easeInOut" }}
            >
              <RefreshCw size={18} />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
