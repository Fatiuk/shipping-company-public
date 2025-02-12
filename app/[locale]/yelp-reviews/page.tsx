import { FC, ReactElement, useEffect, useState } from "react";
import { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";

export async function generateMetadata({
  params,
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const resolvedParams = await Promise.resolve(params);

  const t = await getTranslations({
    locale: resolvedParams.locale,
    namespace: "yelpReviews",
  });

  return {
    title: t("title") || "Yelp Reviews",
    description: t("description") || "Yelp Reviews",
  };
}

const YelpReviews = async ({ params }: { params: { locale: string } }) => {
  const resolvedParams = await Promise.resolve(params);

  setRequestLocale(resolvedParams.locale);
  const t = await getTranslations({
    locale: resolvedParams.locale,
    namespace: "yelpReviews",
  });

  return (
    <div className="m-8">
      <p>Yelp Reviews</p>
    </div>
  );
};

export default YelpReviews;
