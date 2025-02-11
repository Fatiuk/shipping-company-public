export const LANGUAGES = ["en", "fr"] as const;

export type Lang = typeof LANGUAGES[number];