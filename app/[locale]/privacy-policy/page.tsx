import { getTranslations } from "next-intl/server";
import PageProps from "@/types/page";
import Section from "@/components/Section";

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

  const sectionsData = t.raw("sections");
  const sections = Object.keys(sectionsData || {});

  // Define lists of sections that should have various components
  const sectionsWithItems = ["1", "2"];
  const sectionsWithContact = ["9"];

  const renderItems = (sectionNumber: string) => {
    // Only render items for sections in the whitelist
    if (!sectionsWithItems.includes(sectionNumber)) return null;

    try {
      const items = t.raw(`sections.${sectionNumber}.items`);

      if (items && Array.isArray(items) && items.length > 0) {
        return (
          <ul className="list-disc list-inside mt-4 font-b2-b3">
            {items.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        );
      }
      return null;
    } catch {
      return null;
    }
  };

  const renderContact = (sectionNumber: string) => {
    if (!sectionsWithContact.includes(sectionNumber)) return null;

    try {
      const contact = t.raw(`sections.${sectionNumber}.contact`);

      if (contact && typeof contact === "object") {
        return (
          <div className="">
            {contact.email && (
              <p className="mt-4">
                <strong>{contact.email.label}:</strong>{" "}
                <a
                  href={`mailto:${contact.email.value}`}
                  className="text-[--color-a700-a400]"
                >
                  {contact.email.value}
                </a>
              </p>
            )}
            {contact.phone && (
              <p className="mt-2">
                <strong>{contact.phone.label}:</strong>{" "}
                <a
                  href={`tel:${contact.phone.value}`}
                  className="text-[--color-a700-a400]"
                >
                  {contact.phone.value}
                </a>
              </p>
            )}
            {contact.address && (
              <p className="mt-2">
                <strong>{contact.address.label}:</strong>{" "}
                <span className="text-[--color-a700-a400]">
                  {contact.address.value}
                </span>
              </p>
            )}
          </div>
        );
      }
      return null;
    } catch {
      return null;
    }
  };

  // Helper function to safely retrieve section content
  const getSectionContent = (
    sectionNumber: string,
    key: string,
    fallback: string = ""
  ) => {
    try {
      return t(`sections.${sectionNumber}.${key}`);
    } catch {
      return fallback;
    }
  };

  return (
    <Section>
      <div className="max-w-[1200px] mx-auto">
        <h1 className="font-h1-h2 mt-10 text-center">{t("title")}</h1>

        <div className="py-10">
          <section className="mb-10">
            <h2 className="font-h2-h3 mb-4">{t("subtitle")}</h2>
            <p className="text-[--color-b900-w]">{t("description")}</p>
          </section>

          {sections.map((sectionNumber) => {
            const title = getSectionContent(
              sectionNumber,
              "title",
              `Section ${sectionNumber}`
            );
            const content = getSectionContent(sectionNumber, "content", "");

            return (
              <section key={sectionNumber} className="mb-10">
                <h2 className="font-h2-h3 mb-4">{title}</h2>
                <p className="text-[--color-b900-w]">{content}</p>
                {renderItems(sectionNumber)}
                {renderContact(sectionNumber)}
              </section>
            );
          })}
        </div>
      </div>
    </Section>
  );
}
