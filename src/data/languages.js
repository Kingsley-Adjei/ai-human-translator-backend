/**
 * Supported languages.
 * `available` toggles between active tongues and "coming soon" slots.
 * Backend can later replace this static list with an API response of the same shape.
 */
export const LANGUAGES = [
  { code: "twi", name: "Twi", accent: "teal", available: true },
  { code: "ga", name: "Ga", accent: "teal", available: true },
  { code: "ewe", name: "Ewe", accent: "teal", available: true },
  { code: "hausa", name: "Hausa", accent: "teal", available: true },
  { code: "dagbani", name: "Dagbani", accent: "gold", available: true },
  { code: "fante", name: "Fante", accent: "teal", available: true },
  { code: "nzema", name: "Nzema", accent: "teal", available: true },
  { code: "more", name: "More Coming…", accent: "muted", available: false },
];

/** Options usable inside the speaker dropdowns (excludes placeholder slots). */
export const SELECTABLE_LANGUAGES = LANGUAGES.filter((l) => l.available);
