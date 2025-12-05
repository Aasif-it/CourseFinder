import React from "react";

export default function SearchBar({ search, setSearch }) {
  return (
    <div className="mt-6">
      <div className="flex items-center gap-3">
        <div className="flex-1 relative">
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search courses, categories, or skills..."
            className="w-full input pl-12 pr-4"
            aria-label="Search courses"
          />
          <div className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500">
            🔎
          </div>
        </div>
        <div>
          <button className="accent-pill">Explore</button>
        </div>
      </div>
    </div>
  );
}
