import { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import HowItWorks from "@/components/HowItWorks";

export async function generateMetadata({
  params,
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const resolvedParams = await Promise.resolve(params);

  const t = await getTranslations({
    locale: resolvedParams.locale,
    namespace: "howItWorks",
  });

  return {
    title: t("title") || "How It Works",
    description: t("description") || "How It Works",
  };
}

const HowItWorksPage = async ({ params }: { params: { locale: string } }) => {
  return (
    <div className="container mx-auto py-16 max-w-[1200px]">
      <HowItWorks />
    </div>
  );
};

export default HowItWorksPage;
