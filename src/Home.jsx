import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center px-6">
      <div className="text-center max-w-2xl">
        <h1 className="text-4xl font-bold text-blue-600 mb-3">
          Find the Best Courses For Your Career
        </h1>

        <p className="text-gray-600 mb-6">
          Explore curated courses designed to help you grow faster.
        </p>

        <Link
          to="/explore"
          className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
        >
          Explore Courses
        </Link>

        <img
          src="https://picsum.photos/1000/400"
          className="mt-10 rounded-xl shadow-lg"
        />
      </div>
    </div>
  );
}
