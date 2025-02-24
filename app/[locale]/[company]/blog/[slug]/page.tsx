import { getTranslations } from "next-intl/server";
import { notFound } from "next/navigation";
import { blogItems } from "@/app/data";
import PageProps from "@/types/page";
import BlogItemContent from "@/components/BlogItemContent";

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
    title:
      t("title") ||
      "Diminoble ransportations is a licensed shipping company that works with fully insured and bonded partners",
    description:
      t("description") ||
      "We operate nationwide, simplifying the process of relocating various types of vehicles for our clients. With over 5 years of expertise in the relocation industry, our specialists have provided excellent service to companies, contractual agents, and private individuals. Our seamless transportation of vehicles spans all 50 states. If you're embarking on a relocation project, we recognize that numerous options are available. However, none compare to NFS transportation. We take pride in our commitment to quality service delivery and customer satisfaction. When you choose us, we ensure you comprehend the involved processes because we believe in keeping our clients informed. Providing value for money is our forte.",
  };
}

const BlogItemPage = async (props: PageProps) => {
  const params = await props.params;
  const { slug, locale } = params;

  console.log("params received:", { slug, locale });

  const item = blogItems.find((item) => item.slug === slug);

  if (!item) notFound();

  return <BlogItemContent item={item} />;
};

export default BlogItemPage;
