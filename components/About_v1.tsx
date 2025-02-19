import { FC } from "react";
import { useTranslations } from "next-intl";
import Image from "next/image";

const About: FC = () => {
  const t = useTranslations("home.about");

  return (
    <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
      <div className="lg:w-1/2">
        <h2 className="text-4xl font-header font-bold mb-6 text-[--color-b700-w]">
          {t("sectionTitle")}
        </h2>
        <h3 className="text-2xl font-bold mb-4 text-[--color-b900-w]">
          {t("title")}
        </h3>
        <p className="text-lg leading-relaxed text-[--color-b900-w]">
          {t("description")}
        </p>
      </div>
      <div className="lg:w-1/2 flex justify-center">
        <div className="relative w-full max-w-lg aspect-square bg-[--color-b100-w] rounded-lg overflow-hidden">
          <Image
            src="/about.webp"
            alt="Transport vehicle"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
