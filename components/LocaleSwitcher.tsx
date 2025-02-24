"use client";
import { useLocale, useTranslations } from "next-intl";
import { locales } from "@/lib/config";
import LocaleSwitcherBase from "./LocaleSwitcherBase";

export default function LocaleSwitcher() {
  const t = useTranslations("localeSwitcher");
  const locale = useLocale();

  const localeOptions = locales.map((loc) => ({
    value: loc,
    label: t(t("locale", { locale: loc })),
    abbr: t(`abbr.${t("locale", { locale: loc })}`),
  }));

  return (
    <LocaleSwitcherBase
      defaultValue={locale}
      label={t("label")}
      localeOptions={localeOptions}
      variant="desktop"
    />
  );
}
