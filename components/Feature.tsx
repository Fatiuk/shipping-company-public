"use client";
import { FC, useRef } from "react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import FeatureI from "@/types/feature";
import useGsapHover from "@/hooks/useGsapHover";

const Feature: FC<FeatureI> = ({ title, description, icon }) => {
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
      className="flex flex-col p-4 bg-oblue-50 rounded-lg shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300 h-full"
    >
      {icon && (
          <Image 
            src={t(icon)} 
            alt={t(title)} 
            width={24} 
            height={24} 
          />
      )}
      <h3
        ref={titleRef}
        className="font-nunito font-bold text-base leading-none text-oaccent-800 my-4"
      >
        {t(title)}
      </h3>
      <p className="font-nunito font-normal text-base leading-relaxed text-oblue-700">{t(description)}</p>
    </div>
  );
};

export default Feature;
