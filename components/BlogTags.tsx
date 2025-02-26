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
        className={`b4 px-4 py-2 rounded-full transition-all duration-300 ${
          blogTagSelected === "all"
            ? "bg-oblue-500 text-white shadow-md"
            : "bg-[--color-w-b900] text-[--color-b700-b200] hover:bg-[--color-b50-b800] border border-[--color-b400-b200]"
        }`}
      >
        {t("all")}
        <span className="b4 ml-2 inline-flex items-center justify-center pt-[3px] px-[6px] rounded-xl bg-opacity-20 bg-[--color-b100-b200]">
          {blogItems.length}
        </span>
      </button>

      {tags.map((tag) => (
        <button
          key={tag}
          onClick={() => onBlogTagSelect(tag)}
          className={`b4 px-4 py-2 rounded-full transition-all duration-300 ${
            blogTagSelected === tag
              ? "bg-oblue-500 text-white shadow-md"
              : "bg-[--color-w-b900] text-[--color-b700-b200] hover:bg-[--color-b50-b800] border border-[--color-b400-b200]"
          }`}
        >
          {t(tag)}
          <span className="b4 ml-2 inline-flex items-center justify-center pt-[3px] px-[6px] rounded-xl bg-opacity-20 bg-[--color-b100-b200]">
            {getTagCount(tag)}
          </span>
        </button>
      ))}
    </div>
  );
};

export default BlogTags;
