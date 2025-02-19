import { getTranslations } from "next-intl/server";
import HeroCTA from "@/components/HeroCTA";
import Instructors from "@/components/Instructors";
import Section from "@/components/Section";
import SectionFullWidth from "@/components/SectionFullWidth";
import { instructors } from "@/app/data";
import GroupNinja from "@/assets/img/group-ninjas.jpg";
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

// const Team: FC = (): ReactElement => {
const Team = async (props: PageProps) => {
  const params = await props.params;
  const locale = params.locale;

  const t = await getTranslations({
    locale,
    namespace: "team",
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

      <Section>
        <p className="pb-4 text-lg">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed rutrum
          nulla non aliquet lobortis. Nullam eget ligula magna. Nulla facilisis
          finibus ex sit amet vestibulum. Nunc eu enim at lorem feugiat viverra.
          Integer vel orci et lectus venenatis vestibulum in non erat. Nulla
          dapibus dignissim aliquet. Cras porttitor volutpat ex vitae egestas.
          Praesent sodales viverra dui ac pulvinar. Sed non ipsum molestie,
          luctus diam eget, euismod turpis.
        </p>
        <p className="text-lg">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed rutrum
          nulla non aliquet lobortis. Nullam eget ligula magna. Nulla facilisis
          finibus ex sit amet vestibulum. Nunc eu enim at lorem feugiat viverra.
          Integer vel orci et lectus venenatis vestibulum in non erat. Nulla
          dapibus dignissim aliquet. Cras porttitor volutpat ex vitae egestas.
          Praesent sodales viverra dui ac pulvinar. Sed non ipsum molestie,
          luctus diam eget, euismod turpis.
        </p>
      </Section>

      <Section title={t("title")}>
        <Instructors instructors={instructors} />
      </Section>
    </>
  );
};

export default Team;
