import React, { useEffect, useState } from "react";

import "./MenuBar.css";

import { Link } from "react-router-dom";

const MenuBar = () => {
  return (
    <nav className="fixed top-0 w-full z-50 bg-white/30 backdrop-blur-md shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <a
          href="/"
          className="flex items-center space-x-2 text-xl font-semibold text-gray-900"
        >
          <svg
            width="30"
            height="35"
            viewBox="0 0 30 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="15" cy="20" r="10" stroke="#006EFF" />
            <circle cx="15" cy="20" r="6" stroke="#006EFF" strokeWidth="3" />
          </svg>
          <span>RoyalCity</span>
        </a>

        {/* Menu desktop */}
        <ul className="hidden md:flex items-center space-x-6 text-gray-800">
          <li>
            <a href="/About" className="hover:text-blue-600 transition">
              About
            </a>
          </li>
          <li>
            <a href="/MarketPlace" className="hover:text-blue-600 transition">
              MarketPlace
            </a>
          </li>
          <li>
            <a href="/FAQ" className="hover:text-blue-600 transition">
              FAQ
            </a>
          </li>
          <li>
            <Link
              to="/SignIn"
              className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition"
            >
              SignIn
            </Link>
          </li>
        </ul>

        {/* Hamburger menu mobile */}
        <div className="md:hidden">
          <input type="checkbox" id="menu-btn" className="hidden peer" />
          <label
            htmlFor="menu-btn"
            className="cursor-pointer flex flex-col gap-1 w-6 h-6 justify-center"
          >
            <span className="block w-full h-0.5 bg-gray-800 transition-all peer-checked:rotate-45 peer-checked:translate-y-2"></span>
            <span className="block w-full h-0.5 bg-gray-800 transition-all peer-checked:opacity-0"></span>
            <span className="block w-full h-0.5 bg-gray-800 transition-all peer-checked:-rotate-45 peer-checked:-translate-y-2"></span>
          </label>

          <ul className="absolute top-full left-0 w-full bg-white/90 backdrop-blur-md flex flex-col items-center gap-6 py-6 transition-transform scale-0 peer-checked:scale-100 origin-top">
            <li>
              <a href="/About" className="hover:text-blue-600 transition">
                About
              </a>
            </li>
            <li>
              <a href="/MarketPlace" className="hover:text-blue-600 transition">
                MarketPlace
              </a>
            </li>
            <li>
              <a href="/FAQ" className="hover:text-blue-600 transition">
                FAQ
              </a>
            </li>
            <li>
              <Link
                to="/SignIn"
                className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition"
              >
                SignIn
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default MenuBar;
