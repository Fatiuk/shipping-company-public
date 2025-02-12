import { FC } from "react";
import HeroCTA from "@/components/HeroCTA";
import { useTranslations } from "next-intl";

const Hero: FC = () => {
  const t = useTranslations("home");

  return (
    <div className="max-w-4xl lg:ml-20">
      <div className="flex flex-col px-4 items-center text-center justify-center h-full px-8 text-[--color-black-w]">
        <h1 className="text-5xl font-header font-extrabold tracking-wide pb-4 text-[--color-b700-w]">
          {t("title")}
        </h1>
        <p className="text-xl">{t("description")}</p>
      </div>
      <HeroCTA />
    </div>
  );
};

export default Hero;
