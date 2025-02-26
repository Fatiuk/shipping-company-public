"use client";
import React, { useRef, useEffect } from "react";
import { useTranslations } from "next-intl";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  LuTruck,
  LuFileText,
  LuCalculator,
  LuHandshake,
  LuMapPin,
  LuCheck,
} from "react-icons/lu";
import Step from "@/types/step";
import StepCard from "./StepCard";

const HowItWorks: React.FC = () => {
  const t = useTranslations("howItWorks");
  const [activeStep, setActiveStep] = React.useState(1);
  const containerRef = useRef<HTMLDivElement>(null);

  const getStepIcon = (number: string) => {
    switch (number) {
      case "1":
        return <LuFileText className="w-8 h-8" />;
      case "2":
        return <LuCalculator className="w-8 h-8" />;
      case "3":
        return <LuHandshake className="w-8 h-8" />;
      case "4":
        return <LuTruck className="w-8 h-8" />;
      case "5":
        return <LuMapPin className="w-8 h-8" />;
      default:
        return null;
    }
  };

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const sections = document.querySelectorAll(".step-card");

    sections.forEach((section, index) => {
      ScrollTrigger.create({
        trigger: section,
        start: "top center",
        end: "bottom center",
        onToggle: ({ isActive }) => {
          if (isActive) {
            setActiveStep(index + 1);
          }
        },
      });
    });
  }, []);

  const steps: Step[] = Array.from({ length: 5 }, (_, i) => ({
    stepNumber: String(i + 1),
    title: t(`steps.${i}.title`),
    description: t(`steps.${i}.description`),
    icon: getStepIcon(String(i + 1)) || <LuCheck className="w-8 h-8" />,
  }));

  return (
    <div className="relative pt-[200px]">
      {/* make this div fixed not moving, all steps will move under it */}
      <div className="fixed top-[78px] left-0 right-0 z-10 backdrop-blur-md pt-12">
        <div className="text-center max-w-3xl mx-auto mb-6">
          <h1 className="font-h1-h2 text-[--color-b900-w] mb-6">
            {t("sectionTitle")}
          </h1>
          <p className="font-b1-b2 text-gray-600 dark:text-gray-300">
            {t("description")}
          </p>
        </div>

        {/* Timeline Progress */}
        <div className="hidden lg:flex justify-between max-w-4xl mx-auto">
          {steps.map((_, index) => (
            <React.Fragment key={index}>
              <div className="flex flex-col items-center">
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center
                             transition-colors duration-300
                             ${
                               index + 1 <= activeStep
                                 ? "bg-oblue-600 text-white"
                                 : "bg-oblue-100 text-gray-600"
                             }`}
                >
                  {index + 1}
                </div>
              </div>
              {index < steps.length - 1 && (
                <div className="flex-grow h-px my-4 bg-gray-200" />
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
      {/* Steps Grid */}
      <div ref={containerRef} className="mt-4 space-y-8 px-6">
        {steps.map((step, index) => (
          <div key={step.stepNumber} className="step-card">
            <StepCard {...step} isActive={index + 1 === activeStep} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default HowItWorks;
