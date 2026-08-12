
import React, { useState } from 'react';
import { Link } from "react-router-dom";

const Navbar2 = () => {

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-black text-white px-8 py-5 mb-8">

      {/* Main Navbar */}
      <div className="flex items-center justify-between">

        {/* Logo */}
        <Link
          to="/"
          className="text-3xl font-black tracking-tighter hover:scale-110 transition"
        >
          ZERO
        </Link>


        {/* Desktop Links */}
        <div className="hidden md:flex gap-8">

          <Link
            to="/"
            className="relative text-gray-300 hover:text-white
            after:absolute after:left-0 after:-bottom-2 after:h-0.5
            after:w-0 after:bg-white hover:after:w-full
            after:transition-all after:duration-300"
          >
            Home
          </Link>

          <Link
            to="/watches"
            className="relative text-gray-300 hover:text-white
            after:absolute after:left-0 after:-bottom-2 after:h-0.5
            after:w-0 after:bg-white hover:after:w-full
            after:transition-all after:duration-300"
          >
            Smart Watches
          </Link>

          <Link
            to="/mobile"
            className="relative text-gray-300 hover:text-white
            after:absolute after:left-0 after:-bottom-2 after:h-0.5
            after:w-0 after:bg-white hover:after:w-full
            after:transition-all after:duration-300"
          >
            Mobile Accessories
          </Link>

          <Link
            to="/smartphone"
            className="relative text-gray-300 hover:text-white
            after:absolute after:left-0 after:-bottom-2 after:h-0.5
            after:w-0 after:bg-white hover:after:w-full
            after:transition-all after:duration-300"
          >
            Smartphone
          </Link>

          <Link
            to="/grosery"
            className="relative text-gray-300 hover:text-white
            after:absolute after:left-0 after:-bottom-2 after:h-0.5
            after:w-0 after:bg-white hover:after:w-full
            after:transition-all after:duration-300"
          >
            Grocery
          </Link>

        </div>


        {/* Icons */}
        <div className="flex items-center gap-5 text-xl">

          {/* Search */}
          <Link to="/search">
            <span className="cursor-pointer hover:scale-125 transition">
              🔍
            </span>
          </Link>

          {/* Wishlist */}
          <span className="cursor-pointer hover:scale-125 transition">
            ♡
          </span>

          {/* Cart */}
          <span className="cursor-pointer hover:scale-125 transition">
            🛒
          </span>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden cursor-pointer text-2xl"
          >
            {menuOpen ? "✕" : "☰"}
          </button>

        </div>

      </div>


      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden mt-5 border-t border-gray-700 pt-5">

          <div className="flex flex-col gap-5">

            <Link
              to="/"
              onClick={() => setMenuOpen(false)}
              className="text-gray-300 hover:text-white"
            >
              Home
            </Link>

            <Link
              to="/watches"
              onClick={() => setMenuOpen(false)}
              className="text-gray-300 hover:text-white"
            >
              Smart Watches
            </Link>

            <Link
              to="/mobile"
              onClick={() => setMenuOpen(false)}
              className="text-gray-300 hover:text-white"
            >
              Mobile Accessories
            </Link>

            <Link
              to="/smartphone"
              onClick={() => setMenuOpen(false)}
              className="text-gray-300 hover:text-white"
            >
              Smartphone
            </Link>

            <Link
              to="/grosery"
              onClick={() => setMenuOpen(false)}
              className="text-gray-300 hover:text-white"
            >
              Grocery
            </Link>

          </div>

        </div>
      )}

    </nav>
  );
};

export default Navbar2;
