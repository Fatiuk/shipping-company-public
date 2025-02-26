import { getTranslations } from "next-intl/server";
import { blogItems } from "@/app/data";
import HeroCTA from "@/components/HeroCTA";
import Blog from "@/components/Blog";
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
      {/* Hero Section */}
      <div className="relative w-full overflow-hidden bg-gradient-to-br from-oblue-300 to-oblue-500 dark:from-oblue-500 dark:to-oblue-700">
        <div className="sm:container mx-auto max-sm:px-4 py-8 lg:pb-28 lg:pt-16 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="mb-4 text-owhite">{t("title")}</h1>
            <p className="font-b1-b2 text-owhite mb-4 max-w-2xl mx-auto">
              {t("description")}
            </p>

            <HeroCTA />
          </div>
        </div>

        {/* Wave separator */}
        <div className="absolute bottom-0 left-0 w-full">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 120"
            className="w-full h-auto"
          >
            <path
              fill="#ffffff"
              fillOpacity="1"
              d="M0,64L48,80C96,96,192,128,288,128C384,128,480,96,576,85.3C672,75,768,85,864,96C960,107,1056,117,1152,112C1248,107,1344,85,1392,74.7L1440,64L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z"
              className="fill-[--color-w-b900]"
            ></path>
          </svg>
        </div>
      </div>

      <Blog blogItems={blogItems} />
    </>
  );
}
