"use client";
import React, { FC, useEffect, useState } from "react";
import { useLocale } from "next-intl";
import BlogTags from "@/components/BlogTags";
import Paginator from "@/components/Paginator";
import { formatDate } from "@/lib/utils";
import BlogItemI from "@/types/blogItem";
import ActiveLink from "./shared/ActiveLink";

interface BlogI {
  blogItems: BlogItemI[];
}

const Blog: FC<BlogI> = ({ blogItems }) => {
  // const t = useTranslations("blog");
  const locale = useLocale();
  const [selectedTag, setSelectedTag] = useState<string>("all");
  const [currentPage, setCurrentPage] = useState<number>(1);

  const itemsPerPage = 5;

  const blogItemsSorted: BlogItemI[] = blogItems.sort((a, b) => {
    return new Date(b.date).getTime() - new Date(a.date).getTime();
  });

  const filteredBlogItems = blogItemsSorted.filter((item) => {
    const tags = item.tags;
    return selectedTag === "all" || tags.includes(selectedTag);
  });

  const paginatedBlog = filteredBlogItems.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  useEffect(() => {
    setCurrentPage(1);
  }, [selectedTag]);

  return (
    <>
      <div className="w-full pt-[4rem] pb-8 px-4 lg:px-0 relative overflow-hidden text-oblue-900 dark:text-white bg-owhite dark:bg-oblue-900">
        <div className="mx-auto sm:max-w-full md:max-w-4xl">
          <div className="flex flex-wrap gap-x-2 ml-[-8px]">
            <BlogTags
              blogItems={blogItems}
              blogTagSelected={selectedTag}
              onBlogTagSelect={setSelectedTag}
            />
          </div>
        </div>
      </div>

      <div className="w-full mx-auto pb-[4rem]">
        <Paginator
          totalItems={filteredBlogItems.length}
          itemsPerPage={itemsPerPage}
          currentPage={currentPage}
          onPageChange={setCurrentPage}
        >
          {paginatedBlog.map((blog) => (
            <div key={blog.id} className="pb-4 last:pb-0">
              <p className="text-oblue-600 dark:text-oaccent-700 text-md">
                {formatDate(blog.date, locale)}
              </p>
              <ActiveLink
                className="font-bold text-lg hover:underline hover:text-oaccent-900"
                href={`/company/blog/${blog.slug}`}
              >
                {blog.title}
              </ActiveLink>
            </div>
          ))}
        </Paginator>
      </div>
    </>
  );
};

export default Blog;
