import { FC, useCallback, useEffect, useState } from "react";
import Feature from "@/components/Feature";
import FeatureI from "@/types/feature";

const Features: FC<{ data: FeatureI[] }> = ({ data }) => {
  const [isMobile, setIsMobile] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  const checkMobileView = useCallback(() => {
    setIsMobile(window.innerWidth < 768);
  }, []);

  const normalizeHeights = useCallback(() => {
    if (!isMounted || isMobile) {
      return;
    }

    const titleElements = document.querySelectorAll("[data-feature-title]");

    // Reset all heights
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
  }, [isMobile, isMounted]);

  // Handle resize events
  const handleResize = useCallback(() => {
    checkMobileView();
    setTimeout(normalizeHeights, 10);
  }, [checkMobileView, normalizeHeights]);

  // Initialize component on mount
  useEffect(() => {
    setIsMounted(true);
    checkMobileView();

    window.addEventListener("resize", handleResize);

    // Initial normalization with a delay to ensure DOM is ready
    const timeoutId = setTimeout(normalizeHeights, 100);

    return () => {
      clearTimeout(timeoutId);
      window.removeEventListener("resize", handleResize);
    };
  }, [checkMobileView, normalizeHeights, handleResize]);

  // reset heights when switching between mobile/desktop
  useEffect(() => {
    if (isMounted) {
      if (isMobile) {
        const titleElements = document.querySelectorAll("[data-feature-title]");
        titleElements.forEach((element) => {
          (element as HTMLElement).style.height = "auto";
        });
      } else normalizeHeights();
    }
  }, [isMobile, normalizeHeights, isMounted]);

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
