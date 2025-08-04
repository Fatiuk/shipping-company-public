import { getTranslations } from "next-intl/server";
import HowItWorks from "@/components/HowItWorks";
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
    namespace: "howItWorks",
  });

  return {
    title: t("title") || "How It Works",
    description: t("description") || "How It Works",
  };
}

const HowItWorksPage = async () => {
  return (
    <div className="container mx-auto py-16 max-w-[1200px]">
      <HowItWorks />
    </div>
  );
};

export default HowItWorksPage;
