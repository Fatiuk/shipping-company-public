import { FC } from "react";
import { getTranslations } from "next-intl/server";
import Image from "next/image";
import error404 from "@/assets/img/404.svg";
import Section from "@/components/Section";

// const Error404: FC<{ params: { locale: string } }> = async ({
//   params: { locale },
// }) => {
//   const t = await getTranslations({ locale, namespace: "notFound" });
export default async function NotFound() {
  const t = await getTranslations("notFound");

  return (
    <>
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
          <p className="font-sans text-lg">{t("message")}</p>
        </div>
      </Section>
    </>
  );
}
