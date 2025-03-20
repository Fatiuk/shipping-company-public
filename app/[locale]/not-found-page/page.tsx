import { getTranslations } from "next-intl/server";
import Image from "next/image";
import error404 from "@/assets/img/404.svg";
import Section from "@/components/Section";
import ActiveLink from "@/components/shared/ActiveLink";
import PageProps from "@/types/page";

export default async function NotFoundPage(props: PageProps) {
  const params = await props.params;
  const locale = params.locale;

  const t = await getTranslations({
    locale,
    namespace: "notFound",
  });

  return (
    <Section>
      <div className="w-full max-w-[500px] text-center flex flex-col items-center gap-4 mx-auto">
        <Image
          src={error404}
          width={500}
          height={500}
          alt="404 image"
          className="rounded-xl"
        />
        <h2 className="font-h2-h3">{t("error")} 404</h2>
        <h3 className="font-h3-h4">{t("title")}</h3>
        <p className="font-b1-b2">{t("message")}</p>
        <ActiveLink
          href="/"
          className="font-b1-b2 font-bold w-full px-7 py-4 capitalize bg-oblue-500 text-oblue-50 hover:bg-oblue-300 hover:cursor-pointer transition-colors duration-200 rounded-xl group"
        >
          {t("back")}
        </ActiveLink>
      </div>
    </Section>
  );
}
