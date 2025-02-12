"use client";
import React, { FC, useEffect, useState } from "react";
import { useLocale, useTranslations } from "next-intl";
import Link from "next/link";
import { formatDate } from "@/components/utils";
import NewsItemI from "@/types/newsItem";
import NewsTags from "@/components/NewsTags";
import Paginator from "@/components/Paginator";

interface NewsListI {
  newsItems: NewsItemI[];
}

const NewsList: FC<NewsListI> = ({ newsItems }) => {
  const t = useTranslations("blog");
  const locale = useLocale();
  const [selectedTag, setSelectedTag] = useState<string>("all");
  const [currentPage, setCurrentPage] = useState<number>(1);

  const itemsPerPage = 5;

  const newsSorted: NewsItemI[] = newsItems.sort((a, b) => {
    return new Date(b.date).getTime() - new Date(a.date).getTime();
  });

  const filteredNews = newsSorted.filter((item) => {
    const tags = item.tags;
    return selectedTag === "all" || tags.includes(selectedTag);
  });

  const paginatedNews = filteredNews.slice(
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
            <NewsTags
              newsItems={newsItems}
              newsTagSelected={selectedTag}
              onNewsTagSelect={setSelectedTag}
            />
          </div>
        </div>
      </div>

      <div className="w-full mx-auto pb-[4rem]">
        <Paginator
          totalItems={filteredNews.length}
          itemsPerPage={itemsPerPage}
          currentPage={currentPage}
          onPageChange={setCurrentPage}
        >
          {paginatedNews.map((news) => (
            <div key={news.id} className="pb-4 last:pb-0">
              <p className="text-oblue-600 dark:text-oaccent-700 text-md">
                {formatDate(news.date, locale)}
              </p>
              <Link
                className="font-bold text-lg hover:underline hover:text-oaccent-900"
                href={`/news/${news.slug}`}
              >
                {news.title}
              </Link>
            </div>
          ))}
        </Paginator>
      </div>
    </>
  );
};

export default NewsList;
