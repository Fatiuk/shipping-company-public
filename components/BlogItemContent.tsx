"use client";
import React, { FC } from "react";
import { useLocale } from "next-intl";
import GroupNinja from "@/assets/img/group-ninjas.jpg";
import HeroCTA from "@/components/HeroCTA";
import Section from "@/components/Section";
import SectionFullWidth from "@/components/SectionFullWidth";
import { formatDate } from "@/lib/utils";
import BlogItemI from "@/types/blogItem";

const BlogItemContent: FC<{ item: BlogItemI }> = ({ item }) => {
  const locale = useLocale();
  return (
    <>
      <SectionFullWidth bgImage={GroupNinja.src}>
        <div className="flex flex-col px-4 items-center text-center justify-center h-full px-8 text-black dark:text-white">
          <h1 className="text-7xl font-header pb-4 text-oblue-700 dark:text-white">
            News
          </h1>
          <p className="text-xl">
            Transform your potential with Otoshi Judo Club!
          </p>
        </div>
        <HeroCTA />
      </SectionFullWidth>

      <Section>
        <h2 className="font-header text-4xl pb-9">{item.title}</h2>
        <p className="pb-4">{formatDate(item.date, locale)}</p>
        <div className="text-lg">{item.text}</div>
      </Section>
    </>
  );
};

export default BlogItemContent;
