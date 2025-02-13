"use client";
import About from "@/components/About";
import Faq from "@/components/Faq";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import Quotation from "@/components/Quotation";
import QuotationI from "@/types/quotation";
import Section from "@/components/Section";
import SectionFullWidth from "@/components/SectionFullWidth";
import Stats from "@/components/Stats";
import { FC, useState, useEffect } from "react";
import { useTranslations } from "next-intl";
import { quotations } from "@/app/data";
import imgHero from "@/assets/img/blue-truck-dniprollc.png";
import imgQuoteForm from "@/assets/img/black_truck.webp";
import en from "@/i18n/messages/en.json";
import QuoteForm from "@/components/QuoteForm";

const benefits = en.home.whyUs.benefits.map((_, index) => ({
  src: en.home.whyUs.benefits[index].src,
  title: `home.whyUs.benefits.${index}.title`,
  description: `home.whyUs.benefits.${index}.description`,
}));

const achievments = en.home.whyUs.achievments.map((_, index) => ({
  count: `whyUs.achievments.${index}.count`,
  suffix: `whyUs.achievments.${index}.suffix`,
  title: `whyUs.achievments.${index}.title`,
}));

const stats = en.home.whyUs.achievments.map((_, index) => ({
  id: index + 1,
  targetNumberStr: `home.whyUs.achievments.${index}.count`,
  increment: 100,
  suffix: `home.whyUs.achievments.${index}.suffix`,
  text: `home.whyUs.achievments.${index}.title`,
}));

const Home: FC = () => {
  const t = useTranslations("home");
  const [quote, setQuote] = useState<QuotationI>(quotations[0]);

  useEffect(() => {
    setQuote(quotations[Math.floor(Math.random() * quotations?.length)]);
  }, []);

  return (
    <>
      <SectionFullWidth image={imgHero.src}>
        <Hero />
      </SectionFullWidth>

      <Section className="!bg-[--color-b900-b200]">
        <div className="font-bold flex justify-between text-[--color-w-b900]">
          {achievments.map((a, i) => (
            <div key={a.title} className="flex items-center gap-3">
              <span className="text-4xl">
                {parseInt(t(a.count)).toLocaleString()} {t(a.suffix)}
              </span>
              <span className="text-2xl flex flex-col">
                {t(a.title)
                  .split(" ")
                  .map((word, index) => (
                    <span key={index} className="leading-tight uppercase">
                      {word}
                    </span>
                  ))}
              </span>
            </div>
          ))}
        </div>
      </Section>

      {/* <SectionFullWidth bgClass="!bg-[--color-b50-b700]">
        <Stats data={stats} />
      </SectionFullWidth> */}

      <SectionFullWidth bgClass="!bg-[--color-w-b700]">
        <About />
      </SectionFullWidth>

      <SectionFullWidth
        bgClass="!bg-[--color-b100-b200]"
        title="home.whyUs.title"
      >
        <Features data={benefits} />
      </SectionFullWidth>

      <SectionFullWidth
        bgImage={imgQuoteForm.src}
        bgClass="bg-gradient-to-b from-oblue-200/65 to-oblue-50 dark:from-oblue-600/75 dark:to-oblue-900/75"
      >
        <QuoteForm />
      </SectionFullWidth>

      {/* <Section title="home.">
        <Instructors instructors={instructors} />
      </Section> */}

      {/* <Section title="home.faq.title">
        <Faq />
      </Section> */}
    </>
  );
};

export default Home;
