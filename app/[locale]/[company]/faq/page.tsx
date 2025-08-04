import { getTranslations } from "next-intl/server";
import Section from "@/components/Section";
import Faq from "@/components/Faq";
import PageProps from "@/types/page";

export const dynamic = 'force-static';

export async function generateStaticParams() {
  return [
    { locale: "en", company: "company" },
    { locale: "fr", company: "company" },
    { locale: "es", company: "company" }
  ];
}

export async function generateMetadata(props: PageProps) {
  const params = await props.params;
  const locale = params.locale;

  const t = await getTranslations({
    locale,
    namespace: "home.faq",
  });

  return {
    title: t("title") || "FAQ",
    description: t("title") || "Frequently Asked Questions",
  };
}

const FaqPage = () => {
  return (
    <Section title="home.faq.title">
      <Faq />
    </Section>
  );
};

export default FaqPage;
