import { FC } from "react";
import { getTranslations } from "next-intl/server";
import Reviews from "@/components/Reviews";
import PageProps from "@/types/page";

export const dynamic = 'force-static';

export async function generateStaticParams() {
  return [
    { locale: "en" },
    { locale: "fr" },
    { locale: "es" }
  ];
}

export async function generateMetadata(props: PageProps) {
  const params = await props.params;
  const locale = params.locale;

  const t = await getTranslations({
    locale,
    namespace: "reviews",
  });

  return {
    title: t("title") || "Customer Reviews",
    description:
      t("description") ||
      "See what our customers are saying about our shipping services across the country. Read authentic reviews from real customers who have experienced our dedication to quality and reliability.",
  };
}

const ReviewsPage: FC = () => {
  return <Reviews />;
};

export default ReviewsPage;
