import { Lang } from "@/types/lang";
import NewsItemI from "@/types/newsItem";
import PrintLocationI from "@/types/printLocation";
import { useTranslations } from "next-intl";

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

function isPrintLocation(value: PrintLocationI): boolean {
  return (
    typeof value.name === "string" &&
    (value.en === "Front" || value.en === "Back") &&
    (value.fr === "Avant" || value.fr === "Retour")
  );
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

export const generateNewsTags = (newsItems: NewsItemI[]): string[] => {
  const t = useTranslations("blog.tags");
  const allTags = new Set<string>();

  newsItems.forEach((item) => {
    const tags = item.tags;
    tags.forEach((tag) => allTags.add(tag));
  });

  const additionalTag = t("all");

  return [additionalTag, ...Array.from(allTags).sort()];
};
