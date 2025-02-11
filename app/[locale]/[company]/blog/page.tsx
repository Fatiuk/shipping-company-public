"use client";
import React, { FC } from "react";
import HeroCTA from "@/components/HeroCTA";
import NewsList from "@/components/NewsList";
import SectionFullWidth from "@/components/SectionFullWidth";
import { useGlobalContext } from "@/context/context";
import { newsItems } from "@/app/data";
import GroupNinja from "@/assets/img/group-ninjas.jpg";

const Blog: FC = () => {
  const { lang } = useGlobalContext();

  return (
    <>
      <SectionFullWidth bgImage={GroupNinja.src}>
        <div className="flex flex-col px-4 items-center text-center justify-center h-full px-8 text-black dark:text-white">
          <h1 className="text-7xl font-header pb-4 text-oblue-700 dark:text-white">
            {lang === "fr" ? "Nouvelles" : "News"}
          </h1>
          <p className="text-xl">
            {lang === "fr"
              ? "Transformez votre potentiel avec Otoshi Judo Club !"
              : "Transform your potential with Otoshi Judo Club!"}
          </p>
        </div>
        <HeroCTA />
      </SectionFullWidth>

      <NewsList newsItems={newsItems} lang={lang} />
    </>
  );
};

export default Blog;
