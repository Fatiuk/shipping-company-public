import { getTranslations } from "next-intl/server";
import { notFound } from "next/navigation";
import { blogItems } from "@/app/data";
import PageProps from "@/types/page";
import BlogItemContent from "@/components/BlogItemContent";
import SectionFullWidth from "@/components/SectionFullWidth";
import Section from "@/components/Section";

export async function generateStaticParams() {
  const locales = ["en", "es"];

  const params = blogItems.flatMap((item) =>
    locales.map((locale) => ({
      locale,
      slug: item.slug,
    }))
  );

  console.log("Generated params:", params);
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
      <SectionFullWidth bgImage={item.image} title={item.title}>
        <span></span>
      </SectionFullWidth>
      <Section>
        <BlogItemContent item={item} />
      </Section>
    </>
  );
};

export default BlogItemPage;
