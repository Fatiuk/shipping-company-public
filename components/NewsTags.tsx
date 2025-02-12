import React, { FC } from "react";
import { generateNewsTags } from "@/lib/utils";
import NewsItemI from "@/types/newsItem";

interface NewsTagsI {
  newsItems: NewsItemI[];
  newsTagSelected: string;
  onNewsTagSelect: (tag: string) => void;
}

const NewsTags: FC<NewsTagsI> = ({
  newsItems,
  newsTagSelected,
  onNewsTagSelect,
}) => {
  const tagsWithAll = generateNewsTags(newsItems);
  return (
    <>
      {tagsWithAll.map((tag) => (
        <button
          className={`rounded-xl px-2 py-1 ${
            newsTagSelected === tag
              ? "bg-oblue-600 text-white dark:bg-oaccent-900 text-white dark:text-black"
              : "hover:bg-oblue-100 dark:hover:bg-oaccent-600 text-black dark:text-white dark:hover:text-black"
          }`}
          key={tag}
          onClick={() => onNewsTagSelect(tag)}
        >
          {tag}
        </button>
      ))}
    </>
  );
};

export default NewsTags;
