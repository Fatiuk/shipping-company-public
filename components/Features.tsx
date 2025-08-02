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

    titleElements.forEach((element) => {
      (element as HTMLElement).style.height = "auto";
    });

    setTimeout(() => {
      if (titleElements.length > 0) {
        let maxHeight = 0;

        titleElements.forEach((element) => {
          const height = element.getBoundingClientRect().height;
          maxHeight = Math.max(maxHeight, height);
        });

        titleElements.forEach((element) => {
          (element as HTMLElement).style.height = `${maxHeight}px`;
        });
      }
    }, 50);
  }, [isMobile, isMounted]);

  const handleResize = useCallback(() => {
    checkMobileView();
    setTimeout(normalizeHeights, 10);
  }, [checkMobileView, normalizeHeights]);

  useEffect(() => {
    setIsMounted(true);
    checkMobileView();

    window.addEventListener("resize", handleResize);

    const timeoutId = setTimeout(normalizeHeights, 100);

    return () => {
      clearTimeout(timeoutId);
      window.removeEventListener("resize", handleResize);
    };
  }, [checkMobileView, normalizeHeights, handleResize]);

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
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-center items-start gap-4">
      {data.map((item) => (
        <Feature
          key={item.title}
          title={item.title}
          description={item.description}
        />
      ))}
    </div>
  );
};

export default Features;
