"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { videoData } from "@/app/data";
import VideoCard from "@/components//VideoCard";
import VideoModal from "@/components/VideoModal";
import VideoReview from "@/types/videoReview";

export const VideoReviews: React.FC = () => {
  const t = useTranslations("videoReviews");
  const [selectedVideo, setSelectedVideo] = useState<VideoReview | null>(null);

  return (
    <div className="container mx-auto text-[--color-w-b900] py-16">
      <div className="text-center mx-auto max-w-[600px]">
        <h1 className="font-h1-h2-h3 text-[--color-b900-w] mb-4">
          {t("title")}
        </h1>
        {/* <p className="font-b1-b2 text-gray-600 dark:text-gray-300">
          {t("description")}
        </p> */}
      </div>

      <div className="mt-2 md:mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
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

export default VideoReviews;
