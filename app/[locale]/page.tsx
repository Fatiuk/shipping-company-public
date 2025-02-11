"use client";
import Cards from "@/components/Cards";
import FaqItem from "@/components/FaqItem";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import Instructors from "@/components/Instructors";
import Quotation from "@/components/Quotation";
import QuotationI from "@/types/quotation";
import Section from "@/components/Section";
import SectionFullWidth from "@/components/SectionFullWidth";
import Stats from "@/components/Stats";
import { FC, useState, useEffect } from "react";
import { useTranslations } from "next-intl";
import { classesInfo } from "@/app/data";
import { instructors } from "@/app/data";
import { quotations } from "@/app/data";
import { stats } from "@/app/data";
import imgHero from "@/assets/img/hero.jpg";
import QuoteBg from "@/assets/img/bg-punch.jpg";
import en from "@/i18n/messages/en.json";

const benefits = en.home.whyUs.benefits.map((_, index) => ({
  src: en.home.whyUs.benefits[index].src,
  title: `home.whyUs.benefits.${index}.title`,
  description: `home.whyUs.benefits.${index}.description`,
}));

const Home: FC = () => {
  const t = useTranslations("home");
  const [quote, setQuote] = useState<QuotationI>(quotations[0]);

  useEffect(() => {
    setQuote(quotations[Math.floor(Math.random() * quotations?.length)]);
  }, []);

  return (
    <>
      <SectionFullWidth bgImage={imgHero.src}>
        <Hero />
      </SectionFullWidth>

      <Section title="home.title">
        <p className="font-sans text-lg">{t("description")}</p>
      </Section>

      <SectionFullWidth
        bgClass="bg-oblue-100 dark:bg-owhite"
        title="home.title"
      >
        <Features data={benefits} />
      </SectionFullWidth>

      {/* <Section title="home.">
        <Cards data={classesInfo} />
      </Section> */}

      {/* <SectionFullWidth hasOverlay={true} style={{"--quote-bg": `url(${QuoteBg.src})`} as React.CSSProperties} className="bg-[image:var(--quote-bg)] bg-opacity-90 bg-cover bg-center bg-fixed opacity-90"> */}
      <SectionFullWidth bgImage={QuoteBg.src}>
        <Quotation quote={quote} />
      </SectionFullWidth>

      {/* <Section title="home.">
        <Instructors instructors={instructors} />
      </Section> */}

      <SectionFullWidth bgClass="bg-oblue-100 dark:bg-owhite">
        <Stats data={stats} />
      </SectionFullWidth>

      {/* <Section title="FAQ">
        <FaqItem />
      </Section> */}
    </>
  );
};

export default Home;
