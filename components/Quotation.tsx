"use client";
import QuotationI from "@/types/quotation";
import React, { FC } from "react";
import { useGlobalContext } from "@/context/context";

const Quotation: FC<{ quote: QuotationI }> = ({ quote }) => {
  const { lang } = useGlobalContext() ?? { lang: "en" };
  const quoteOpen = lang === "fr" ? "«" : "“";
  const quoteClose = lang === "fr" ? "»" : "”";
  return (
    <div className="mx-4">
      <p className="font-bold text-2xl text-oblue-900 dark:text-white drop-shadow-sm leading-8">
        <span className="text-4xl -ms-5 pe-1 text-black dark:text-oaccent-900 leading-8">
          {quoteOpen}
        </span>
        {quote[lang].text}{" "}
        <span className="relative text-4xl text-black dark:text-oaccent-900 leading-8">
          {quoteClose}
        </span>
      </p>
      <p className="font-bold italic text-right text-black dark:text-oaccent-900 pt-4">
        &mdash;{quote.name}, {quote[lang].title}
      </p>
    </div>
  );
};

export default Quotation;
