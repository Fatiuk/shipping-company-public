import React, { FC } from "react";
import { getTranslations } from "next-intl/server";
import { notFound } from "next/navigation";
import { newsItems } from "@/app/data";
import NewsItemContent from "@/components/NewsItemContent";
import DynamicRouteI from "@/types/dynamicRoute";
import PageProps from "@/types/page";

export async function generateMetadata(props: PageProps) {
  const params = await props.params;
  const locale = params.locale;

  const t = await getTranslations({
    locale,
    namespace: "blog",
  });

  return {
    title:
      t("title") ||
      "Diminoble ransportations is a licensed shipping company that works with fully insured and bonded partners",
    description:
      t("description") ||
      "We operate nationwide, simplifying the process of relocating various types of vehicles for our clients. With over 5 years of expertise in the relocation industry, our specialists have provided excellent service to companies, contractual agents, and private individuals. Our seamless transportation of vehicles spans all 50 states. If you're embarking on a relocation project, we recognize that numerous options are available. However, none compare to NFS transportation. We take pride in our commitment to quality service delivery and customer satisfaction. When you choose us, we ensure you comprehend the involved processes because we believe in keeping our clients informed. Providing value for money is our forte.",
  };
}

const NewsItemPage: FC<DynamicRouteI> = async ({ params }) => {
  const slug = (await params).slug;
  const item = newsItems.find((item) => item.slug === slug);

  if (!item) {
    notFound();
  }

  return <NewsItemContent item={item} />;
};

export default NewsItemPage;
