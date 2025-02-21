"use client";
import { FC, useRef } from "react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import FeatureI from "@/types/feature";
import useGsapHover from "@/hooks/useGsapHover";

const Feature: FC<FeatureI> = ({ src, title, description, alt = "" }) => {
  const t = useTranslations();
  const iconRef = useRef<HTMLDivElement | null>(null);

  useGsapHover({
    target: iconRef,
    enterAnimation: { scale: 1.2, duration: 0.3 },
    leaveAnimation: { scale: 1, duration: 0.3 },
  });

  return (
    <div className="flex flex-col p-6 items-center text-center">
      <picture className="" ref={iconRef}>
        <Image
          src={src}
          width={100}
          height={100}
          alt={alt === "" ? "" : t(alt)}
        />
      </picture>
      <h3 className="text-xl md:text-2xl font-bold py-2 text-oblue-900 dark:text-oaccent-900">
        {t(title)}
      </h3>
      <div className="text-base md:text-lg text-black">{t(description)}</div>
    </div>
  );
};

export default Feature;
