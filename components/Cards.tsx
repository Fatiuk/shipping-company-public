import { FC } from "react";
import { useTranslations } from "next-intl";
import Card from "@/components/Card";
import CardI from "@/types/card";

const Cards: FC<{ data: CardI[] }> = ({ data }) => {
  const t = useTranslations();

  return (
    <div className="flex flex-wrap flex-col sm:flex-row justify-center items-center gap-6">
      {data.map((item) => (
        <Card key={item.title} item={item} />
      ))}
    </div>
  );
};

export default Cards;
