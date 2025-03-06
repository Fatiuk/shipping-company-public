import { FC, useCallback, useEffect, useState } from "react";
import Feature from "@/components/Feature";
import FeatureI from "@/types/feature";

const Features: FC<{ data: FeatureI[] }> = ({ data }) => {
  const [isMobile, setIsMobile] = useState(false);

  const checkMobileView = useCallback(() => {
    setIsMobile(window.innerWidth < 768);
  }, []);

  const normalizeHeights = useCallback(() => {
    if (isMobile) {
      // Reset all heights to get accurate measurements
      const titleElements = document.querySelectorAll("[data-feature-title]");
      titleElements.forEach((element) => {
        (element as HTMLElement).style.height = "auto";
      });
      return;
    }

    const titleElements = document.querySelectorAll("[data-feature-title]");
    titleElements.forEach((element) => {
      (element as HTMLElement).style.height = "auto";
    });

    // Small delay to ensure reset took effect
    setTimeout(() => {
      if (titleElements.length > 0) {
        let maxHeight = 0;

        titleElements.forEach((element) => {
          const height = element.getBoundingClientRect().height;
          maxHeight = Math.max(maxHeight, height);
        });

        // Set all title elements to max height
        titleElements.forEach((element) => {
          (element as HTMLElement).style.height = `${maxHeight}px`;
        });
      }
    }, 50);
  }, []);

  useEffect(() => {
    checkMobileView();

    window.addEventListener("resize", () => {
      checkMobileView();
      normalizeHeights();
    });

    // Initial normalization with a delay to ensure DOM is ready
    const timeoutId = setTimeout(normalizeHeights, 100);

    return () => {
      clearTimeout(timeoutId);
      window.removeEventListener("resize", checkMobileView);
      window.removeEventListener("resize", normalizeHeights);
    };
  }, [normalizeHeights, checkMobileView, data]);

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
