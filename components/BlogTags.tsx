import React, { FC } from "react";
import { useTranslations } from "next-intl";
import { generateNewsTags } from "@/lib/utils";
import BlogItemI from "@/types/blogItem";

interface TagsI {
  blogItems: BlogItemI[];
  blogTagSelected: string;
  onBlogTagSelect: (tag: string) => void;
}

const BlogTags: FC<TagsI> = ({
  blogItems,
  blogTagSelected,
  onBlogTagSelect,
}) => {
  const t = useTranslations("blog");
  const tagsWithAll = generateNewsTags(blogItems, t("tags.all"));
  return (
    <>
      {tagsWithAll.map((tag) => (
        <button
          className={`rounded-xl px-2 py-1 ${
            blogTagSelected === tag
              ? "bg-oblue-600 text-white dark:bg-oaccent-900 text-white dark:text-black"
              : "hover:bg-oblue-100 dark:hover:bg-oaccent-600 text-black dark:text-white dark:hover:text-black"
          }`}
          key={tag}
          onClick={() => onBlogTagSelect(tag)}
        >
          {tag}
        </button>
      ))}
    </>
  );
};

export default BlogTags;
