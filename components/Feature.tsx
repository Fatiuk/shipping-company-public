"use client";
import { FC, useRef } from "react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import FeatureI from "@/types/feature";
import useGsapHover from "@/hooks/useGsapHover";

const Feature: FC<FeatureI> = ({ src, title, description, alt = "" }) => {
  const t = useTranslations();
  const iconRef = useRef<HTMLDivElement | null>(null);
  const titleRef = useRef<HTMLHeadingElement | null>(null);

  useGsapHover({
    target: iconRef,
    enterAnimation: { scale: 1.2, duration: 0.3 },
    leaveAnimation: { scale: 1, duration: 0.3 },
  });

  return (
    <div className="flex flex-col p-6 items-center text-center justify-between">
      <div ref={iconRef} className="h-[100px] w-auto flex items-center">
        <Image
          src={src}
          width={100}
          height={100}
          alt={alt === "" ? "" : t(alt)}
          style={{ width: "auto" }}
        />
      </div>
      <h3
        ref={titleRef}
        className="font-h3-h4 text-[--color-b900-a900] mt-4"
        data-feature-title
      >
        {t(title)}
      </h3>
      <p className="md:text-lg text-oblue-700 mt-auto">{t(description)}</p>
    </div>
  );
};

export default Feature;
