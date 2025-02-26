import { FC } from "react";
import HeroCTA from "@/components/HeroCTA";
import { useTranslations } from "next-intl";

const Hero: FC = () => {
  const t = useTranslations("home");

  return (
    <div className="max-w-4xl lg:ml-20 pt-6 md:pt-0">
      <div className="flex flex-col items-center text-center justify-center h-full px-4 sm:px-8">
        <h1 className="font-h1-h2-h3 font-extrabold tracking-wide pb-4 text-[--color-b700-w]">
          {t("title")}
        </h1>
        <p className="font-b1-b2 text-justify sm:text-center text-[--color-b900-w]">
          {t("description")}
        </p>
      </div>
      <HeroCTA />
    </div>
  );
};

export default Hero;
