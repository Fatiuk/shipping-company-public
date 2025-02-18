"use client";

import VideoReview from "@/types/videoReview";
import { useTranslations } from "next-intl";

interface ModalProps {
  video: VideoReview | null;
  onClose: () => void;
}

const VideoModal: React.FC<ModalProps> = ({ video, onClose }) => {
  if (!video) return null;

  const t = useTranslations("videoReviews");

  return (
    <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
      <div className="bg-white dark:bg-oblue-800 rounded-xl p-4 w-full max-w-4xl">
        <div className="aspect-video mb-4">
          <iframe
            width="100%"
            height="100%"
            src={`https://www.youtube.com/embed/${video.videoId}`}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="rounded-lg"
          />
        </div>
        <button
          onClick={onClose}
          className="px-4 py-2 bg-oblue-600 text-white rounded-lg hover:bg-oblue-700 transition-colors"
        >
          {t("close")}
        </button>
      </div>
    </div>
  );
};

export default VideoModal;
