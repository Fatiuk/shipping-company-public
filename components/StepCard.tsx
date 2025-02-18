"use client";
import { useRef, useEffect } from "react";
import { LuCheck } from "react-icons/lu";
import { useTranslations } from "next-intl";
import { gsap } from "gsap";
import Step from "@/types/step";

const StepCard: React.FC<Step & { isActive: boolean }> = ({
  stepNumber,
  title,
  description,
  icon,
  isActive,
}) => {
  const t = useTranslations("howItWorks");
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!cardRef.current) return;

    gsap.fromTo(
      cardRef.current,
      {
        opacity: 0,
        y: 50,
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        scrollTrigger: {
          trigger: cardRef.current,
          start: "top bottom-=100",
          toggleActions: "play none none reverse",
        },
      }
    );
  }, []);

  return (
    <div
      ref={cardRef}
      className={`relative p-6 md:p-8 rounded-2xl transition-all duration-500
                 ${
                   isActive
                     ? "bg-gradient-to-br from-oblue-50 to-oaccent-600/10 dark:from-oblue-500/50 dark:to-oaccent-800/30 shadow-2xl"
                     : "bg-white/50 dark:bg-oblue-900/30 shadow-lg"
                 }`}
    >
      <div className="flex items-start gap-6">
        <div
          className={`flex-shrink-0 p-4 rounded-xl transition-colors duration-300
                        ${
                          isActive
                            ? "bg-oblue-600 text-white"
                            : "bg-oblue-100 dark:bg-oblue-800 text-oblue-600 dark:text-white"
                        }`}
        >
          {icon && icon}
        </div>
        <div className="flex-grow">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-sm font-bold text-oblue-600 dark:text-oaccent-400">
              {t("step")} {stepNumber}
            </span>
            <div className="h-px flex-grow bg-oblue-200 dark:bg-oaccent-400" />
          </div>
          <h3 className="text-xl md:text-2xl font-bold text-oblue-900 dark:text-white mb-4">
            {title}
          </h3>
          <div className="prose prose-sm dark:prose-invert max-w-none">
            {description.split("\n").map((paragraph, index) => {
              if (paragraph.startsWith("-")) {
                return (
                  <div key={index} className="flex items-start gap-2 mt-2">
                    <LuCheck className="w-5 h-5 text-oblue-600 dark:text-oaccent-400 mt-1 flex-shrink-0" />
                    <p className="text-gray-600 dark:text-gray-300 m-0">
                      {paragraph.substring(1).trim()}
                    </p>
                  </div>
                );
              }
              return (
                <p
                  key={index}
                  className="text-gray-600 dark:text-gray-300 mb-4"
                >
                  {paragraph}
                </p>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default StepCard;
