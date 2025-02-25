"use client";
import { FC, ReactNode, HTMLAttributes } from "react";
import { useTranslations } from "next-intl";

interface SectionProps extends HTMLAttributes<HTMLDivElement> {
  title?: string;
  children: ReactNode;
  className?: string;
}

const Section: FC<SectionProps> = ({ title, children, className = "" }) => {
  const t = useTranslations();
  return (
    <div
      className={`w-full py-[2rem] md:py-[4rem] px-4 lg:px-0 relative overflow-hidden text-[--color-b900-w] bg-[--color-w-b900] ${className}`}
    >
      <div className="mx-auto sm:max-w-full md:max-w-7xl sm:px-8">
        {title && (
          <header className="font-header text-4xl text-center pb-4 dark:text-oaccent-700">
            {t(title)}
          </header>
        )}
        {children}
      </div>
    </div>
  );
};

export default Section;
