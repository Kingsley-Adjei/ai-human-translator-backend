"use client";

import styles from "./PatternBackground.module.css";

/**
 * Subtle animated Adinkra-inspired diamond lattice used behind the hero.
 * Pure CSS/SVG — no images required.
 */
export default function PatternBackground() {
  return (
    <div className={styles.wrap} aria-hidden="true">
      <svg className={styles.svg} width="100%" height="100%">
        <defs>
          <pattern
            id="lattice"
            width="46"
            height="46"
            patternUnits="userSpaceOnUse"
            patternTransform="rotate(45)"
          >
            <path
              d="M23 0 L46 23 L23 46 L0 23 Z"
              fill="none"
              stroke="rgba(46,230,197,0.10)"
              strokeWidth="1"
            />
            <circle cx="23" cy="23" r="1.4" fill="rgba(46,230,197,0.18)" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#lattice)" />
      </svg>
      <div className={styles.glow} />
    </div>
  );
}
