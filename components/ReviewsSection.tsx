import React, { useRef, useState, useEffect } from "react";
import { LuChevronLeft, LuChevronRight } from "react-icons/lu";
import { useTranslations } from "next-intl";
import { reviewsData } from "@/app/data";
import CompactReviewCard from "@/components/ReviewCardCompact";
import ActiveLink from "@/components/shared/ActiveLink";

export const ReviewsSection: React.FC = () => {
  const t = useTranslations("reviews");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const carouselRef = useRef<HTMLDivElement>(null);

  const [itemsPerView, setItemsPerView] = useState(3);
  const [isMounted, setIsMounted] = useState(false);

  // Calculate visible items for each slide index
  const getVisibleItems = (index: number) => {
    const startIdx = index * itemsPerView;
    const endIdx = Math.min(startIdx + itemsPerView, reviewsData.length);
    return reviewsData.slice(startIdx, endIdx);
  };

  //useEffect for client-side initialization
  useEffect(() => {
    // Dynamic items per view based on screen size
    const getItemsPerView = () => {
      if (window.innerWidth < 640) return 1;
      if (window.innerWidth < 1024) return 2;
      return 3;
    };

    setItemsPerView(getItemsPerView());
    setIsMounted(true);

    // Update items per view on resize
    const handleResize = () => {
      const newItemsPerView = getItemsPerView();
      if (newItemsPerView !== itemsPerView) {
        setItemsPerView(newItemsPerView);
        // Adjust current index if needed
        setCurrentIndex((prev) =>
          Math.min(prev, Math.ceil(reviewsData.length / newItemsPerView) - 1)
        );
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [itemsPerView]);

  // Calculate totalSlides only after component is mounted
  const totalSlides = isMounted
    ? Math.ceil(reviewsData.length / itemsPerView)
    : 1; // Default value for server rendering

  // Touch handling for mobile
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.touches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (touchStart === null) return;

    const currentTouch = e.touches[0].clientX;
    const diff = touchStart - currentTouch;

    if (Math.abs(diff) > 50) {
      if (diff > 0) {
        handleNext();
      } else {
        handlePrev();
      }
      setTouchStart(null);
    }
  };

  const handleTouchEnd = () => {
    setTouchStart(null);
  };

  // Mouse drag handling
  const handleDragStart = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!carouselRef.current) return;
    const startX = e.pageX;
    const scrollLeft = carouselRef.current.scrollLeft;

    const handleDragMove = (e: MouseEvent) => {
      const x = e.pageX;
      const distance = (startX - x) * 2;
      if (carouselRef.current) {
        carouselRef.current.scrollLeft = scrollLeft + distance;
      }
    };

    const handleDragEnd = () => {
      document.removeEventListener("mousemove", handleDragMove);
      document.removeEventListener("mouseup", handleDragEnd);
    };

    document.addEventListener("mousemove", handleDragMove);
    document.addEventListener("mouseup", handleDragEnd);
  };

  const handleNext = () => {
    if (isAnimating || !isMounted) return;
    const nextIndex = (currentIndex + 1) % totalSlides;
    setCurrentIndex(nextIndex);
    setIsAnimating(true);
    setTimeout(() => setIsAnimating(false), 500);
  };

  const handlePrev = () => {
    if (isAnimating || !isMounted) return;
    const prevIndex = (currentIndex - 1 + totalSlides) % totalSlides;
    setCurrentIndex(prevIndex);
    setIsAnimating(true);
    setTimeout(() => setIsAnimating(false), 500);
  };

  useEffect(() => {
    if (!isMounted) return;

    const interval = setInterval(() => {
      if (!document.hidden && !isAnimating) {
        handleNext();
      }
    }, 5000);

    return () => clearInterval(interval);
  }, [currentIndex, isAnimating, isMounted]);

  // Conditional rendering to avoid hydration mismatch
  if (!isMounted) {
    return (
      <div className="relative overflow-hidden">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-xl sm:text-3xl md:text-4xl font-bold text-oblue-900 dark:text-white mb-3 md:mb-4">
            {t("title")}
          </h2>
        </div>
        <div className="container mx-auto px-4">
          <div className="relative group">
            {/* Placeholder loading state */}
            <div className="flex flex-wrap">
              {reviewsData.slice(0, 3).map((review) => (
                <div key={review.id} className="p-2 w-full sm:w-1/2 lg:w-1/3">
                  <CompactReviewCard review={review} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="relative overflow-hidden">
      <div className="text-center mb-8 md:mb-12">
        <h2 className="text-xl sm:text-3xl md:text-4xl font-bold text-oblue-900 dark:text-white mb-3 md:mb-4">
          {t("title")}
        </h2>
      </div>
      <div className="container mx-auto px-4">
        <div className="relative group">
          {/* Carousel Container */}
          <div
            ref={carouselRef}
            className="overflow-hidden touch-pan-y"
            onMouseDown={handleDragStart}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{
                width: `${totalSlides * 100}%`,
                transform: `translateX(-${
                  (currentIndex * 100) / totalSlides
                }%)`,
              }}
            >
              {Array.from({ length: totalSlides }).map((_, slideIndex) => {
                const visibleItems = getVisibleItems(slideIndex);

                return (
                  <div
                    key={`slide-${slideIndex}`}
                    className="flex-none"
                    style={{ width: `${100 / totalSlides}%` }}
                  >
                    <div className="flex flex-wrap">
                      {visibleItems.map((review) => (
                        <div
                          key={review.id}
                          className={`p-2 ${
                            itemsPerView === 1
                              ? "w-full"
                              : itemsPerView === 2
                              ? "w-1/2"
                              : "w-1/3"
                          }`}
                        >
                          <CompactReviewCard review={review} />
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Navigation Buttons - Hidden on mobile, visible on hover for larger screens */}
          <button
            onClick={handlePrev}
            aria-label={t("previous")}
            className="hidden md:block absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 lg:-translate-x-8
                     bg-white/90 dark:bg-oblue-800/90 rounded-full p-3 shadow-lg
                     opacity-0 group-hover:opacity-100 transform group-hover:translate-x-0
                     transition-all duration-300 hover:scale-110 z-10"
          >
            <LuChevronLeft className="w-6 h-6 text-oblue-600 dark:text-white" />
          </button>
          <button
            onClick={handleNext}
            aria-label={t("next")}
            className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 lg:translate-x-8
                     bg-white/90 dark:bg-oblue-800/90 rounded-full p-3 shadow-lg
                     opacity-0 group-hover:opacity-100 transform group-hover:translate-x-0
                     transition-all duration-300 hover:scale-110 z-10"
          >
            <LuChevronRight className="w-6 h-6 text-oblue-600 dark:text-white" />
          </button>

          {/* Progress Indicators */}
          <div className="flex justify-center gap-2 mt-4 md:mt-6">
            {Array.from({ length: totalSlides }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                aria-label={t("goTo", { slideNumber: index + 1 })}
                className={`w-2 h-2 rounded-full transition-all duration-300 
                          ${
                            currentIndex === index
                              ? "w-6 md:w-8 bg-oblue-600 dark:bg-oaccent-500"
                              : "bg-gray-300 dark:bg-gray-600 hover:bg-oblue-400 dark:hover:bg-oaccent-400"
                          }`}
              />
            ))}
          </div>
        </div>
        {/* View All Button */}
        <div className="text-center mt-8 md:mt-12">
          <ActiveLink
            href="/reviews"
            className="inline-flex items-center justify-center px-4 md:px-6 py-2 md:py-3 text-sm md:text-base font-medium 
                     text-owhite bg-oblue-500 hover:bg-oblue-700 rounded-lg
                     transition-all duration-200 shadow-lg hover:shadow-xl 
                     hover:scale-105 transform group"
          >
            {t("viewAll")}
            <svg
              className="ml-2 w-4 h-4 md:w-5 md:h-5 transform group-hover:translate-x-1 transition-transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 7l5 5m0 0l-5 5m5-5H6"
              />
            </svg>
          </ActiveLink>
        </div>
      </div>
    </div>
  );
};

export default ReviewsSection;
