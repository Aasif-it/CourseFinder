import React from "react";

export default function CourseModal({ course, onClose }) {
  if (!course) return null;
  const img = `https://picsum.photos/seed/${encodeURIComponent(course.imageSeed)}/1200/700`;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-6">
      <div className="absolute inset-0 bg-black/50" onClick={onClose} />
      <div className="relative max-w-3xl w-full card overflow-hidden">
        <div style={{height: 260}} className="w-full">
          <img src={img} alt={course.name} className="w-full h-full object-cover" />
        </div>

        <div className="p-6">
          <div className="flex items-start justify-between">
            <div>
              <h2 className="text-2xl font-bold">{course.name}</h2>
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">{course.category} • {course.level} • {course.duration} days</p>
            </div>
            <div className="text-right">
              <button onClick={onClose} className="px-3 py-2 rounded-md border dark:border-slate-700">Close</button>
            </div>
          </div>

          <p className="mt-4 text-gray-700 dark:text-gray-300">{course.description}</p>

          <div className="mt-6 flex gap-3">
            <a className="px-4 py-2 rounded-md text-white" style={{background: "linear-gradient(90deg,#7c3aed,#06b6d4)"}} href={`https://www.google.com/search?q=${encodeURIComponent(course.name)}`} target="_blank" rel="noreferrer">Search</a>
            <button className="px-4 py-2 border rounded-md">Add to Plan</button>
          </div>
        </div>
      </div>
    </div>
  );
}
