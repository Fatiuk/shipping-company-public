import { getTranslations } from "next-intl/server";
import PageProps from "@/types/page";
import Section from "@/components/Section";
import ContentSections from "@/components/shared/ContentSections";

export async function generateMetadata(props: PageProps) {
  const params = await props.params;
  const locale = params.locale;

  const t = await getTranslations({
    locale,
    namespace: "termsAndConditions",
  });

  return {
    title: t("title") || "Terms and Conditions",
    description:
      t("description") ||
      'These Terms and Conditions ("Terms") govern your use of Dimi Noble\'s ("we," "us," or "our") vehicle shipping services. By accessing our website or utilizing our services, you agree to comply with and be bound by these Terms.',
  };
}

export default async function TermsAndConditions(props: PageProps) {
  const params = await props.params;
  const locale = params.locale;
  const t = await getTranslations({ locale, namespace: "termsAndConditions" });

  // lists of sections with various components
  const sectionsWithItems = ["2"];
  const sectionsWithContact = ["7"];

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
