import { getTranslations } from "next-intl/server";
import Team from "@/components/Team";
import PageProps from "@/types/page";

export const dynamic = 'force-static';

export async function generateStaticParams() {
  return [
    { locale: "en" },
    { locale: "fr" },
    { locale: "es" }
  ];
}

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
    <div className="container mx-auto py-16">
      <div className="text-center mx-auto max-w-[600px]">
        <h1 className="font-h1-h2-h3 text-[--color-b900-w] mb-4">
          {t("title")}
        </h1>
        <p className="font-b1-b2 text-gray-600 dark:text-gray-300">
          {t("description")}
        </p>
      </div>
      <Team />
    </div>
  );
}
