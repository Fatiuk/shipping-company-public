import { LocalePrefix, Pathnames } from "next-intl/routing";

export const locales = ["en", "fr", "es"] as const;

export type Locales = typeof locales;

export const pathnames: Pathnames<Locales> = {
  "/": "/",
  "/reviews": "/reviews",
  "/how-it-works": "/how-it-works",
  // "/team": "/team",
  "/blog": "/blog",
  "/about": "/about",
  "/faq": "/faq",
};

export const localePrefix: LocalePrefix<Locales> = "always";
