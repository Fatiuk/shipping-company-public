import { FC, ReactElement, useEffect, useState } from "react";
import { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";

export async function generateMetadata({
  params,
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const resolvedParams = await Promise.resolve(params);

  const t = await getTranslations({
    locale: resolvedParams.locale,
    namespace: "howItWorks",
  });

  return {
    title: t("title") || "How it works",
    description: t("description") || "How it works",
  };
}

const HowItWorks = async ({ params }: { params: { locale: string } }) => {
  const resolvedParams = await Promise.resolve(params);

  setRequestLocale(resolvedParams.locale);
  const t = await getTranslations({
    locale: resolvedParams.locale,
    namespace: "howItWorks",
  });

  return (
    <div className="m-8">
      <p>How it works</p>
    </div>
  );
};

export default HowItWorks;
