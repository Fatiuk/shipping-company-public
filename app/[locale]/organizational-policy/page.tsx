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
    namespace: "organizationalPolicy",
  });

  return {
    title: t("title") || "Organizational Policy",
    description:
      t("description") ||
      'Dimi Noble ("we," "us," or "our") is committed to maintaining high standards of professionalism, integrity, and service excellence in the vehicle transportation industry. This Organizational Policy outlines our guiding principles, ethical standards, and operational commitments.',
  };
}

export default async function OrganizationalPolicy(props: PageProps) {
  const params = await props.params;
  const locale = params.locale;
  const t = await getTranslations({
    locale,
    namespace: "organizationalPolicy",
  });

  // lists of sections with various components
  const sectionsWithItems = ["2", "4", "5"];
  const sectionsWithContact = ["8"];

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
