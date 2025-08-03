"use client";
import { FC, useEffect, useRef } from "react";
import { useTranslations } from "next-intl";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

const About: FC = () => {
  const t = useTranslations("home.about");
  const sectionRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current || !textRef.current || !imageRef.current) return;

    gsap.registerPlugin(ScrollTrigger);

    const textElements = textRef.current.children;

    const textAnimation = gsap.fromTo(
      textElements,
      {
        opacity: 0,
        y: 50,
      },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.2,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top center+=100",
          toggleActions: "play none none reverse",
        },
      }
    );

    const imageAnimation = gsap.fromTo(
      imageRef.current,
      {
        opacity: 0,
        scale: 0.8,
      },
      {
        opacity: 1,
        scale: 1,
        duration: 1.2,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top center+=100",
          toggleActions: "play none none reverse",
        },
      }
    );

    // Cleanup function
    return () => {
      textAnimation.kill();
      imageAnimation.kill();
    };
  }, []);

  return (
    <div ref={sectionRef} className="relative">
      <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-oblue-500/10 to-transparent rounded-full blur-2xl" />
      <div className="absolute bottom-0 right-0 w-40 h-40 bg-gradient-to-tl from-oaccent-500/10 to-transparent rounded-full blur-3xl" />

      <div className="w-full  mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center justify-between gap-16 relative">
        <div ref={textRef} className="lg:w-1/2 space-y-6">

          <h3 className="font-roboto font-bold text-2xl lg:text-[36px] leading-8 lg:leading-[48px] capitalize text-center lg:text-left text-[--color-b900-w]">
            {t("title")}
          </h3>

          <div className="flex flex-col gap-4">
            <p className="font-nunito text-base font-normal leading-6 text-[--color-b900-w]">{t("description.intro")}</p>
            <p className="font-nunito text-base font-normal leading-6 text-[--color-b900-w]">
              {t("description.experience")}
            </p>
            <p className="font-nunito text-base font-normal leading-6 text-[--color-b900-w]">
              {t("description.coverage")}
            </p>
            <p className="font-nunito text-base font-normal leading-6 text-[--color-b900-w]">{t("description.trust")}</p>
            <p className="font-nunito text-base font-normal leading-6 text-[--color-b900-w]">{t("description.authorization")}</p>
          </div>

          <div className="grid grid-cols-2 gap-6 pt-6">
            <div className="space-y-2">
              <span className="text-3xl font-bold bg-gradient-to-r from-oblue-300 to-oaccent-600 text-transparent bg-clip-text">
                5+
              </span>
              <p className="b3 text-[--color-b900-w]/70 capitalize">
                {t("highlights.years")}
              </p>
            </div>
            <div className="space-y-2">
              <span className="text-3xl font-bold bg-gradient-to-r from-oblue-300 to-oaccent-600 text-transparent bg-clip-text">
                50
              </span>
              <p className="b3 text-[--color-b900-w]/70 capitalize">
                {t("highlights.states")}
              </p>
            </div>
          </div>
        </div>

        <div ref={imageRef} className="lg:w-1/2">
          <div className="relative">
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl">
              <Image
                width={1316}
                height={987}
                src="/about.webp"
                alt="Transport vehicle"
                className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
              />
            </div>

            <div className="z-20 absolute right-[-0px] bottom-4 sm:bottom-16 bg-[--color-w-b100] rounded-l-xl p-2 sm:p-4 shadow-xl transform hover:scale-105 transition-transform duration-300">
              <div className="font-b4-b5 font-semibold text-oblue-500">
                {t("badge.licensed")}
              </div>
              <div className="font-b4-b5 text-oblue-300">
                {t("badge.insured")}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
