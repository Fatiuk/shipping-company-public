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
    namespace: "videoReviews",
  });

  return {
    title: t("title") || "Video Reviews",
    description: t("description") || "Video Reviews",
  };
}

// const VideoReviews = async ({ params }: { params: { locale: string } }) => {
const VideoReviews: FC<{ params: { locale: string } }> = async ({ params }) => {
  const resolvedParams = await Promise.resolve(params);

  setRequestLocale(resolvedParams.locale);
  const t = await getTranslations({
    locale: resolvedParams.locale,
    namespace: "videoReviews",
  });

  return (
    <div className="m-8">
      <p>Video Reviews</p>
    </div>
  );
};

export default VideoReviews;
