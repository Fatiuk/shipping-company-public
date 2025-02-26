import { getTranslations } from "next-intl/server";
import { blogItems } from "@/app/data";
import imgHero from "@/assets/img/blue-truck-dniprollc.png";
import HeroCTA from "@/components/HeroCTA";
import Blog from "@/components/Blog";
import SectionFullWidth from "@/components/SectionFullWidth";
import PageProps from "@/types/page";

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
  const t = await getTranslations({
    locale,
    namespace: "blog",
  });

  return (
    <>
      <SectionFullWidth image={imgHero.src}>
        <div className="flex flex-col px-4 items-center text-center justify-center h-full px-8 text-black dark:text-white">
          <h1 className="text-7xl font-header pb-4 text-oblue-700 dark:text-white">
            {t("title")}
          </h1>
          <p className="text-xl">{t("description")}</p>
        </div>
        <HeroCTA />
      </SectionFullWidth>

      <Blog blogItems={blogItems} />
    </>
  );
}
