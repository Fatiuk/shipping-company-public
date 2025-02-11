import { LocalePrefix, Pathnames } from "next-intl/routing";

export const locales = ["en", "fr"] as const;

export type Locales = typeof locales;

export const pathnames: Pathnames<Locales> = {
  "/": "/",
  "/video-reviews": "/video-reviews",
  "/yelp-reviews": "/yelp-reviews",
  "/how-it-works": "/how-it-works",
  "/team": "/team",
  "/blog": "/blog",
  "/about": "/about",
  "/faq": "/faq",
};

export const localePrefix: LocalePrefix<Locales> = "always";
