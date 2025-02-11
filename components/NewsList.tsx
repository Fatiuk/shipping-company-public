import Link from "next/link";
import { useEffect, useState } from "react";
import { formatDate } from "@/components/utils";
import { Lang } from "@/types/lang";
import NewsItemI from "@/types/newsItem";
import NewsTags from "@/components/NewsTags";
import Paginator from "./Paginator";
import React, { FC } from "react";

interface NewsListI {
  newsItems: NewsItemI[];
  lang: string;
}

const NewsList: FC<NewsListI> = ({ newsItems, lang }) => {
  const [selectedTag, setSelectedTag] = useState<string>(
    lang === "fr" ? "Tout" : "All"
  );
  const [currentPage, setCurrentPage] = useState<number>(1);

  const itemsPerPage = 5;

  const newsSorted: NewsItemI[] = newsItems.sort((a, b) => {
    return new Date(b.date).getTime() - new Date(a.date).getTime();
  });

  const filteredNews = newsSorted.filter((item) => {
    const tags = item[lang as Lang].tags;
    return (
      selectedTag === (lang === "fr" ? "Tout" : "All") ||
      tags.includes(selectedTag)
    );
  });

  const paginatedNews = filteredNews.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  useEffect(() => {
    setSelectedTag(lang === "fr" ? "Tout" : "All");
  }, [lang]);

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
              lang={lang as Lang}
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
                {formatDate(news.date, lang)}
              </p>
              <Link
                className="font-bold text-lg hover:underline hover:text-oaccent-900"
                href={`/news/${news.slug}`}
              >
                {news[lang as Lang].title}
              </Link>
            </div>
          ))}
        </Paginator>
      </div>
    </>
  );
};

export default NewsList;
