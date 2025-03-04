import { FC } from "react";
import { getTranslations } from "next-intl/server";
import YelpReviews from "@/components/YelpReviews";
import PageProps from "@/types/page";

export async function generateMetadata(props: PageProps) {
  const params = await props.params;
  const locale = params.locale;

  const t = await getTranslations({
    locale,
    namespace: "yelpReviews",
  });

  return {
    title: t("title") || "Yelp Reviews",
    description: t("description") || "Customer Reviews from Yelp",
  };
}

const YelpReviewsPage: FC = () => {
  return <YelpReviews />;
};

export default YelpReviewsPage;
