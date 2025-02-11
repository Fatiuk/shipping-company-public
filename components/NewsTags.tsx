import { generateNewsTags } from "@/components/utils";
import { Lang } from "@/types/lang";
import NewsItemI from "@/types/newsItem";
import React, { FC } from "react";

interface NewsTagsI {
  newsItems: NewsItemI[];
  lang: Lang;
  newsTagSelected: string;
  onNewsTagSelect: (tag: string) => void;
}

const NewsTags: FC<NewsTagsI> = ({
  newsItems,
  lang,
  newsTagSelected,
  onNewsTagSelect,
}) => {
  const tagsWithAll = generateNewsTags(newsItems, lang);
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
