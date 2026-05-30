"use client";

import { motion } from "framer-motion";
import { fadeUp, viewportOnce } from "@/lib/motion";
import styles from "./Footer.module.css";

const FOOTER_LINKS = [
  "Privacy Policy",
  "Terms of Service",
  "Heritage Preservation",
  "Contact Support",
];

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <motion.div
        className={`container ${styles.inner}`}
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
      >
        <a href="#top" className={styles.brand}>
          Lingua<span className="gradient-text">Bridge</span>
        </a>
        <p className={styles.copy}>
          © 2024 LinguaBridge. Preserving the rhythm of Ghanaian voices.
        </p>
        <nav className={styles.links}>
          {FOOTER_LINKS.map((l) => (
            <a key={l} href="#" className={styles.link}>
              {l}
            </a>
          ))}
        </nav>
      </motion.div>
    </footer>
  );
}
