import DynamicRouteI from "@/types/dynamicRoute";
import NewsItemContent from "@/components/NewsItemContent";
import { newsItems } from "@/app/data";
import { notFound } from "next/navigation";
import React, { FC } from "react";

const NewsItemPage: FC<DynamicRouteI> = async ({ params }) => {
  const slug = (await params).slug;
  const item = newsItems.find((item) => item.slug === slug);

  if (!item) {
    notFound();
  }

  return <NewsItemContent item={item} />;
};

export default NewsItemPage;
