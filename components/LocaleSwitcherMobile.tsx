"use client";
import { useLocale, useTranslations } from "next-intl";
import { locales } from "@/lib/config";
import LocaleSwitcherBase from "./LocaleSwitcherBase";

export default function LocaleSwitcherMobile() {
  const t = useTranslations("localeSwitcher");
  const locale = useLocale();

  const localeOptions = locales.map((loc) => ({
    value: loc,
    label: t(loc),
  }));

  return (
    <LocaleSwitcherBase
      defaultValue={locale}
      label={t("label")}
      localeOptions={localeOptions}
      variant="mobile"
    />
  );
}
