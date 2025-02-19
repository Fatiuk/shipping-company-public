import { getTranslations } from "next-intl/server";
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
    description: t("description") || "Yelp Reviews",
  };
}

const YelpReviews = async (props: PageProps) => {
  const params = await props.params;
  const locale = params.locale;

  const t = await getTranslations({
    locale,
    namespace: "yelpReviews",
  });

  return (
    <div className="m-8">
      <p>Yelp Reviews</p>
      <p>{t("title")}</p>
    </div>
  );
};

export default YelpReviews;
