"use client";
import React, { useRef, useEffect, useMemo } from "react";
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
import StepCard from "@/components/StepCard";

const STEP_ICONS = {
  "1": <LuFileText className="w-8 h-8" />,
  "2": <LuCalculator className="w-8 h-8" />,
  "3": <LuHandshake className="w-8 h-8" />,
  "4": <LuTruck className="w-8 h-8" />,
  "5": <LuMapPin className="w-8 h-8" />,
  default: <LuCheck className="w-8 h-8" />,
};

const HowItWorks: React.FC = () => {
  const t = useTranslations("howItWorks");
  const [activeStep, setActiveStep] = React.useState(1);
  const containerRef = useRef<HTMLDivElement>(null);
  const timelineInitialized = useRef(false);

  // Memoize steps data to prevent recreation on each render
  const steps: Step[] = useMemo(
    () =>
      Array.from({ length: 5 }, (_, i) => ({
        stepNumber: String(i + 1),
        title: t(`steps.${i}.title`),
        description: t(`steps.${i}.description`),
        icon:
          STEP_ICONS[String(i + 1) as keyof typeof STEP_ICONS] ||
          STEP_ICONS.default,
      })),
    [t]
  );

  useEffect(() => {
    // Only register plugin once
    if (!timelineInitialized.current) {
      gsap.registerPlugin(ScrollTrigger);
      timelineInitialized.current = true;
    }

    // single ScrollTrigger context that manages all steps
    const ctx = gsap.context(() => {
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
    }, containerRef);

    // Clean up function to prevent memory leaks
    return () => ctx.revert();
  }, []);

  return (
    <div className="relative pt-[200px]">
      {/* make this div fixed not moving, all steps will move under it */}
      <div className="fixed top-[78px] left-0 right-0 z-10 backdrop-blur-md pt-12">
        <div className="text-center mx-auto max-w-[600px]">
          <h1 className="font-h1-h2-h3 text-[--color-b900-w] mb-4">
            {t("sectionTitle")}
          </h1>
          <p className="font-b1-b2 text-gray-600 dark:text-gray-300">
            {t("description")}
          </p>
        </div>

        {/* Timeline Progress */}
        <div className="hidden lg:flex justify-between max-w-4xl mx-auto mt-6">
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
