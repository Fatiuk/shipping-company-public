import { ReactNode } from "react";
import { useTranslations } from "next-intl";

interface PaginatorPropsI {
  totalItems: number;
  itemsPerPage?: number;
  currentPage: number;
  onPageChange: (currentPage: number) => void;
  children: ReactNode;
}

const Paginator = ({
  totalItems,
  itemsPerPage = 6,
  currentPage,
  onPageChange,
  children,
}: PaginatorPropsI) => {
  const t = useTranslations("pagination");
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  // Calculate visible page range (show 5 page numbers at most)
  const getPageRange = () => {
    const delta = 2; // Pages to show on each side of current
    const range = [];
    const rangeWithDots = [];

    // Basic range calculation
    for (
      let i = Math.max(2, currentPage - delta);
      i <= Math.min(totalPages - 1, currentPage + delta);
      i++
    )
      range.push(i);

    // Add first page and dots
    if (range[0] > 2) {
      rangeWithDots.push(1);
      rangeWithDots.push("dots1");
    } else if (range[0] === 2) {
      rangeWithDots.push(1);
    }

    // Add calculated range
    for (const i of range) {
      rangeWithDots.push(i);
    }

    // Add last page and dots
    if (range[range.length - 1] < totalPages - 1) {
      rangeWithDots.push("dots2");
      rangeWithDots.push(totalPages);
    } else if (range[range.length - 1] === totalPages - 1) {
      rangeWithDots.push(totalPages);
    }

    return rangeWithDots;
  };

  const handlePageChange = (page: number) => {
    if (page < 1 || page > totalPages) return;
    onPageChange(page);
  };

  if (totalPages <= 1) return <div>{children}</div>;

  return (
    <div className="flex flex-col items-center">
      {children}

      <div className="flex items-center justify-center space-x-2 mt-10">
        {/* Previous button */}
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="flex items-center justify-center px-3 h-10 rounded-md border border-[--color-b400-b200] 
          bg-[--color-w-b900] text-[--color-b400-b200] 
          disabled:opacity-50 disabled:cursor-not-allowed hover:bg-[--color-b50-b800] transition-colors"
          aria-label={t("previous")}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
              clipRule="evenodd"
            />
          </svg>
        </button>

        {/* Page numbers */}
        <nav className="flex items-center space-x-1">
          {getPageRange().map((page, index) => {
            if (page === "dots1" || page === "dots2") {
              return (
                <span
                  key={`dots-${index}`}
                  className="px-2 text-[--color-b300-b200]"
                >
                  ...
                </span>
              );
            }

            return (
              <button
                key={index}
                onClick={() => handlePageChange(page as number)}
                disabled={currentPage === page}
                className={`flex items-center justify-center h-10 w-10 rounded-md transition-colors ${
                  currentPage === page
                    ? "bg-blue-600 dark:bg-accent-700 text-white font-medium"
                    : "text-blue-600 dark:text-blue-300 border border-blue-200 dark:border-blue-700 bg-white dark:bg-blue-900 hover:bg-blue-50 dark:hover:bg-blue-800"
                }`}
              >
                {page}
              </button>
            );
          })}
        </nav>

        {/* Next button */}
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="flex items-center justify-center px-3 h-10 rounded-md border border-[--color-b400-b200] 
          bg-[--color-w-b900] text-[--color-b400-b200] 
          disabled:opacity-50 disabled:cursor-not-allowed hover:bg-[--color-b50-b800] transition-colors"
          aria-label={t("next")}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>

      {/* Page indicator */}
      <div className="mt-4 text-sm text-[--color-b300-b200]">
        {t("page")} {currentPage} {t("of")} {totalPages}
      </div>
    </div>
  );
};

export default Paginator;
