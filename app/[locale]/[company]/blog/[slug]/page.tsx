import { getTranslations } from "next-intl/server";
import { notFound } from "next/navigation";
import { blogItems } from "@/app/data";
import PageProps from "@/types/page";
import BlogItemContent from "@/components/BlogItemContent";
import SectionFullWidth from "@/components/SectionFullWidth";
import Section from "@/components/Section";

export const dynamic = 'force-static';

export async function generateStaticParams() {
  const params = [];
  const locales = ["en", "fr", "es"];
  const slugs = [
    "auto-transport-guide-everything-you-need-to-know-about-car-shipping-services",
    "the-ultimate-guide-to-seasonal-vehicle-shipping-when-why-and-how",
    "evolution-of-auto-transport-technology-how-innovation-is-reshaping-vehicle-shipping",
    "environmental-impact-of-vehicle-shipping-sustainable-practices-in-auto-transport",
    "cross-country-vehicle-shipping-preparation-checklist-ensuring-a-smooth-transport-experience",
    "navigating-economic-shifts-how-market-fluctuations-impact-the-auto-transport-landscape",
    "beyond-carbon-footprints-implementing-sustainable-practices-in-modern-vehicle-shipping"
  ];

  for (const locale of locales) {
    for (const slug of slugs) {
      params.push({
        locale,
        company: "company",
        slug
      });
    }
  }

  return params;
}

export async function generateMetadata(props: PageProps) {
  const params = await props.params;
  const locale = params.locale;

  const t = await getTranslations({
    locale,
    namespace: "blog",
  });

  return {
    title: t("title") || "Blog",
    description:
      t("description") ||
      "Move Your Car with Confidence – Fast, Reliable, Nationwide!",
  };
}

const BlogItemPage = async (props: PageProps) => {
  const params = await props.params;
  const { slug } = params;

  const item = blogItems.find((item) => item.slug === slug);

  if (!item) notFound();

  return (
    <>
      <SectionFullWidth bgImage={item.image}>
        <h2 className="font-h2-h3 text-[--color-b900-w] text-center py-10 sm:py-20">
          {item.title}
        </h2>
      </SectionFullWidth>
      <Section>
        <BlogItemContent item={item} />
      </Section>
    </>
  );
};

export default BlogItemPage;
