import React, { FC, useCallback, useEffect } from "react";
import Feature from "@/components/Feature";
import FeatureI from "@/types/feature";

const Features: FC<{ data: FeatureI[] }> = ({ data }) => {
  const normalizeHeights = useCallback(() => {
    // Reset all heights first to get accurate measurements
    const titleElements = document.querySelectorAll("[data-feature-title]");
    titleElements.forEach((element) => {
      (element as HTMLElement).style.height = "auto";
    });

    // Small delay to ensure reset took effect
    setTimeout(() => {
      if (titleElements.length > 0) {
        // Find the maximum height among all title elements
        let maxHeight = 0;

        titleElements.forEach((element) => {
          const height = element.getBoundingClientRect().height;
          maxHeight = Math.max(maxHeight, height);
        });

        // Set all title elements to the maximum height
        titleElements.forEach((element) => {
          (element as HTMLElement).style.height = `${maxHeight}px`;
        });
      }
    }, 50);
  }, []);

  useEffect(() => {
    const timeoutId = setTimeout(normalizeHeights, 100);
    window.addEventListener("resize", normalizeHeights);

    // Cleanup
    return () => {
      clearTimeout(timeoutId);
      window.removeEventListener("resize", normalizeHeights);
    };
  }, [normalizeHeights, data]);

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
