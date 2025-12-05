import React from "react";
import CourseCard from "./CourseCard";

export default function CourseList({ courses, onOpen, query }) {
  if (!courses.length) return <div className="mt-8 text-center text-gray-500 dark:text-gray-400">No courses found.</div>;
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
      {courses.map(c => <CourseCard key={c.id} course={c} onOpen={onOpen} query={query} />)}
    </div>
  );
}
