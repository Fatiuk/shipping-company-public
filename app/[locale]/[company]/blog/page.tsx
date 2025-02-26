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
      <SectionFullWidth
        image={imgHero.src}
        bgClass="bg-gradient-to-b from-owhite/75 to-oblue-100 dark:from-oblue-300/75 dark:to-oblue-500/75"
      >
        <div className="flex flex-col px-4 items-center text-center justify-center h-full px-8 text-[--foreground]">
          <h1 className="font-h1-h2 font-header pb-4 text-[--color-b700-w]">
            {t("title")}
          </h1>
          <p className="font-b1-b2">{t("description")}</p>
        </div>
        <HeroCTA />
      </SectionFullWidth>

      <Blog blogItems={blogItems} />
    </>
  );
}
