"use client";
import { FC, useRef } from "react";
import { useTranslations } from "next-intl";
import FeatureI from "@/types/feature";
import useGsapHover from "@/hooks/useGsapHover";

const Feature: FC<FeatureI> = ({ title, description }) => {
  const t = useTranslations();
  const cardRef = useRef<HTMLDivElement | null>(null);
  const titleRef = useRef<HTMLHeadingElement | null>(null);

  useGsapHover({
    target: cardRef,
    enterAnimation: { scale: 1.05, duration: 0.3 },
    leaveAnimation: { scale: 1, duration: 0.3 },
  });

  return (
    <div 
      ref={cardRef}
      className="flex flex-col p-6 bg-white rounded-lg shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300 h-full"
    >
      <h3
        ref={titleRef}
        className="font-h3-h4 text-[--color-b900-a900] mb-4 text-xl font-semibold"
        data-feature-title
      >
        {t(title)}
      </h3>
      <p className="md:text-lg text-oblue-700 leading-relaxed flex-grow">{t(description)}</p>
    </div>
  );
};

export default Feature;
