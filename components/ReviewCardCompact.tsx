import React, { useRef, useEffect } from "react";
import Image from "next/image";
import { useLocale } from "next-intl";
import { formatDate } from "@/lib/utils";
import Review from "@/types/review";

interface CompactReviewCardProps {
  review: Review;
}

const CompactReviewCard: React.FC<CompactReviewCardProps> = ({ review }) => {
  const locale = useLocale();

  const cardRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLParagraphElement>(null);

  const getAvatarUrl = (name: string) => {
    if (review.avatarUrl) return review.avatarUrl;
    const encodedName = encodeURIComponent(name);
    return `https://ui-avatars.com/api/?name=${encodedName}&background=ebd7c1&color=0a3161&bold=true`;
  };

  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const rotateX = (y - rect.height / 2) / 30;
      const rotateY = (rect.width / 2 - x) / 30;

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
      <div className="p-6">
        <div className="flex items-start justify-between mb-3">
          <div className="flex items-center">
            <Image
              src={avatarUrl}
              alt={review.author}
              width={40}
              height={40}
              className="object-cover rounded-full"
              unoptimized={!review.avatarUrl}
            />
            <div className="ml-2">
              <h3 className="font-h3-h4 text-[--color-b900-b50] text-sm">
                {review.author}
              </h3>
              <div className="flex items-center text-xs font-b4-b5">
                <span className="text-[--color-b700-b200] truncate max-w-24">
                  {review.location}
                </span>
              </div>
            </div>
          </div>
          <div className="flex ml-auto">
            {[...Array(5)].map((_, i) => (
              <svg
                key={i}
                className={`w-4 h-4 ${
                  i < review.rating ? "text-yellow-400" : "text-gray-300"
                } fill-current`}
                viewBox="0 0 20 20"
              >
                <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
              </svg>
            ))}
          </div>
        </div>

        <div className="font-b4-b5 text-[--color-b700-b200] mb-2">
          {formatDate(review.date, locale)}
        </div>

        <div className="relative">
          <p
            ref={contentRef}
            className="text-[--color-b900-w] font-b3-b4 line-clamp-3"
          >
            {review.content}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CompactReviewCard;
