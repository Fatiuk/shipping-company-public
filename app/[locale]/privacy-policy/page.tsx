import { getTranslations } from "next-intl/server";
import PageProps from "@/types/page";
import Section from "@/components/Section";
import ContentSections from "@/components/shared/ContentSections";

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
    namespace: "privacyPolicy",
  });

  return {
    title: t("title") || "Privacy Policy",
    description:
      t("description") ||
      'Dimi Noble ("we," "us," or "our") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website https://diminoble.com/, use our transportation services, or otherwise interact with us. Please read this policy carefully to understand our views and practices regarding your personal data.',
  };
}

export default async function PrivacyPolicy(props: PageProps) {
  const params = await props.params;
  const locale = params.locale;
  const t = await getTranslations({ locale, namespace: "privacyPolicy" });

  // lists of sections with various components
  const sectionsWithItems = ["1", "2"];
  const sectionsWithContact = ["9"];

  return (
    <Section>
      <div className="max-w-[1200px] mx-auto">
        <h1 className="font-h1-h2 mt-10 text-center">{t("title")}</h1>

        <div className="py-10">
          <section className="mb-10">
            <h2 className="font-h2-h3 mb-4">{t("subtitle")}</h2>
            <p className="text-[--color-b900-w]">{t("description")}</p>
          </section>

          <ContentSections
            t={t}
            namespace="sections"
            sectionsWithItems={sectionsWithItems}
            sectionsWithContact={sectionsWithContact}
          />
        </div>
      </div>
    </Section>
  );
}
