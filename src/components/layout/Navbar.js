"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { NAV_LINKS } from "@/data/content";
import styles from "./Navbar.module.css";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      className={`${styles.nav} ${scrolled ? styles.navScrolled : ""}`}
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className={`container ${styles.inner}`}>
        <a href="#top" className={styles.brand}>
          Lingua<span className="gradient-text">Bridge</span>
        </a>

        <nav className={styles.links}>
          {NAV_LINKS.map((l) => (
            <a key={l.label} href={l.href} className={styles.link}>
              {l.label}
            </a>
          ))}
        </nav>

        <div className={styles.actions}>
          <a href="#" className={styles.signin}>Sign In</a>
          <a href="#hero-form" className={styles.cta}>Get Started</a>
        </div>
      </div>
    </motion.header>
  );
}
