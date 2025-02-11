"use client";
import HeroCTA from "@/components/HeroCTA";
import Instructors from "@/components/Instructors";
import React, { FC, ReactElement } from "react";
import Section from "@/components/Section";
import SectionFullWidth from "@/components/SectionFullWidth";
import { useGlobalContext } from "@/context/context";
import { instructors } from "@/app/data";
import GroupNinja from "@/assets/img/group-ninjas.jpg";

const AboutInstructors: FC = (): ReactElement => {
  const { lang } = useGlobalContext();

  return (
    <>
      <SectionFullWidth bgImage={GroupNinja.src}>
        <div className="flex flex-col px-4 items-center text-center justify-center h-full px-8 text-black dark:text-white">
          <h1 className="text-7xl font-header pb-4 text-oblue-700 dark:text-white">
            {lang === "fr" ? "Nos instructeurs" : "Our Instructors"}
          </h1>
          <p className="text-xl">
            {lang === "fr"
              ? "Transformez votre potentiel avec Otoshi Judo Club !"
              : "Transform your potential with Otoshi Judo Club!"}
          </p>
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

      <Section
        title={lang === "fr" ? "Instructeurs et instructrices" : "Instructors"}
      >
        <Instructors instructors={instructors} />
      </Section>
    </>
  );
};

export default AboutInstructors;
