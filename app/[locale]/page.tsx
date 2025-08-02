"use client";
import About from "@/components/About";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import Section from "@/components/Section";
import SectionFullWidth from "@/components/SectionFullWidth";
import { FC } from "react";
// import imgHero from "@/assets/img/blue-truck-dniprollc.png";
import imgHero from "@/assets/img/hero.webp";
import en from "@/i18n/messages/en.json";
import QuoteForm from "@/components/QuoteForm";
import ReviewsSection from "@/components/ReviewsSection";
import Services from "@/components/Services";
import StatsItem from "@/components/StatsItem";

const benefits = en.home.whyUs.benefits.map((_, index) => ({
  title: `home.whyUs.benefits.${index}.title`,
  description: `home.whyUs.benefits.${index}.description`,
}));

const achievments = en.home.whyUs.achievments.map((_, index) => ({
  targetNumberStr: `home.whyUs.achievments.${index}.count`,
  suffix: `home.whyUs.achievments.${index}.suffix`,
  incrementStr: `home.whyUs.achievments.${index}.increment`,
  text: `home.whyUs.achievments.${index}.title`,
}));

const Home: FC = () => {
  return (
    <>
      <SectionFullWidth image={imgHero.src} fullHeight={true}>
        <Hero />
      </SectionFullWidth>

      <Section className="!bg-[--color-b900-b200]">
        <div className="container sm:max-w-[90%] mx-auto flex justify-between text-[--color-w-b900]">
          {achievments.map((a) => (
            <StatsItem
              key={a.text}
              targetNumberStr={a.targetNumberStr}
              incrementStr={a.incrementStr}
              suffix={a.suffix}
              text={a.text}
            />
          ))}
        </div>
      </Section>

      <Section bgClass="!bg-[--blue-800]">
        <Services />
      </Section>

      <SectionFullWidth bgClass="!bg-[--color-w-b700]">
        <About />
      </SectionFullWidth>

      <SectionFullWidth
        bgClass="!bg-[--blue-800]"
        title="home.whyUs.title"
        titleClass="text-oblue-700"
      >
        <Features data={benefits} />
      </SectionFullWidth>

      <SectionFullWidth
      // bgImage={imgQuoteForm.src}
      // bgClass="bg-gradient-to-b from-oblue-200/65 to-oblue-50 dark:from-oblue-600/75 dark:to-oblue-900/75"
      >
        <QuoteForm />
      </SectionFullWidth>

      <SectionFullWidth bgClass="!bg-[--color-w-b700]">
        <ReviewsSection />
      </SectionFullWidth>
    </>
  );
};

export default Home;
