"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { videoData } from "@/app/data";
import VideoCard from "@/components//VideoCard";
import VideoModal from "@/components/VideoModal";
import VideoReview from "@/types/videoReview";

export const VideoReviewsPage: React.FC = () => {
  const t = useTranslations("videoReviews");
  const [selectedVideo, setSelectedVideo] = useState<VideoReview | null>(null);

  return (
    <div className="container mx-auto bg-owhite dark:bg-oblue-900 py-16">
      <h1 className="text-4xl md:text-5xl font-bold text-oblue-900 dark:text-white mb-8 text-center">
        {t("title")}
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {videoData.map((video) => (
          <VideoCard key={video.id} {...video} onClick={setSelectedVideo} />
        ))}
      </div>

      <VideoModal
        video={selectedVideo}
        onClose={() => setSelectedVideo(null)}
      />
    </div>
  );
};

export default VideoReviewsPage;
