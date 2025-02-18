import { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import About from "@/components/About";

export async function generateMetadata({
  params,
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const resolvedParams = await Promise.resolve(params);

  const t = await getTranslations({
    locale: resolvedParams.locale,
    namespace: "home.about",
  });

  return {
    title:
      t("title") ||
      "Diminoble ransportations is a licensed shipping company that works with fully insured and bonded partners",
    description:
      t("description") ||
      "We operate nationwide, simplifying the process of relocating various types of vehicles for our clients. With over 5 years of expertise in the relocation industry, our specialists have provided excellent service to companies, contractual agents, and private individuals. Our seamless transportation of vehicles spans all 50 states. If you're embarking on a relocation project, we recognize that numerous options are available. However, none compare to NFS transportation. We take pride in our commitment to quality service delivery and customer satisfaction. When you choose us, we ensure you comprehend the involved processes because we believe in keeping our clients informed. Providing value for money is our forte.",
  };
}

const AboutPage = async ({ params }: { params: { locale: string } }) => {
  return (
    <div className="container mx-auto py-16">
      <About />
    </div>
  );
};

export default AboutPage;
