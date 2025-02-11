import React, { FC } from "react";
import Feature from "@/components/Feature";
import FeatureI from "@/types/feature";
import { it } from "node:test";

const Features: FC<{ data: FeatureI[] }> = ({ data }) => {
  return (
    <div className="flex flex-wrap flex-col sm:flex-row justify-center items-start">
      {data.map((item) => (
        <Feature
          key={item.title}
          src={item.src}
          title={item.title}
          description={item.description}
          alt={item.alt}
        />
      ))}
    </div>
  );
};

export default Features;
