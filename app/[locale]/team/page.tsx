import { getTranslations } from "next-intl/server";
import HeroCTA from "@/components/HeroCTA";
import Team from "@/components/Team";
import SectionFullWidth from "@/components/SectionFullWidth";
import { teamMembers } from "@/app/data";
import imgHero from "@/assets/img/blue-truck-dniprollc.png";
import PageProps from "@/types/page";

export async function generateMetadata(props: PageProps) {
  const params = await props.params;
  const locale = params.locale;

  const t = await getTranslations({
    locale,
    namespace: "team",
  });

  return {
    title: t("title") || "Team",
    description: t("description") || "Team",
  };
}

export default async function TeamPage(props: PageProps) {
  const params = await props.params;
  const locale = params.locale;
  const t = await getTranslations({
    locale,
    namespace: "team",
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

      <Team />
    </>
  );
}
