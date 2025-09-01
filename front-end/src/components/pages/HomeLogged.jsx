import React, { useEffect, useState } from "react";
import localforage from "localforage";
import { Link, useNavigate } from "react-router-dom";
import { api } from "../../service/api";
import Spinner from "../misc/Spinner";

const HomeLogged = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-white px-6">
      <div className="max-w-4xl text-center">
        <h1 className="text-5xl md:text-6xl font-semibold text-gray-900 leading-tight">
          Buy <span className="text-blue-600">Cryptocurrency</span> with
          confidence and style.
        </h1>

        <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto">
          A premium experience for buying and selling Bitcoin, Ethereum, and
          other digital assets.
        </p>

        <div className="mt-10 flex justify-center gap-4">
          <Link to="/MarketPlace">
            <button className="bg-black text-white px-6 py-3 rounded-lg text-lg hover:bg-gray-900 transition">
              Get Started
            </button>
          </Link>

          <Link to="/About">
            <button className="border border-gray-300 px-6 py-3 rounded-lg text-lg text-gray-700 hover:bg-gray-100 transition">
              Learn More
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomeLogged;
