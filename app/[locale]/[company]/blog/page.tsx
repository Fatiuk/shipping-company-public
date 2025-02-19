import { getTranslations } from "next-intl/server";
import HeroCTA from "@/components/HeroCTA";
import NewsList from "@/components/NewsList";
import SectionFullWidth from "@/components/SectionFullWidth";
import { newsItems } from "@/app/data";
import GroupNinja from "@/assets/img/group-ninjas.jpg";
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
    description: t("description") || "Blog",
  };
}

export default async function Blog(props: PageProps) {
  const params = await props.params;
  const locale = params.locale;
  const t = await getTranslations({
    locale,
    namespace: "blog",
  });

  return (
    <>
      <SectionFullWidth bgImage={GroupNinja.src}>
        <div className="flex flex-col px-4 items-center text-center justify-center h-full px-8 text-black dark:text-white">
          <h1 className="text-7xl font-header pb-4 text-oblue-700 dark:text-white">
            {t("title")}
          </h1>
          <p className="text-xl">{t("description")}</p>
        </div>
        <HeroCTA />
      </SectionFullWidth>

      <NewsList newsItems={newsItems} />
    </>
  );
}
