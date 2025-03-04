const YelpFilterBar: React.FC<{
  filterRating: number | null;
  setFilterRating: (rating: number | null) => void;
  sortOrder: "newest" | "highest" | "most-helpful";
  setSortOrder: (order: "newest" | "highest" | "most-helpful") => void;
  onReset: () => void;
}> = ({ filterRating, setFilterRating, sortOrder, setSortOrder, onReset }) => {
  return (
    <div className="bg-[--color-w-b200] rounded-xl shadow-sm p-4 mb-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h3 className="font-b3 text-oblue-700 font-semibold mb-2">
            Filter by rating:
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

        <div className="flex flex-col sm:flex-row gap-4">
          <div>
            <h3 className="font-b3 text-oblue-700 font-semibold mb-2">
              Sort by:
            </h3>
            <select
              value={sortOrder}
              onChange={(e) => setSortOrder(e.target.value as any)}
              className="bg-transparent border border-gray-300 rounded-lg py-2 px-3 text-oblue-700 focus:border-oblue-500 focus:ring-1 focus:ring-oblue-500"
            >
              <option value="newest">Most Recent</option>
              <option value="highest">Highest Rated</option>
              <option value="most-helpful">Most Helpful</option>
            </select>
          </div>

          <button
            onClick={onReset}
            className="self-end py-2 px-4 border border-gray-300 rounded-lg text-owhite bg-oblue-600 hover:bg-oblue-900 transition-colors"
          >
            Reset Filters
          </button>
        </div>
      </div>
    </div>
  );
};

export default YelpFilterBar;
