"use client";
import { faq } from "@/app/data";
import FAQItem from "@/components/FaqItem";
import React, { FC } from "react";
import { useGlobalContext } from "@/context/context";

const Faq: FC = () => {
  const { lang } = useGlobalContext();

  return (
    <>
      {faq.map((item) => (
        <FAQItem
          key={item.id}
          id={item.id}
          title={item[lang].title}
          description={item[lang].description()}
        />
      ))}
    </>
  );
};

export default Faq;
