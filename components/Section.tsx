"use client";
import { FC, ReactNode, HTMLAttributes } from "react";
import { useTranslations } from "next-intl";

interface SectionProps extends HTMLAttributes<HTMLDivElement> {
  title?: string;
  children: ReactNode;
  className?: string;
  bgClass?: string;
}

const Section: FC<SectionProps> = ({ title, children, className = "", bgClass = "!bg-[--color-w-b700]" }) => {
  const t = useTranslations();
  return (
    <div
      className={`w-full py-[2rem] md:py-[3rem] px-4 lg:px-0 relative overflow-hidden text-[--color-b900-w] ${bgClass} ${className}`}
    >
      <div className="mx-auto container">
        {title && (
          <h1 className="font-h1-h2 text-center pb-4 text-[--color-a900-w]">
            {t(title)}
          </h1>
        )}
        {children}
      </div>
    </div>
  );
};

export default Section;
