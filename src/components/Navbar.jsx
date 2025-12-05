import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="bg-white shadow-sm py-4 px-6 flex items-center justify-between">
      <Link to="/" className="text-xl font-bold text-blue-600">CourseFinder</Link>

      <div className="flex gap-4">
        <Link 
          to="/explore"
          className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
        >
          Explore
        </Link>

        <Link 
          to="/login"
          className="px-4 py-2 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition"
        >
          Login
        </Link>
      </div>
    </div>
  );
}
