import React, { FC } from "react";
import Feature from "@/components/Feature";
import FeatureI from "@/types/feature";

const Features: FC<{ data: FeatureI[] }> = ({ data }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-center items-start">
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
