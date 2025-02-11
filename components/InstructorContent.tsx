"use client";
import { achievements } from "@/app/data";
import GroupNinja from "@/assets/img/group-ninjas.jpg";
import HeroCTA from "@/components/HeroCTA";
import Image from "next/image";
import { Lang } from "@/types/lang";
import React, { FC } from "react";
import Section from "@/components/Section";
import SectionFullWidth from "@/components/SectionFullWidth";
import Stats from "@/components/Stats";
import { useGlobalContext } from "@/context/context";
import InstructorI from "@/types/instructor";

const InstructorContent: FC<{ item: InstructorI }> = ({ item }) => {
  const { lang } = useGlobalContext();

  return (
    <>
      <SectionFullWidth bgImage={GroupNinja.src}>
        <div className="flex flex-col px-4 items-center text-center justify-center h-full px-8 text-black dark:text-white">
          <h1 className="text-7xl font-header pb-4 text-oblue-700 dark:text-white">
            Our Instructors
          </h1>
          <p className="text-xl">
            Transform your potential with Otoshi Judo Club!
          </p>
        </div>
        <HeroCTA />
      </SectionFullWidth>

      <Section>
        <div className="flex flex-wrap sm:flex-nowrap">
          <div>
            <Image
              src={item.img}
              width={600}
              height={800}
              alt={item.name}
              className="max-w-[300px] mb-5 mr-5 rounded-xl"
            />
          </div>
          <div>
            <h2 className="pb-3 font-bold font-header text-4xl">{item.name}</h2>
            <h3 className="pb-4 font-header text-2xl">
              {item[lang as Lang].title}
            </h3>
            <p className="text-lg">{item[lang as Lang].bio}</p>
          </div>
        </div>
      </Section>

      <Section title="Achievements">
        <Stats data={achievements} />
      </Section>
    </>
  );
};

export default InstructorContent;
