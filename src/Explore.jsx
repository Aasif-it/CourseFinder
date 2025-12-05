import React, { useMemo, useState } from "react";
import courses from "./data/courses.json";

import SearchBar from "./components/SearchBar";
import FilterBar from "./components/FilterBar";
import CourseList from "./components/CourseList";
import CourseModal from "./components/CourseModal";

export default function Explore() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");
  const [selected, setSelected] = useState(null);
  const [layout, setLayout] = useState("grid");

  const categories = [...new Set(courses.map(c => c.category))];

  const filtered = courses.filter(c => {
    const matchSearch = c.name.toLowerCase().includes(search.toLowerCase());
    const matchCategory = !category || c.category === category;
    return matchSearch && matchCategory;
  });

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold">Explore Courses</h1>

      <div className="mt-6">
        <SearchBar search={search} setSearch={setSearch} />
        <FilterBar 
          categories={categories} 
          selectedCategory={category}
          setSelectedCategory={setCategory}
        />

        <div className="flex gap-2 mt-4">
          <button 
            onClick={() => setLayout("grid")}
            className={`px-3 py-1 rounded-md ${layout==="grid" ? "bg-blue-600 text-white" : "bg-white border"}`}
          >Grid</button>

          <button 
            onClick={() => setLayout("list")}
            className={`px-3 py-1 rounded-md ${layout==="list" ? "bg-blue-600 text-white" : "bg-white border"}`}
          >List</button>
        </div>
      </div>

      <CourseList courses={filtered} layout={layout} onOpen={setSelected} />

      {selected && (
        <CourseModal course={selected} onClose={() => setSelected(null)} />
      )}
    </div>
  );
}
