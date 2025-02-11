"use client";
import { FC } from "react";
import { useTranslations } from "next-intl";
import StatsItem from "@/components/StatsItem";
import StatsI from "@/types/stats";

const Stats: FC<{ data: StatsI[] }> = ({ data }) => {
  const t = useTranslations();

  return (
    <div className="flex flex-wrap gap-8 justify-center px-8">
      {data.map((stat) => (
        <StatsItem
          key={stat.id}
          targetNumber={stat.targetNumber}
          increment={stat.increment}
          suffix={stat.suffix}
          text={stat.text}
        />
      ))}
    </div>
  );
};

export default Stats;
