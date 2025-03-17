import { useTranslations } from "next-intl";

type SortOrder = "newest" | "highest" | "most-helpful";

interface FilterBarProps {
  filterRating: number | null;
  setFilterRating: (rating: number | null) => void;
  sortOrder: SortOrder;
  setSortOrder: (order: SortOrder) => void;
  onReset: () => void;
}

const ReviewFilterBar: React.FC<FilterBarProps> = ({
  filterRating,
  setFilterRating,
  sortOrder,
  setSortOrder,
  onReset,
}) => {
  const t = useTranslations("reviews");

  const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value as SortOrder;
    setSortOrder(value);
  };

  return (
    <div className="bg-[--color-w-b200] rounded-xl shadow-sm p-4 mb-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h3 className="font-b3 text-oblue-700 font-semibold mb-2">
            {t("filter.byRating")}
          </h3>
          <div className="flex gap-2">
            {[5, 4, 3, 2, 1].map((rating) => (
              <button
                key={rating}
                onClick={() =>
                  setFilterRating(filterRating === rating ? null : rating)
                }
                className={`flex items-center justify-center w-10 h-10 rounded-full border ${
                  filterRating === rating
                    ? "bg-oblue-600 text-white border-oblue-600"
                    : "bg-transparent text-oblue-700 border-gray-300"
                } transition-colors`}
              >
                {rating}
              </button>
            ))}
          </div>
        </div>

        <div className="flex sm:flex-row gap-4">
          <div>
            <h3 className="font-b3 text-oblue-700 font-semibold mb-2">
              {t("filter.sortBy")}
            </h3>
            <select
              value={sortOrder}
              onChange={handleSortChange}
              className="bg-transparent border border-gray-300 rounded-lg py-2 px-3 text-oblue-700 focus:outline-none"
            >
              <option value="newest">{t("filter.sortOptions.newest")}</option>
              <option value="highest">{t("filter.sortOptions.highest")}</option>
              {/* <option value="most-helpful">
                {t("filter.sortOptions.mostHelpful")}
              </option> */}
            </select>
          </div>

          <button
            onClick={onReset}
            className="self-end py-2 px-2 sm:px-4 border border-gray-300 rounded-lg text-owhite bg-oblue-600 hover:bg-oblue-900 transition-colors"
          >
            {t("filter.reset")}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ReviewFilterBar;
