import { FC } from "react";
import HeroCTA from "@/components/HeroCTA";
import { useTranslations } from "next-intl";

const Hero: FC = () => {
  const t = useTranslations("home");

  return (
    <div className="max-w-4xl py-6 md:pt-0 px-4 sm:px-6">
      <div className="flex flex-col items-center text-center sm:text-start justify-center h-full">
        <h1 className="font-h1-h2-h3 font-extrabold tracking-wide pb-4">
          {t("title")}
        </h1>
        <p className="font-b1-b2 text-justify text-[--color-b700-b100]">
          {t("description")}
        </p>
      </div>
      <HeroCTA />
    </div>
  );
};

export default Hero;
