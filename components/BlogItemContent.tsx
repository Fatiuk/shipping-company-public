"use client";
import React, { FC } from "react";
import { LuArrowLeft } from "react-icons/lu";
import { useLocale, useTranslations } from "next-intl";
import imgQuoteForm from "@/assets/img/black_truck.webp";
import HeroCTA from "@/components/HeroCTA";
import Section from "@/components/Section";
import SectionFullWidth from "@/components/SectionFullWidth";
import { formatDate } from "@/lib/utils";
import BlogItemI from "@/types/blogItem";
import ActiveLink from "./shared/ActiveLink";

const BlogItemContent: FC<{ item: BlogItemI }> = ({ item }) => {
  const t = useTranslations("blog");
  const locale = useLocale();
  return (
    <>
      <SectionFullWidth bgImage={imgQuoteForm.src}>
        <div className="flex flex-col px-4 items-center text-center justify-center h-full px-8 py-8 text-[--foreground]">
          <h1 className="font-h1-h2 pb-4 text-[--color-b700-w]">
            {t("title")}
          </h1>
          <p className="font-b1-b2">{t("description")}</p>
        </div>
        <HeroCTA />
      </SectionFullWidth>

      <Section>
        <ActiveLink
          href="/company/blog"
          className="inline-flex items-center mb-6 px-4 py-2 rounded-lg text-[--color-w-black] bg-[--color-b700-w] hover:bg-[--color-b500-w] transition-colors"
        >
          <LuArrowLeft className="mr-2 h-4 w-4" />
          {t("returnToBlog")}
        </ActiveLink>

        <h2 className="font-h2-h3 pb-9">{item.title}</h2>
        <p className="pb-4">{formatDate(item.date, locale)}</p>
        <div className="prose">{item.text}</div>

        <ActiveLink
          href="/company/blog"
          className="mt-10 inline-flex items-center mb-6 px-4 py-2 rounded-lg text-[--color-w-black] bg-[--color-b700-w] hover:bg-[--color-b500-w] transition-colors"
        >
          <LuArrowLeft className="mr-2 h-4 w-4" />
          {t("returnToBlog")}
        </ActiveLink>
      </Section>
    </>
  );
};

export default BlogItemContent;
