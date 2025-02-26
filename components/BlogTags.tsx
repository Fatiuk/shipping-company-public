import React, { useMemo } from "react";
import { useTranslations } from "next-intl";
import BlogItemI from "@/types/blogItem";

interface BlogTagsPropsI {
  blogItems: BlogItemI[];
  blogTagSelected: string;
  onBlogTagSelect: (tag: string) => void;
}

const BlogTags = ({
  blogItems,
  blogTagSelected,
  onBlogTagSelect,
}: BlogTagsPropsI) => {
  const t = useTranslations("blog.tags");

  const tags = useMemo(() => {
    const allTags = blogItems.flatMap((item) => item.tags);
    const uniqueTags = Array.from(new Set(allTags));
    return uniqueTags.sort();
  }, [blogItems]);

  // Get count of blogs per tag for showing in the badge
  const getTagCount = (tag: string) => {
    return blogItems.filter((item) => item.tags.includes(tag)).length;
  };

  return (
    <div className="flex flex-wrap gap-2">
      <button
        onClick={() => onBlogTagSelect("all")}
        className={`px-4 py-2 rounded-full transition-all duration-300 font-medium text-sm ${
          blogTagSelected === "all"
            ? "bg-blue-600 text-white shadow-md"
            : "bg-white dark:bg-blue-900 text-blue-700 dark:text-blue-200 hover:bg-blue-50 dark:hover:bg-blue-800 border border-blue-200 dark:border-blue-800"
        }`}
      >
        {t("all")}
        <span className="ml-2 inline-flex items-center justify-center text-xs px-2 rounded-full bg-opacity-20 bg-blue-100 dark:bg-blue-700">
          {blogItems.length}
        </span>
      </button>

      {tags.map((tag) => (
        <button
          key={tag}
          onClick={() => onBlogTagSelect(tag)}
          className={`px-4 py-2 rounded-full transition-all duration-300 font-medium text-sm ${
            blogTagSelected === tag
              ? "bg-blue-600 text-white shadow-md"
              : "bg-white dark:bg-blue-900 text-blue-700 dark:text-blue-200 hover:bg-blue-50 dark:hover:bg-blue-800 border border-blue-200 dark:border-blue-800"
          }`}
        >
          {t(tag)}
          <span className="ml-2 inline-flex items-center justify-center text-xs px-2 rounded-full bg-opacity-20 bg-blue-100 dark:bg-blue-700">
            {getTagCount(tag)}
          </span>
        </button>
      ))}
    </div>
  );
};

export default BlogTags;
