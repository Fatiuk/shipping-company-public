import { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import Section from "@/components/Section";
import Faq from "@/components/Faq";

export async function generateMetadata({
  params,
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const resolvedParams = await Promise.resolve(params);

  const t = await getTranslations({
    locale: resolvedParams.locale,
    namespace: "home.faq",
  });

  return {
    title: t("title") || "FAQ",
    description: t("title") || "Frequently Asked Questions",
  };
}

const FaqPage = async ({ params }: { params: { locale: string } }) => {
  // const resolvedParams = await Promise.resolve(params);

  // setRequestLocale(resolvedParams.locale);
  // const t = await getTranslations({
  //   locale: resolvedParams.locale,
  //   namespace: "home.faq",
  // });

  return (
    <Section title="home.faq.title">
      <Faq />
    </Section>
  );
};

export default FaqPage;
