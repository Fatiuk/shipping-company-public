"use client";
import { FC } from "react";
import { useLocale, useTranslations } from "next-intl";
import { usePathname, useRouter } from "@/i18n/routing";

const LangToggle: FC = () => {
  const t = useTranslations("localeSwitcher");
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const toggleLang = () => {
    const newLocale = locale === "en" ? "fr" : "en";
    router.replace(pathname, { locale: newLocale });
  };

  return (
    <button
      onClick={toggleLang}
      className="text-oblue-400 dark:text-oblue-200 font-sans font-bold tracking-wider"
      aria-label={t("languageLabel")}
    >
      {t(`not${locale}`)}
    </button>
  );
};

export default LangToggle;
