import { FC } from "react";
import { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import VideoReviewsPage from "@/components/VideoReviewsPage";

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
const VideoReviews: FC = () => {
  return <VideoReviewsPage />;
};

export default VideoReviews;
