"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Check } from "lucide-react";
import styles from "./LanguageSelect.module.css";

export default function LanguageSelect({ label, icon: Icon, options, value, onChange }) {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const onClick = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, []);

  const selected = options.find((o) => o.code === value);

  return (
    <div className={styles.field} ref={ref}>
      <span className={styles.label}>
        {Icon && <Icon size={13} strokeWidth={2.2} />}
        {label}
      </span>

      <button
        type="button"
        className={`${styles.trigger} ${open ? styles.triggerOpen : ""}`}
        onClick={() => setOpen((o) => !o)}
        aria-haspopup="listbox"
        aria-expanded={open}
      >
        <span>{selected ? selected.name : "Select…"}</span>
        <ChevronDown
          size={16}
          className={`${styles.chev} ${open ? styles.chevOpen : ""}`}
        />
      </button>

      <AnimatePresence>
        {open && (
          <motion.ul
            className={styles.menu}
            role="listbox"
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.16 }}
          >
            {options.map((opt) => (
              <li
                key={opt.code}
                role="option"
                aria-selected={opt.code === value}
                className={`${styles.option} ${
                  opt.code === value ? styles.optionActive : ""
                }`}
                onClick={() => {
                  onChange(opt.code);
                  setOpen(false);
                }}
              >
                {opt.name}
                {opt.code === value && <Check size={15} />}
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
}
