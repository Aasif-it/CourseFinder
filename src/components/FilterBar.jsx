import React from "react";

const categoryColors = [
  "from-pink-400 to-yellow-300",
  "from-indigo-400 to-cyan-300",
  "from-emerald-400 to-teal-300",
  "from-rose-400 to-orange-300",
  "from-violet-400 to-fuchsia-300",
];

export default function FilterBar({ categories, selectedCategory, setSelectedCategory, showFavorites, setShowFavorites }) {
  return (
    <div className="mt-4 flex items-center justify-between gap-4 flex-wrap">
      <div className="flex gap-2 flex-wrap items-center">
        <button
          onClick={() => setSelectedCategory("")}
          className={`chip ${selectedCategory === "" ? "bg-accent text-white" : "bg-white dark:bg-slate-800 border"}`}
        >
          All
        </button>

        {categories.map((c, i) => (
          <button
            key={c}
            onClick={() => setSelectedCategory(c)}
            className={`chip ${selectedCategory === c ? "text-white" : "text-gray-700 dark:text-gray-200"} ${selectedCategory === c ? "bg-gradient-to-r " + categoryColors[i % categoryColors.length] : "bg-white dark:bg-slate-800 border"}`}
          >
            {c}
          </button>
        ))}
      </div>

      <div className="flex items-center gap-3">
        <label className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300">
          <input type="checkbox" checked={showFavorites} onChange={(e) => setShowFavorites(e.target.checked)} />
          Favorites
        </label>
      </div>
    </div>
  );
}
