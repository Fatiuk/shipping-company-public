import { FC } from "react";
import { getTranslations, setRequestLocale } from "next-intl/server";
import Image from "next/image";
import error404 from "@/assets/img/404.svg";
import Section from "@/components/Section";
import ActiveLink from "@/components/shared/ActiveLink";

// const NotFound: FC<{
//   params: { locale: string };
// }> = async ({ params }) => {
const NotFound = async ({ params }: { params: { locale: string } }) => {
  const resolvedParams = await Promise.resolve(params);
  setRequestLocale(resolvedParams.locale);

  const t = await getTranslations({
    locale: resolvedParams.locale,
    namespace: "notFound",
  });

  return (
    <Section>
      <div className="text-center">
        <Image
          src={error404}
          width={400}
          height={400}
          alt="Two judokas performing a throw"
          className="mx-auto"
        />
        <p className="font-header text-4xl mb-4">{t("error")} 404</p>
        <p className="font-title text-2xl mb-4">{t("title")}</p>
        <p className="font-sans text-lg">{t("message")}</p>
        <ActiveLink
          href="/"
          className="flex w-full sm:w-auto mt-9 px-7 py-4 text-xl justify-center font-header capitalize border border-transparent bg-oblue-600 text-oblue-50 hover:text-black hover:bg-oblue-400 hover:cursor-pointer transition-colors duration-200 rounded-xl group"
        >
          {t("back")}
        </ActiveLink>
      </div>
    </Section>
  );
};

export default NotFound;
