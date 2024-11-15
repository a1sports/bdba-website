"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="bg-gray-900 text-white p-4 w-full fixed top-0 left-0 z-50">
      <div className="container mx-auto flex flex-wrap justify-between items-center">
        <div className="text-4xl font-bold text-pink-500">B.D.B.A.</div>
        <button
          className="lg:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
        <nav
          className={`w-full lg:w-auto ${
            isMenuOpen ? "block" : "hidden"
          } lg:block mt-4 lg:mt-0`}
        >
          <ul className="flex flex-col lg:flex-row space-y-2 lg:space-y-0 lg:space-x-6 ">
            <li>
              <Link to="/" className="block py-2 hover:text-pink-500 ">
                HOME
              </Link>
            </li>
            <li>
              <Link to="/about" className="block py-2 hover:text-pink-500 ">
                ABOUT US
              </Link>
            </li>
            <li>
              <Link
                to="/gallery"
                className="block py-2 hover:text-pink-500 transition-colors"
              >
                GALLERY
              </Link>
            </li>
            <li>
              <Link
                to="/events"
                className="block py-2 hover:text-pink-500 transition-colors"
              >
                EVENTS
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
