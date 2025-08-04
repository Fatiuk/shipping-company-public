import { getTranslations } from "next-intl/server";
import { blogItems } from "@/app/data";
import Blog from "@/components/Blog";
import PageProps from "@/types/page";

export const dynamic = 'force-static';

export async function generateStaticParams() {
  return [
    { locale: "en", company: "company" },
    { locale: "fr", company: "company" },
    { locale: "es", company: "company" }
  ];
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

export default async function BlogPage(props: PageProps) {
  const params = await props.params;
  const locale = params.locale;
  const t = await getTranslations({ locale, namespace: "blog" });

  return (
    <div className="container mx-auto py-16">
      <div className="text-center mx-auto max-w-[600px] mb-6">
        <h1 className="font-h1-h2-h3 text-[--color-b900-w] mb-4">
          {t("title")}
        </h1>
        <p className="font-b1-b2 text-gray-600 dark:text-gray-300">
          {t("description")}
        </p>
      </div>
      <Blog blogItems={blogItems} />
    </div>
  );
}
