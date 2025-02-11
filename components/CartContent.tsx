"use client";
import React, { FC } from "react";
import Section from "@/components/Section";
import SectionFullWidth from "@/components/SectionFullWidth";
import StoreItemFull from "@/components/StoreItemFull";

import imgHero from "@/assets/img/hero.jpg";
import StoreItemI from "@/types/storeItem";

const CartContent: FC<{ item: StoreItemI }> = ({ item }) => {
  console.log("item", item);

  return (
    <>
      <SectionFullWidth bgImage={imgHero.src}>
        <div className="flex flex-col px-4 items-center text-center justify-center h-full px-8 text-black dark:text-white">
          <h1 className="text-7xl font-header pb-4 text-oblue-700 dark:text-white">
            {item.title}
          </h1>
        </div>
      </SectionFullWidth>

      <Section>
        <div className="">
          <StoreItemFull {...item} />
        </div>
      </Section>

      {/* <Section title="You may like">
			<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 place-items-start gap-x-2 gap-y-6 ">
				{storeItems.map(item => {
						if (item.slug === slug) return;
						return <StoreItem key={item.slug} {...item} />
					})}
			</div>
		</Section> */}
    </>
  );
};

export default CartContent;
