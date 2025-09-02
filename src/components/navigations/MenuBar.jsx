import React from "react";
import "./MenuBar.css";

import { Link, useNavigate } from "react-router-dom";
import localforage from "localforage";
import { api } from "../../service/api";
import { useQuery, useQueryClient } from "@tanstack/react-query";

const MenuBar = () => {
  const navigate = useNavigate();

  const queryClient = useQueryClient();

  async function getData() {
    try {
      const user = await localforage.getItem("@user");

      if (user) {
        const response = await api.post("/api/v1/profile", {
          user: {
            id: user._id,
          },
        });
        return response.data;
      } else {
        return null;
      }
    } catch (err) {
      console.error("Error getting data:", err);
    }
  }

  const query = useQuery({ queryKey: ["user"], queryFn: getData });

  async function removeData() {
    try {
      await localforage.removeItem("@token");

      await localforage.removeItem("@user");

      queryClient.invalidateQueries({ queryKey: ["user"] });

      navigate("/");

      console.log("Data removed!");
    } catch (err) {
      console.error("Error removing data:", err);
    }
  }

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
          {!!query.data && (
            <li>
              <a href="/HomeLogged" className="hover:text-blue-600 transition">
                Home
              </a>
            </li>
          )}

          <li>
            <Link to="/About">
              <a className="hover:text-blue-600 transition">About</a>
            </Link>
          </li>

          <li>
            <Link to="/MarketPlace">
              <a className="hover:text-blue-600 transition">MarketPlace</a>
            </Link>
          </li>

          <li>
            <Link to="/FAQ">
              <a href="/FAQ" className="hover:text-blue-600 transition">
                FAQ
              </a>
            </Link>
          </li>

          {!!query?.data ? (
            <div
              className="hover:none cursor-pointer"
              onClick={() => removeData()}
            >
              <li className="flex items-center space-x-3">
                <img
                  src={query?.data?.user?.avatar?.url}
                  alt="profile"
                  className="w-10 h-10 rounded-full object-cover"
                />
                <div className="text-sm text-gray-700">
                  <p className="font-semibold">{query?.data?.user?.name}</p>
                  <p className="text-xs">{query?.data?.user?.email}</p>
                </div>
              </li>
            </div>
          ) : (
            <li>
              <Link
                to="/SignIn"
                className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition"
              >
                SignIn
              </Link>
            </li>
          )}
        </ul>

        {/* Menu mobile */}
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
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default MenuBar;
