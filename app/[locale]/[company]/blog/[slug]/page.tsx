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

  const locale = params.locale;
  const t = await getTranslations({ locale, namespace: "blog" });

  const item = blogItems.find((item) => item.slug === slug);

  if (!item) notFound();

  return (
    // <div className="container mx-auto py-16">
    //   <div className="text-center mx-auto max-w-[600px] mb-6">
    //     <h1 className="font-h1-h2-h3 text-[--color-b900-w] mb-4">
    //       {t("title")}
    //     </h1>
    //     <p className="font-b1-b2 text-gray-600 dark:text-gray-300">
    //       {t("description")}
    //     </p>
    //   </div>
    //   <BlogItemContent item={item} />
    // </div>
    <>
      <SectionFullWidth bgImage={item.image} title={item.title}>
        <h2></h2>
      </SectionFullWidth>
      <Section>
        <BlogItemContent item={item} />
      </Section>
    </>
  );
};

export default BlogItemPage;
