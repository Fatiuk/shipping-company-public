import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { useLocale, useTranslations } from "next-intl";
import { formatDate } from "@/lib/utils";
import Review from "@/types/review";

interface ReviewCardProps {
  review: Review;
}

const ReviewCard: React.FC<ReviewCardProps> = ({ review }) => {
  const locale = useLocale();
  const t = useTranslations("reviews");

  const [isExpanded, setIsExpanded] = useState(false);
  const [isContentTruncated, setIsContentTruncated] = useState(false);

  const cardRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLParagraphElement>(null);
  const fullTextRef = useRef<HTMLParagraphElement>(null);

  const getAvatarUrl = (name: string) => {
    if (review.avatarUrl) return review.avatarUrl;
    const encodedName = encodeURIComponent(name); // Encode the name for the URL
    return `https://ui-avatars.com/api/?name=${encodedName}&background=ebd7c1&color=0a3161&bold=true`;
  };

  // Update the checkContentTruncation function
  const checkContentTruncation = () => {
    if (contentRef.current && fullTextRef.current) {
      const lineClampedHeight = contentRef.current.clientHeight;
      const fullTextHeight = fullTextRef.current.clientHeight;
      const shouldBeTruncated = fullTextHeight > lineClampedHeight;

      // Only update truncation state when not expanded
      if (!isExpanded) {
        setIsContentTruncated(shouldBeTruncated);
      }
    }
  };

  // Add a separate handler for expand/collapse toggle
  const handleToggleExpand = () => {
    if (isExpanded) {
      // When collapsing, first update the state then check truncation
      setIsExpanded(false);
      setTimeout(() => checkContentTruncation(), 10);
    } else {
      setIsExpanded(true);
    }
  };

  // Check truncation when expanding/collapsing
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      checkContentTruncation();
    }, 10);

    return () => clearTimeout(timeoutId);
  }, [isExpanded]);

  // Check truncation on initial render and content change
  useEffect(() => {
    // Delay to ensure DOM has rendered completely
    const timeoutId = setTimeout(() => {
      checkContentTruncation();
    }, 10);

    return () => clearTimeout(timeoutId);
  }, [review.content]);

  // resize handler with debounce
  useEffect(() => {
    let resizeTimer: NodeJS.Timeout;

    const handleResize = () => {
      // Clear previous timer
      clearTimeout(resizeTimer);

      // Set a new timer to debounce the resize event
      resizeTimer = setTimeout(() => {
        // Update width of fullTextRef to match contentRef
        if (fullTextRef.current && contentRef.current) {
          fullTextRef.current.style.width = `${contentRef.current.clientWidth}px`;
        }

        checkContentTruncation();
      }, 100);
    };

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
      clearTimeout(resizeTimer);
    };
  }, []);

  // 3D hover effect (similar to VideoCard)
  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const rotateX = (y - rect.height / 2) / 20;
      const rotateY = (rect.width / 2 - x) / 20;

      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    };

    const handleMouseLeave = () => {
      card.style.transform = "perspective(1000px) rotateX(0) rotateY(0)";
    };

    card.addEventListener("mousemove", handleMouseMove);
    card.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      card.removeEventListener("mousemove", handleMouseMove);
      card.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  const avatarUrl = getAvatarUrl(review.author);

  return (
    <div
      ref={cardRef}
      className="h-full flex flex-col overflow-hidden bg-[--color-w-b700] rounded-xl transition-all duration-300 
      shadow-md dark:shadow-light-inner hover:shadow-lg hover:dark:shadow-light-lg"
    >
      <div className="p-4 sm:p-6">
        {/* Header with user info and rating */}
        <div className="flex flex-col-reverse gap-2 sm:flex sm:gap-0 sm:flex-row items-start justify-between mb-4">
          <div className="flex items-center">
            <Image
              src={avatarUrl}
              alt={review.author}
              width={48}
              height={48}
              className="object-cover rounded-full"
              unoptimized={!review.avatarUrl} // Don't optimize external URLs from ui-avatars
            />
            <div className="ml-3">
              <h3 className="font-h3-h4 text-[--color-b900-b50]">
                {review.author}
              </h3>
              <div className="flex flex-row md:flex-col lg:flex-row items-center md:items-start lg:items-center font-b4-b5 ">
                <span className="text-[--color-b700-b200]">
                  {review.location}
                </span>
                <span className="md:hidden lg:block mx-1 text-[--color-b700-b200]">
                  •
                </span>
                <span className="text-[--color-b700-b200]">
                  {formatDate(review.date, locale)}
                </span>
              </div>
            </div>
          </div>
          <div className="flex ml-auto">
            {[...Array(5)].map((_, i) => (
              <svg
                key={i}
                className={`w-5 h-5 ${
                  i < review.rating ? "text-yellow-400" : "text-gray-300"
                } fill-current`}
                viewBox="0 0 20 20"
              >
                <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
              </svg>
            ))}
          </div>
        </div>

        {/* Review content */}
        <div className="mb-4 relative">
          {isExpanded ? (
            <p ref={contentRef} className="text-[--color-b900-w]">
              {review.content}
            </p>
          ) : (
            <p ref={contentRef} className="text-[--color-b900-w] line-clamp-3">
              {review.content}
            </p>
          )}

          {/* Hidden element to measure full text height */}
          <div
            className="absolute top-0 left-0 h-0 overflow-hidden opacity-0 pointer-events-none"
            aria-hidden="true"
          >
            <p ref={fullTextRef} className="text-[--color-b900-w]">
              {review.content}
            </p>
          </div>

          {/* Replace the button code with this */}
          {(isExpanded || isContentTruncated) && (
            <button
              onClick={handleToggleExpand}
              className="text-[--color-b500-b100] hover:text-[--color-b600-b300] text-sm font-medium mt-1"
            >
              {isExpanded ? t("reviewCard.showLess") : t("reviewCard.readMore")}
            </button>
          )}
        </div>

        {/* Review images if any */}
        {review.images && review.images.length > 0 && (
          <div className="mb-4">
            <div className="flex gap-2 overflow-x-auto pb-2">
              {review.images.map((img, index) => (
                <div
                  key={index}
                  className="relative flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden"
                >
                  <Image
                    src={img}
                    alt={`Review image ${index + 1}`}
                    width={80}
                    height={80}
                    className="object-cover"
                    style={{ width: "auto" }}
                  />
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ReviewCard;
