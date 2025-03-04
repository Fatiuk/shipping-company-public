import { FC } from "react";
import { getTranslations } from "next-intl/server";
import VideoReviews from "@/components/VideoReviews";
import PageProps from "@/types/page";

export async function generateMetadata(props: PageProps) {
  const params = await props.params;
  const locale = params.locale;

  const t = await getTranslations({
    locale,
    namespace: "videoReviews",
  });

  return {
    title: t("title") || "Video Reviews",
    description: t("description") || "Video Reviews",
  };
}

const VideoReviewsPage: FC = () => {
  return <VideoReviews />;
};

export default VideoReviewsPage;
