import { getTranslations } from "next-intl/server";
import PageProps from "@/types/page";
import Section from "@/components/Section";
import ContentSections from "@/components/shared/ContentSections";

export async function generateMetadata(props: PageProps) {
  const params = await props.params;
  const locale = params.locale;

  const t = await getTranslations({
    locale,
    namespace: "accessibilityStatement",
  });

  return {
    title: t("title") || "Accessibility Statement",
    description:
      t("description") ||
      'Dimi Noble ("we," "us," or "our") is committed to ensuring accessibility for all users, including individuals with disabilities. We strive to make our website and services accessible and user-friendly for everyone.',
  };
}

export default async function AccessibilityStatement(props: PageProps) {
  const params = await props.params;
  const locale = params.locale;
  const t = await getTranslations({
    locale,
    namespace: "accessibilityStatement",
  });

  // lists of sections with various components
  const sectionsWithItems = ["2"];
  const sectionsWithContact = ["5"];

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
