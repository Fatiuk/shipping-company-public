import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { useLocale } from "next-intl";
import { useTranslations } from "next-intl";
import { formatDate } from "@/lib/utils";
import YelpReview from "@/types/yelpReview";

interface YelpReviewCardProps {
  review: YelpReview;
}

const YelpReviewCard: React.FC<YelpReviewCardProps> = ({ review }) => {
  const t = useTranslations("yelpReviews");
  const [isExpanded, setIsExpanded] = useState(false);
  const [isHelpfulClicked, setIsHelpfulClicked] = useState(false);
  const [helpfulCount, setHelpfulCount] = useState(review.helpful);
  const contentRef = useRef<HTMLParagraphElement>(null);
  const [isContentTruncated, setIsContentTruncated] = useState(false);
  const locale = useLocale();
  const cardRef = useRef<HTMLDivElement>(null);

  // Generate avatar URL from name if no custom avatar exists
  const getAvatarUrl = (name: string) => {
    if (review.avatarUrl) return review.avatarUrl;

    // Encode the name for the URL
    const encodedName = encodeURIComponent(name);

    return `https://ui-avatars.com/api/?name=${encodedName}&background=ebd7c1&color=0a3161&bold=true`;
  };

  // Check if content needs to be truncated
  useEffect(() => {
    if (contentRef.current) {
      const element = contentRef.current;
      setIsContentTruncated(element.scrollHeight > element.clientHeight);
    }
  }, [review.content]);

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

  const handleHelpfulClick = () => {
    if (!isHelpfulClicked) {
      setHelpfulCount((prev) => prev + 1);
      setIsHelpfulClicked(true);
    } else {
      setHelpfulCount((prev) => prev - 1);
      setIsHelpfulClicked(false);
    }
  };

  const avatarUrl = getAvatarUrl(review.author);

  return (
    <div
      ref={cardRef}
      className="bg-[--color-w-b100] rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg h-full flex flex-col"
    >
      <div className="p-6 flex flex-col flex-grow">
        {/* Header with user info and rating */}
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center">
            <div className="relative w-12 h-12 rounded-full overflow-hidden bg-oblue-100">
              <Image
                src={avatarUrl}
                alt={review.author}
                width={48}
                height={48}
                className="object-cover"
                unoptimized={!review.avatarUrl} // Don't optimize external URLs from ui-avatars
              />
            </div>
            <div className="ml-3">
              <h3 className="font-bold text-[--color-b900-w]">
                {review.author}
              </h3>
              <div className="flex items-center text-sm text-[--color-b700-b200]">
                <span>{review.location}</span>
                <span className="mx-1">•</span>
                <span>{formatDate(review.date, locale)}</span>
              </div>
            </div>
          </div>
          <div className="flex">
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
        <div className="mb-4 flex-grow">
          <p
            ref={contentRef}
            className={`text-[--color-b900-w] ${
              !isExpanded ? "line-clamp-3" : ""
            }`}
          >
            {review.content}
          </p>
          {isContentTruncated && (
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="text-oblue-500 hover:text-oblue-600 text-sm font-medium mt-1"
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
                  />
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Footer actions */}
        <div className="flex items-center justify-between mt-auto pt-3 border-t border-gray-200">
          <button
            onClick={handleHelpfulClick}
            className={`flex items-center text-sm ${
              isHelpfulClicked ? "text-oblue-600" : "text-[--color-b700-b200]"
            } hover:text-oblue-500 transition-colors`}
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              className="w-5 h-5 mr-1"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3" />
            </svg>
            {t("reviewCard.helpful", { count: helpfulCount })}
          </button>
          <div className="flex space-x-2">
            <button className="text-sm text-[--color-b700-b200] hover:text-oblue-500 transition-colors">
              {t("reviewCard.share")}
            </button>
            <span className="text-[--color-b700-b200]">•</span>
            <button className="text-sm text-[--color-b700-b200] hover:text-oblue-500 transition-colors">
              {t("reviewCard.report")}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default YelpReviewCard;
