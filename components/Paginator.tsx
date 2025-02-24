import { useTranslations } from "next-intl";
import React, { ReactNode } from "react";

interface PaginatorPropsI {
  totalItems: number;
  itemsPerPage?: number;
  currentPage: number;
  onPageChange: (currentPage: number) => void;
  children: ReactNode;
}

const Paginator = ({
  totalItems,
  itemsPerPage = 5,
  currentPage,
  onPageChange,
  children,
}: PaginatorPropsI) => {
  const t = useTranslations("pagination");
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const currentPageButtonStyle =
    "rounded-md px-3 py-2 bg-oblue-600 text-white dark:bg-oaccent-900 text-white dark:text-black";
  const otherPageButtonStyle =
    "rounded-md px-3 py-2 hover:bg-oblue-100 dark:hover:bg-oaccent-600 text-black dark:text-white dark:hover:text-black";

  const handlePageChange = (page: number) => {
    if (page < 1 || page > totalPages) return;
    onPageChange(page);
  };

  const renderPageNumbers = (
    currentPage: number,
    totalPages: number,
    handlePageChange: (page: number) => void
  ) => {
    return Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
      <button
        key={page}
        onClick={() => handlePageChange(page)}
        disabled={currentPage === page}
        className={
          currentPage === page ? currentPageButtonStyle : otherPageButtonStyle
        }
      >
        {page}
      </button>
    ));
  };

  return (
    <>
      <div className="w-full pt-0 pb-[4rem] px-4 lg:px-0 relative overflow-hidden text-oblue-900 dark:text-white bg-owhite dark:bg-oblue-900">
        <div className="mx-auto sm:max-w-full md:max-w-4xl">
          {/* Render items */}
          <div>{children}</div>
          {totalItems > itemsPerPage && (
            <div className="flex flex-nowrap gap-x-4 justify-center pt-4">
              <button
                onClick={() => handlePageChange(1)}
                disabled={currentPage === 1}
                className={otherPageButtonStyle}
              >
                &laquo; {t("first")}
              </button>
              <button
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className={otherPageButtonStyle}
              >
                &lsaquo; {t("previous")}
              </button>
              {renderPageNumbers(currentPage, totalPages, handlePageChange)}
              <button
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className={otherPageButtonStyle}
              >
                {t("next")} &raquo;
              </button>
              <button
                onClick={() => handlePageChange(totalPages)}
                disabled={currentPage === totalPages}
                className={otherPageButtonStyle}
              >
                {t("last")} &rsaquo;
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Paginator;
