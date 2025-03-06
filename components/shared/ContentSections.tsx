import React from "react";
import { TranslationValues } from "next-intl";

interface ClassNamesConfig {
  section?: string;
  heading?: string;
  content?: string;
  itemsList?: string;
  itemsListItem?: string;
  contactContainer?: string;
  contactItem?: string;
  contactLink?: string;
}

interface ContentSectionsProps {
  t: any;
  namespace: string;
  sectionsWithItems?: string[];
  sectionsWithContact?: string[];
  classNames?: ClassNamesConfig;
}

export const ContentSections: React.FC<ContentSectionsProps> = ({
  t,
  namespace,
  sectionsWithItems = [],
  sectionsWithContact = [],
  classNames = {},
}) => {
  // Default class names
  const defaultClassNames: ClassNamesConfig = {
    section: "mb-10",
    heading: "font-h2-h3 mb-4",
    content: "text-[--color-b900-w]",
    itemsList: "list-disc list-inside mt-4 font-b2-b3",
    itemsListItem: "",
    contactContainer: "",
    contactItem: "mt-4",
    contactLink: "text-[--color-a700-a400]",
  };

  const mergedClassNames: ClassNamesConfig = {
    ...defaultClassNames,
    ...classNames,
  };

  // Get all section numbers
  const sections = getSectionNumbers(t, namespace);

  return (
    <>
      {sections.map((sectionNumber) => {
        const title = getSectionContent(
          t,
          namespace,
          sectionNumber,
          "title",
          `Section ${sectionNumber}`
        );
        const content = getSectionContent(
          t,
          namespace,
          sectionNumber,
          "content",
          ""
        );

        return (
          <section key={sectionNumber} className={mergedClassNames.section}>
            <h2 className={mergedClassNames.heading}>{title}</h2>
            <p className={mergedClassNames.content}>{content}</p>
            {renderItems(
              t,
              namespace,
              sectionNumber,
              sectionsWithItems,
              mergedClassNames
            )}
            {renderContact(
              t,
              namespace,
              sectionNumber,
              sectionsWithContact,
              mergedClassNames
            )}
          </section>
        );
      })}
    </>
  );
};

// Helper functions encapsulated within the same file
const getSectionNumbers = (t: any, namespace: string): string[] => {
  const sectionsData = t.raw(namespace);
  return Object.keys(sectionsData || {});
};

const getSectionContent = (
  t: (key: string, values?: TranslationValues) => string,
  namespace: string,
  sectionNumber: string,
  key: string,
  fallback: string = ""
): string => {
  try {
    return t(`${namespace}.${sectionNumber}.${key}`);
  } catch {
    return fallback;
  }
};

const renderItems = (
  t: any,
  namespace: string,
  sectionNumber: string,
  sectionsWithItems: string[],
  classNames: ClassNamesConfig
) => {
  // Only render items for sections in the whitelist
  if (!sectionsWithItems.includes(sectionNumber)) return null;

  try {
    const items = t.raw(`${namespace}.${sectionNumber}.items`);

    if (items && Array.isArray(items) && items.length > 0) {
      return (
        <ul className={classNames.itemsList}>
          {items.map((item: string, index: number) => (
            <li key={index} className={classNames.itemsListItem}>
              {item}
            </li>
          ))}
        </ul>
      );
    }
    return null;
  } catch {
    return null;
  }
};

const renderContact = (
  t: any,
  namespace: string,
  sectionNumber: string,
  sectionsWithContact: string[],
  classNames: ClassNamesConfig
) => {
  if (!sectionsWithContact.includes(sectionNumber)) return null;

  try {
    const contact = t.raw(`${namespace}.${sectionNumber}.contact`);

    if (contact && typeof contact === "object") {
      const contactItemClass = classNames.contactItem || "";
      const contactLinkClass = classNames.contactLink || "";

      return (
        <div className={classNames.contactContainer}>
          {contact.email && (
            <p className={contactItemClass}>
              <strong>{contact.email.label}:</strong>{" "}
              <a
                href={`mailto:${contact.email.value}`}
                className={contactLinkClass}
              >
                {contact.email.value}
              </a>
            </p>
          )}
          {contact.phone && (
            <p
              className={
                contactItemClass === "mt-4" ? "mt-2" : contactItemClass
              }
            >
              <strong>{contact.phone.label}:</strong>{" "}
              <a
                href={`tel:${contact.phone.value}`}
                className={contactLinkClass}
              >
                {contact.phone.value}
              </a>
            </p>
          )}
          {contact.address && (
            <p
              className={
                contactItemClass === "mt-4" ? "mt-2" : contactItemClass
              }
            >
              <strong>{contact.address.label}:</strong>{" "}
              <span className={contactLinkClass}>{contact.address.value}</span>
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

export default ContentSections;
