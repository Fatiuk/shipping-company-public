"use client";
import { FC } from "react";
import { useTranslations } from "next-intl";
import FAQItem from "@/components/FaqItem";
import en from "@/i18n/messages/en.json";

const faq = en.home.faq.items.map((_, index) => ({
  id: index + 1,
  question: `items.${index}.question`,
  answer: `items.${index}.answer`,
}));

const Faq: FC = () => {
  const t = useTranslations("home.faq");
  return (
    <>
      {faq.map((item) => (
        <FAQItem
          key={t(item.question)}
          id={item.id}
          question={t(item.question)}
          answer={t(item.answer)}
        />
      ))}
    </>
  );
};

export default Faq;
