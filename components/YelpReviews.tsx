"use client";

import { useState, useRef, useEffect } from "react";
import { useTranslations } from "next-intl";
import { gsap } from "gsap";
import { yelpReviewsData } from "@/app/data";
import YelpReviewCard from "@/components/YelpReviewCard";
import FilterBar from "@/components/YelpFilterBar";
import YelpReview from "@/types/yelpReview";

const YelpReviews: React.FC = () => {
  const t = useTranslations("yelpReviews");
  const [reviews, setReviews] = useState<YelpReview[]>(yelpReviewsData);
  const [filterRating, setFilterRating] = useState<number | null>(null);
  const [sortOrder, setSortOrder] = useState<
    "newest" | "highest" | "most-helpful"
  >("newest");
  const [showReviews, setShowReviews] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const filteredReviews = reviews
    .filter((review) => filterRating === null || review.rating === filterRating)
    .sort((a, b) => {
      if (sortOrder === "newest") {
        return new Date(b.date).getTime() - new Date(a.date).getTime();
      } else if (sortOrder === "highest") {
        return b.rating - a.rating;
      } else {
        return b.helpful - a.helpful;
      }
    });

  const handleResetFilter = () => {
    setFilterRating(null);
    setSortOrder("newest");
  };

  // Initial load - hide reviews until ready to animate
  useEffect(() => {
    setTimeout(() => {
      setShowReviews(true);
    }, 100);
  }, []);

  // Animation effect
  useEffect(() => {
    if (!sectionRef.current || !showReviews) return;

    const reviewElements = sectionRef.current.querySelectorAll(".review-card");

    gsap.set(reviewElements, {
      opacity: 0,
      y: 50,
    });

    setTimeout(() => {
      gsap.to(reviewElements, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.25, // More time between each card
        ease: "power2.out", // Smooth easing
        delay: 0.2, // delay before first card
      });
    }, 300);
  }, [showReviews, filteredReviews]);

  const averageRating =
    reviews.reduce((sum, review) => sum + review.rating, 0) / reviews.length;

  const formattedAvgRating = averageRating.toFixed(1);

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center max-w-3xl mx-auto mb-12">
        <h1 className="font-h1-h2-h3 text-[--color-b900-w] mb-4">
          {t("title")}
        </h1>
        <p className="font-b2-b3 text-[--color-b700-b100] mb-8">
          {t("description")}
        </p>

        {/* Rating overview */}
        <div className="bg-[--color-w-b200] shadow-md rounded-xl p-6 mb-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center mb-4 md:mb-0">
              <div className="text-4xl font-bold text-oblue-600">
                {formattedAvgRating}
              </div>
              <div className="ml-4">
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg
                      key={star}
                      className={`w-6 h-6 ${
                        star <= 4.7
                          ? "text-yellow-400"
                          : star <= 5
                          ? "text-yellow-200"
                          : "text-gray-300"
                      } fill-current`}
                      viewBox="0 0 20 20"
                    >
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                    </svg>
                  ))}
                </div>
                <div className="text-sm text-oblue-700 mt-1">
                  Based on {reviews.length} reviews
                </div>
              </div>
            </div>
            <div className="space-y-1 w-full md:w-2/5">
              {[5, 4, 3, 2, 1].map((rating) => {
                const count = reviews.filter((r) => r.rating === rating).length;
                const percentage = Math.round((count / reviews.length) * 100);

                return (
                  <div key={rating} className="flex items-center text-sm">
                    <span className="w-8 text-oblue-700">{rating}</span>
                    <div className="flex-1 h-2 mx-2 bg-gray-200 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-oblue-400 to-oblue-600"
                        style={{ width: `${percentage}%` }}
                      />
                    </div>
                    <span className="w-8 text-right text-oblue-700">
                      {percentage}%
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      <FilterBar
        filterRating={filterRating}
        setFilterRating={setFilterRating}
        sortOrder={sortOrder}
        setSortOrder={setSortOrder}
        onReset={handleResetFilter}
      />

      <div
        ref={sectionRef}
        className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8"
        style={{ minHeight: "200px" }} // Ensure there's enough space for content
      >
        {!showReviews ? (
          // Show loading state or nothing until ready to animate
          <div className="col-span-2 py-8 text-center">
            <div className="w-8 h-8 border-4 border-t-oblue-600 border-oblue-200 rounded-full animate-spin mx-auto"></div>
          </div>
        ) : filteredReviews.length > 0 ? (
          filteredReviews.map((review) => (
            <div key={review.id} className="review-card">
              <YelpReviewCard review={review} />
            </div>
          ))
        ) : (
          <div className="col-span-2 text-center py-12">
            <div className="text-5xl mb-4">🔍</div>
            <h3 className="font-h3-h4 text-[--color-b900-w] mb-2">
              No reviews match your filter
            </h3>
            <p className="text-[--color-b700-b200]">
              Try adjusting your filters to see more reviews
            </p>
            <button
              onClick={handleResetFilter}
              className="mt-4 px-6 py-2 bg-oblue-600 text-white rounded-lg hover:bg-oblue-700 transition-colors"
            >
              Reset Filters
            </button>
          </div>
        )}
      </div>

      {/* "Load More" button */}
      {filteredReviews.length > 0 &&
        filteredReviews.length < reviews.length && (
          <div className="text-center mt-12">
            <button className="px-8 py-3 bg-white border border-oblue-300 text-oblue-600 rounded-lg hover:bg-oblue-50 transition-colors">
              Load More Reviews
            </button>
          </div>
        )}
    </div>
  );
};

export default YelpReviews;
