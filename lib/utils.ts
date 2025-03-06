import { TranslationValues } from "next-intl";
import NewsItemI from "@/types/blogItem";

const isBrowser = () => typeof window !== "undefined";

export function getLocalStorageItem<T>(key: string): T | null {
  if (!isBrowser) return null;
  const item = localStorage.getItem(key);
  return item ? (JSON.parse(item) as T) : null;
}

export function setLocalStorageItem(key: string, value: string): void {
  if (!isBrowser) return;
  localStorage.setItem(key, JSON.stringify(value));
}

export const formatDate = (dateString: string, lang: string): string => {
  const locale = lang === "en" ? "en-CA" : "fr-CA";
  const date = new Date(dateString);
  return new Intl.DateTimeFormat(locale, {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(date);
};

export const generateNewsTags = (
  newsItems: NewsItemI[],
  allTagText: string
): string[] => {
  const allTags = new Set<string>();

  newsItems.forEach((item) => {
    const tags = item.tags;
    tags.forEach((tag) => allTags.add(tag));
  });

  return [allTagText, ...Array.from(allTags).sort()];
};

/**
 * Safely retrieves section content from translations
 */
export const getSectionContent = (
  t: (key: string, values?: TranslationValues) => string,
  namespace: string,
  sectionNumber: string,
  key: string,
  fallback: string = ""
): string => {
  try {
    return t(`${namespace}.${sectionNumber}.${key}`);
  } catch {
    return fallback;
  }
};

interface RenderComponentsProps {
  t: any;
  namespace: string;
  sectionNumber: string;
}
