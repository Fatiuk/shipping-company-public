"use client";
import React, { FC } from "react";
import { LuArrowLeft } from "react-icons/lu";
import { useLocale, useTranslations } from "next-intl";
import { formatDate } from "@/lib/utils";
import BlogItemI from "@/types/blogItem";
import ActiveLink from "./shared/ActiveLink";

const BlogItemContent: FC<{ item: BlogItemI }> = ({ item }) => {
  const t = useTranslations("blog");
  const locale = useLocale();

  return (
    <div className="container mx-auto">
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
    </div>
  );
};

export default BlogItemContent;
