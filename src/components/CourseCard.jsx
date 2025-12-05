import React from "react";
import LazyImage from "./LazyImage";

function highlight(text = "", q = "") {
  if (!q) return text;
  const parts = text.split(new RegExp(`(${q})`, "gi"));
  return parts.map((p, i) => p.toLowerCase() === q.toLowerCase() ? <mark key={i}>{p}</mark> : <span key={i}>{p}</span>);
}

export default function CourseCard({ course, onOpen, query = "" }) {
  const img = `https://picsum.photos/seed/${encodeURIComponent(course.imageSeed)}/640/380`;

  return (
    <article className="card rounded-xl overflow-hidden group" onClick={() => onOpen(course)} role="button" tabIndex={0}>
      <div className="relative">
        <LazyImage src={img} alt={course.name} className="h-40 w-full" />
        <div className="absolute left-4 top-4 px-3 py-1 rounded-md text-xs font-semibold text-white" style={{background: "linear-gradient(90deg,#7c3aed,#06b6d4)"}}>
          {course.level}
        </div>
        <div className="absolute right-3 bottom-3 bg-white/80 dark:bg-slate-800 px-2 py-1 rounded-md text-xs">{course.duration}d</div>
      </div>

      <div className="p-4">
        <h3 className="text-lg font-semibold">{highlight(course.name, query)}</h3>
        <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">{highlight(course.category, query)}</p>
        <p className="text-sm text-gray-700 dark:text-gray-300 mt-3 line-clamp-3">{course.description}</p>

        <div className="mt-4 flex items-center justify-between">
          <div className="text-xs text-gray-500">ID: {course.id}</div>
          <button className="px-3 py-1 text-sm rounded-md bg-gradient-to-r from-violet-500 to-cyan-400 text-white shadow-sm">View</button>
        </div>
      </div>
    </article>
  );
}
