"use client";
import React, { FC, useEffect, useState } from "react";
import { useLocale, useTranslations } from "next-intl";
import BlogTags from "@/components/BlogTags";
import Paginator from "@/components/Paginator";
import { formatDate } from "@/lib/utils";
import BlogItemI from "@/types/blogItem";
import ActiveLink from "./shared/ActiveLink";
import Image from "next/image";

interface BlogI {
  blogItems: BlogItemI[];
}

const Blog: FC<BlogI> = ({ blogItems }) => {
  const locale = useLocale();
  const t = useTranslations("blog");
  const [selectedTag, setSelectedTag] = useState<string>("all");
  const [currentPage, setCurrentPage] = useState<number>(1);

  const itemsPerPage = 6;

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
      {/* tags section */}
      <div className="w-full py-6 px-4 lg:px-8 relative overflow-hidden">
        <div className="mx-auto max-w-6xl relative z-10">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <h3 className="font-h3-h4 text-[--color-b700-w]">
              {t("browseTags")}
            </h3>
            <div className="flex flex-wrap gap-2">
              <BlogTags
                blogItems={blogItems}
                blogTagSelected={selectedTag}
                onBlogTagSelect={setSelectedTag}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="w-full mx-auto py-12 px-4 lg:px-8 bg-[--color-w-b900]">
        <div className="max-w-6xl mx-auto">
          {/* Card Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {paginatedBlog.map((blog) => (
              <div
                key={blog.id}
                className="group flex flex-col bg-[--color-w-b700] rounded-xl overflow-hidden shadow-md hover:shadow-lg 
                transition-all duration-300 hover:translate-y-[-4px] border border-[--color-b100-b700]"
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={blog.image || "/blog/general.webp"}
                    alt={blog.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-70" />
                  <div className="absolute bottom-4 left-4 z-10">
                    <span className="text-white b4 px-3 py-1 rounded-full bg-oaccent-600/80">
                      {formatDate(blog.date, locale)}
                    </span>
                  </div>
                </div>

                <div className="p-6 flex-grow flex flex-col">
                  <ActiveLink
                    href={`/company/blog/${blog.slug}`}
                    className="font-b1-b2 font-bold mb-2 text-[--color-b900-w] hover:text-[--color-a700-a400] transition-colors"
                  >
                    {blog.title}
                  </ActiveLink>

                  <div className="mt-3 flex flex-wrap gap-2">
                    {blog.tags.map((tag) => (
                      <span
                        key={tag}
                        className="font-b4-b5 px-2 py-1 rounded-md bg-[--blue-400] text-[--blue-50]"
                        onClick={() => setSelectedTag(tag)}
                      >
                        #{t(`tags.${tag}`)}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="px-6 pb-6 mt-auto">
                  <ActiveLink
                    href={`/company/blog/${blog.slug}`}
                    className="inline-flex items-center font-medium 
                    text-[--color-a700-a500] hover:text-[--color-a900-a700]"
                  >
                    {t("readMore")}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="ml-2 h-4 w-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      />
                    </svg>
                  </ActiveLink>
                </div>
              </div>
            ))}
          </div>

          <Paginator
            totalItems={filteredBlogItems.length}
            itemsPerPage={itemsPerPage}
            currentPage={currentPage}
            onPageChange={setCurrentPage}
          >
            <></>
          </Paginator>
        </div>
      </div>
    </>
  );
};

export default Blog;
