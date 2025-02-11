"use client";
import { FC, useTransition } from "react";
import { useLocale, useTranslations } from "next-intl";
import { useParams } from "next/navigation";
import { usePathname, useRouter } from "@/i18n/routing";

const LangToggle: FC = () => {
  const t = useTranslations("localeSwitcher");
  const locale = useLocale();
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const pathname = usePathname();
  const params = useParams();

  const toggleLang = () => {
    const newLocale = locale === "en" ? "fr" : "en";
    startTransition(() => {
      // router.replace({ pathname, params }, { locale: newLocale });
      router.replace(pathname, { locale: newLocale });
    });
  };

  return (
    <button
      onClick={toggleLang}
      className="text-oblue-400 dark:text-oblue-200 font-sans font-bold tracking-wider"
      aria-label={t("languageLabel")}
    >
      {t(locale)}
    </button>
  );
};

export default LangToggle;
