import React from "react";

export default function SearchBar({ search, setSearch }) {
  return (
    <div className="mt-6 px-4 md:px-0">
      <div className="flex flex-col md:flex-row items-center gap-3">
        {/* Input */}
        <div className="flex-1 relative w-full">
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search courses, categories, or skills..."
            className="w-full border border-gray-300 rounded-lg py-2 pl-12 pr-4 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            aria-label="Search courses"
          />
          <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 text-lg">
            🔎
          </div>
        </div>

        {/* Explore Button */}
        <div className="w-full md:w-auto">
          <button className="w-full md:w-auto px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
            Explore
          </button>
        </div>
      </div>
    </div>
  );
}
