import { ArrowRightIcon } from "@heroicons/react/16/solid";
import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <header className="bg-gray-800 md:sticky top-0 z-10">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <div className="title-font font-medium text-white mb-4 md:mb-0">
          <Link to="/" className="ml-3 text-xl hover:text-green-700">
            Mohd Anas
          </Link>
        </div>
        <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700 flex flex-wrap items-center text-base justify-center">
          <Link to="/projects" className="mr-5 hover:text-white text-gray-400">
            Past Work
          </Link>
          <Link to="/skills" className="mr-5 hover:text-white text-gray-400">
            Skills
          </Link>
          <Link to="/blogs" className="mr-5 hover:text-white text-gray-400">
            Blogs
          </Link>
          <Link to="/games" className="mr-5 hover:text-white text-gray-400">
            Games
          </Link>
        </nav>
        <Link
          to="/contact"
          className="inline-flex items-center bold hover:bg-gray-700  font-bold text-white bg-green-400 border-0 py-2 px-3  hover:bg-green-600 rounded text-lg ">
          Hire Me
          <ArrowRightIcon className="w-4 h-4 ml-1" />
        </Link>
      </div>
    </header>
  );
}