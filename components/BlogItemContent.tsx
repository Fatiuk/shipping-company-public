"use client";
import React, { FC } from "react";
import { useLocale, useTranslations } from "next-intl";
import imgQuoteForm from "@/assets/img/black_truck.webp";
import HeroCTA from "@/components/HeroCTA";
import Section from "@/components/Section";
import SectionFullWidth from "@/components/SectionFullWidth";
import { formatDate } from "@/lib/utils";
import BlogItemI from "@/types/blogItem";

const BlogItemContent: FC<{ item: BlogItemI }> = ({ item }) => {
  const t = useTranslations("blog");
  const locale = useLocale();
  return (
    <>
      <SectionFullWidth bgImage={imgQuoteForm.src}>
        <div className="flex flex-col px-4 items-center text-center justify-center h-full px-8 text-black dark:text-white">
          <h1 className="text-7xl font-header pb-4 text-oblue-700 dark:text-white">
            {t("title")}
          </h1>
          <p className="text-xl">{t("description")}</p>
        </div>
        <HeroCTA />
      </SectionFullWidth>

      <Section>
        <h2 className="font-header text-4xl pb-9">{item.title}</h2>
        <p className="pb-4">{formatDate(item.date, locale)}</p>
        <div className="prose">{item.text}</div>
      </Section>
    </>
  );
};

export default BlogItemContent;
