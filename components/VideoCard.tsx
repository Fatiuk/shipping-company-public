"use client";
import { formatDate } from "@/lib/utils";
import VideoReview from "@/types/videoReview";
import { useLocale } from "next-intl";
import { useEffect, useRef } from "react";

interface VideoCardProps extends VideoReview {
  onClick: (video: VideoReview) => void;
}

const VideoCard: React.FC<VideoCardProps> = ({
  videoId,
  title,
  author,
  rating,
  date,
  onClick,
  ...video
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const locale = useLocale();

  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const rotateX = (y - rect.height / 2) / 10;
      const rotateY = (rect.width / 2 - x) / 10;

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

  return (
    <div
      ref={cardRef}
      className="group relative bg-owhite dark:bg-oblue-800 rounded-xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-2xl cursor-pointer"
      onClick={() =>
        onClick({ videoId, title, author, rating, date, ...video })
      }
    >
      <div className="aspect-video bg-gray-200 relative overflow-hidden">
        <img
          src={`https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`}
          alt={title}
          className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors duration-300" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
            <div className="w-0 h-0 border-t-[8px] border-b-[8px] border-l-[12px] border-transparent border-l-oblue-600 ml-1" />
          </div>
        </div>
      </div>
      <div className="p-4">
        <h3 className="text-lg font-bold text-oblue-900 dark:text-owhite mb-2">
          {title}
        </h3>
        <div className="flex items-center justify-between">
          <span className="text-sm text-gray-600 dark:text-gray-300">
            {author}
          </span>
          <div className="flex items-center">
            {[...Array(rating)].map((_, i) => (
              <svg
                key={i}
                className="w-4 h-4 text-yellow-400 fill-current"
                viewBox="0 0 20 20"
              >
                <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
              </svg>
            ))}
          </div>
        </div>
        <div className="text-xs text-gray-500 dark:text-gray-400">
          {formatDate(date, locale)}
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
