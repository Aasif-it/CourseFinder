import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <div className="bg-white shadow-sm py-4 px-6 flex items-center justify-between relative">
      {/* Logo */}
      <Link to="/" className="text-xl font-bold text-blue-600">
        CourseFinder
      </Link>

      {/* Desktop Links */}
      <div className="hidden md:flex gap-4">
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

      {/* Mobile Hamburger */}
      <div className="md:hidden cursor-pointer" onClick={() => setOpen(!open)}>
        {open ? <FaTimes size={24} /> : <FaBars size={24} />}
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="absolute top-full left-0 w-full bg-white shadow-md flex flex-col items-center gap-4 py-4 md:hidden">
          <Link
            to="/explore"
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
            onClick={() => setOpen(false)}
          >
            Explore
          </Link>

          <Link
            to="/login"
            className="px-4 py-2 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition"
            onClick={() => setOpen(false)}
          >
            Login
          </Link>
        </div>
      )}
    </div>
  );
}
