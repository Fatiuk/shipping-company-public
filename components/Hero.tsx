import { FC } from "react";
import HeroCTA from "@/components/HeroCTA";
import { useTranslations } from "next-intl";

const Hero: FC = () => {
  const t = useTranslations("home");

  return (
    <div className="max-w-4xl py-6 md:pt-0 px-4 sm:px-6">
      <div className="flex flex-col items-start text-start justify-center h-full">
        <h1 className="font-bold capitalize pb-6 sm:pb-8 my-0 text-4xl leading-[48px] tracking-normal font-roboto">
          {t("title")}
        </h1>
        <p className="font-normal text-base leading-6 tracking-normal font-nunito text-[color-b900-w] max-w-[663px]">
          {t("description")}
        </p>
      </div>
      <HeroCTA />
    </div>
  );
};

export default Hero;
