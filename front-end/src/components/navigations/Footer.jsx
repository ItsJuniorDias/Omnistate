import React from "react";
import { Link } from "react-router-dom";
import "@fortawesome/fontawesome-free/css/all.min.css";

import "./Footer.css";

const Footer = () => {
  return (
    <footer className="bg-gray-50 pt-16 pb-8 px-6 md:px-20">
      {/* Top */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
        {/* Left */}
        <div>
          <h3 className="flex items-center text-2xl font-semibold text-blue-600 mb-4">
            <svg
              width="25"
              height="25"
              viewBox="0 0 25 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="mr-2"
            >
              <circle cx="9" cy="16" r="8" stroke="#006EFF" />
              <circle cx="9" cy="16" r="4" stroke="#006EFF" strokeWidth="3" />
            </svg>
            RoyalCity
          </h3>
          <p className="text-gray-600 text-sm">
            The real estate investment that uses blockchain to revolutionise the
            sector from as little as $10.
          </p>
        </div>

        {/* Middle */}
        <div className="flex justify-between">
          <div>
            <h4 className="text-gray-900 font-semibold mb-3">Sitemap</h4>
            <ul className="space-y-2 text-gray-600 text-sm">
              <li>
                <Link to="/About" className="hover:text-blue-600 transition">
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/MarketPlace"
                  className="hover:text-blue-600 transition"
                >
                  MarketPlace
                </Link>
              </li>
              <li>
                <Link to="/FAQ" className="hover:text-blue-600 transition">
                  FAQ
                </Link>
              </li>
              <li>
                <Link to="/Blogs" className="hover:text-blue-600 transition">
                  Blogs
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-gray-900 font-semibold mb-3">Informations</h4>
            <ul className="space-y-2 text-gray-600 text-sm">
              <li>
                <a
                  href="https://REP.gitbook.io/whitepaper"
                  className="hover:text-blue-600 transition"
                >
                  Whitepaper
                </a>
              </li>
              <li>
                <a href="/FAQ" className="hover:text-blue-600 transition">
                  Legal Notice
                </a>
              </li>
              <li>
                <a href="/FAQ" className="hover:text-blue-600 transition">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Right (opcional) */}
        <div></div>
      </div>

      {/* Bottom */}
      <div className="flex flex-col md:flex-row items-center justify-between border-t border-gray-200 pt-6">
        <p className="text-gray-500 text-sm mb-4 md:mb-0">
          &copy; {new Date().getFullYear()} RoyalCity. All rights reserved.
        </p>
        <ul className="flex space-x-4">
          <li>
            <a
              href="https://www.facebook.com"
              className="text-gray-500 hover:text-blue-600 transition"
            >
              <i className="fab fa-facebook-f"></i>
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com"
              className="text-gray-500 hover:text-pink-500 transition"
            >
              <i className="fab fa-instagram"></i>
            </a>
          </li>
          <li>
            <a
              href="https://twitter.com"
              className="text-gray-500 hover:text-blue-400 transition"
            >
              <i className="fab fa-twitter"></i>
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com"
              className="text-gray-500 hover:text-blue-700 transition"
            >
              <i className="fab fa-linkedin-in"></i>
            </a>
          </li>
          <li>
            <a
              href="https://discord.gg"
              className="text-gray-500 hover:text-indigo-600 transition"
            >
              <i className="fab fa-discord"></i>
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
