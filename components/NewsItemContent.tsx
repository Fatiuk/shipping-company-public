"use client";
import React, { FC } from "react";
import { useGlobalContext } from "@/context/context";
import { formatDate } from "@/components/utils";
import HeroCTA from "@/components/HeroCTA";
import Section from "@/components/Section";
import SectionFullWidth from "@/components/SectionFullWidth";
import GroupNinja from "@/assets/img/group-ninjas.jpg";
import NewsItemI from "@/types/newsItem";

const NewsItemContent: FC<{ item: NewsItemI }> = ({ item }) => {
  const { lang } = useGlobalContext();

  return (
    <>
      <SectionFullWidth bgImage={GroupNinja.src}>
        <div className="flex flex-col px-4 items-center text-center justify-center h-full px-8 text-black dark:text-white">
          <h1 className="text-7xl font-header pb-4 text-oblue-700 dark:text-white">
            {lang === "fr" ? "Nouvelles" : "News"}
          </h1>
          <p className="text-xl">
            {lang === "fr"
              ? "Transformez votre potentiel avec Otoshi Judo Club !"
              : "Transform your potential with Otoshi Judo Club!"}
          </p>
        </div>
        <HeroCTA />
      </SectionFullWidth>

      <Section>
        <h2 className="font-header text-4xl pb-9">{item[lang].title}</h2>
        <p className="pb-4">{formatDate(item.date, lang)}</p>
        <div className="text-lg">{item[lang].text}</div>
      </Section>
    </>
  );
};

export default NewsItemContent;
