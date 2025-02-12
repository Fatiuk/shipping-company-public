import { FC } from "react";
import HeroCTA from "@/components/HeroCTA";
import { useTranslations } from "next-intl";

const Hero: FC = () => {
  const t = useTranslations("home");

  return (
    <>
      <div className="flex flex-col px-4 items-center text-center justify-center h-full px-8 text-black dark:text-white">
        <h1 className="text-5xl font-header font-extrabold tracking-wide pb-4 text-oblue-700 dark:text-white">
          {t("title")}
        </h1>
        <p className="text-xl">{t("description")}</p>
      </div>
      <HeroCTA />
    </>
  );
};

export default Hero;
