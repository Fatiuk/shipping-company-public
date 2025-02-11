import CartItemI from "@/types/cartItem";
import ColorI from "@/types/color";
import { Lang } from "@/types/lang";
import NewsItemI from "@/types/newsItem";
import PrintLocationI from "@/types/printLocation";
import Size from "@/types/size";

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

function isColorI(value: ColorI): boolean {
  return (
    typeof value.colorClass === "string" &&
    value.en === "string" &&
    value.fr === "string"
  );
}

function isSize(value: Size): boolean {
  return ["S", "M", "L", "XL", "2XL", "3XL"].includes(value);
}

function isPrintLocation(value: PrintLocationI): boolean {
  return (
    typeof value.name === "string" &&
    (value.en === "Front" || value.en === "Back") &&
    (value.fr === "Avant" || value.fr === "Retour")
  );
}

export function isValidCartItem(cart: CartItemI): boolean {
  return (
    typeof cart.slug === "string" &&
    typeof cart.title === "string" &&
    typeof cart.price === "number" &&
    isColorI(cart.color) &&
    isSize(cart.size) &&
    isPrintLocation(cart.printLocation) &&
    typeof cart.amount === "number"
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

export const generateNewsTags = (
  newsItems: NewsItemI[],
  lang: string
): string[] => {
  const allTags = new Set<string>();

  newsItems.forEach((item) => {
    const tags = item[lang as Lang].tags;
    tags.forEach((tag) => allTags.add(tag));
  });

  const additionalTag = lang === "en" ? "All" : "Tout";

  return [additionalTag, ...Array.from(allTags).sort()];
};
