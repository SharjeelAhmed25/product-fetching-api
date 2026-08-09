import React from 'react'
import { Link } from "react-router-dom";

const Navbar2 = () => {
   return (
    <nav className="sticky top-0 z-50 bg-black text-white px-8 py-5 mb-8">
      <div className="flex items-center justify-between">

        {/* Logo */}
        <Link
          to="/"
          className="text-3xl font-black tracking-tighter hover:scale-110 transition"
        >
          ZERO
        </Link>

        {/* Links */}
        <div className="hidden md:flex gap-8">
 <Link
            to="/"
            className="relative text-gray-300 hover:text-white
            after:absolute after:left-0 after:-bottom-2 after:h-0.5
            after:w-0 after:bg-white hover:after:w-full
            after:transition-all after:duration-300"
          >
            home
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
            mobile asseseries
          </Link>

          <Link
            to="/smartphone"
            className="relative text-gray-300 hover:text-white
            after:absolute after:left-0 after:-bottom-2 after:h-0.5
            after:w-0 after:bg-white hover:after:w-full
            after:transition-all after:duration-300"
          >
            smartphone
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
          <span className="cursor-pointer hover:scale-125 transition">
            🔍
          </span>

          <span className="cursor-pointer hover:scale-125 transition">
            ♡
          </span>

          <span className="cursor-pointer hover:scale-125 transition">
            🛒
          </span>

          <span className="md:hidden cursor-pointer text-2xl">
            ☰
          </span>
        </div>

      </div>
    </nav>
  );
}

export default Navbar2;