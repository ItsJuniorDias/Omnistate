import React, { useEffect, useState } from "react";
import localforage from "localforage";
import { Link, useNavigate } from "react-router-dom";
import { api } from "../../service/api";
import Spinner from "../misc/Spinner";

const HomeLogged = () => {
  const navigate = useNavigate();

  return (
    <>
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

      <div className="bg-white py-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-semibold text-gray-900 mb-4">
            Why Choose <span className="text-blue-600">RoyalCity</span>?
          </h2>
          <p className="text-lg text-gray-600 mb-12">
            We provide everything you need to trade cryptocurrencies safely and
            easily.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="p-6 rounded-xl bg-gray-50 shadow hover:shadow-lg transition">
              <span className="text-blue-600 text-4xl">🔒</span>
              <h3 className="mt-4 text-xl font-semibold text-gray-900">
                Secure
              </h3>
              <p className="mt-2 text-gray-600">
                Industry-leading security to protect your assets and personal
                data.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-gray-50 shadow hover:shadow-lg transition">
              <span className="text-blue-600 text-4xl">⚡</span>
              <h3 className="mt-4 text-xl font-semibold text-gray-900">Fast</h3>
              <p className="mt-2 text-gray-600">
                Instant transactions with low fees and seamless experience.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-gray-50 shadow hover:shadow-lg transition">
              <span className="text-blue-600 text-4xl">🌍</span>
              <h3 className="mt-4 text-xl font-semibold text-gray-900">
                Global
              </h3>
              <p className="mt-2 text-gray-600">
                Trade anywhere, anytime with access to markets worldwide.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-semibold text-gray-900 text-center mb-4">
            Latest <span className="text-blue-600">News</span>
          </h2>
          <p className="text-lg text-gray-600 text-center mb-12">
            Stay updated with the latest trends in the crypto world.
          </p>

          <div className="space-y-12">
            {/* Post 1 */}
            <div className="flex flex-col md:flex-row items-center gap-8">
              <img
                src="https://images.unsplash.com/photo-1605792657660-596af9009e82?w=900&auto=format&fit=crop&q=60"
                alt="Crypto News"
                className="w-full md:w-1/2 h-64 object-cover rounded-xl shadow"
              />
              <div className="flex-1 text-left">
                <h3 className="text-2xl font-semibold text-gray-900">
                  Bitcoin Hits New High
                </h3>
                <p className="mt-3 text-gray-600">
                  The crypto giant reaches a record value as investors show
                  confidence and institutions join the wave.
                </p>

                <button
                  className="hover:bg-white"
                  onClick={() =>
                    navigate("/LatestNews", {
                      state: {
                        type: "bitcoin",
                      },
                    })
                  }
                >
                  <a className="mt-4 inline-block text-blue-600 font-medium hover:underline">
                    Read More →
                  </a>
                </button>
              </div>
            </div>

            {/* Post 2 */}
            <div className="flex flex-col md:flex-row-reverse items-center gap-8">
              <img
                src="https://images.unsplash.com/photo-1622632169740-85c306c57aa2?w=900&auto=format&fit=crop&q=60"
                alt="Ethereum News"
                className="w-full md:w-1/2 h-64 object-cover rounded-xl shadow"
              />
              <div className="flex-1 text-left">
                <h3 className="text-2xl font-semibold text-gray-900">
                  Ethereum 2.0 Update
                </h3>
                <p className="mt-3 text-gray-600">
                  A major upgrade that improves scalability and reduces energy
                  usage, paving the way for a sustainable future.
                </p>

                <button
                  className="hover:bg-white"
                  onClick={() =>
                    navigate("/LatestNews", {
                      state: {
                        type: "ethereum",
                      },
                    })
                  }
                >
                  <a className="mt-4 inline-block text-blue-600 font-medium hover:underline">
                    Read More →
                  </a>
                </button>
              </div>
            </div>

            {/* Post 3 */}
            <div className="flex flex-col md:flex-row items-center gap-8">
              <img
                src="https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=900&auto=format&fit=crop&q=60"
                alt="Market News"
                className="w-full md:w-1/2 h-64 object-cover rounded-xl shadow"
              />
              <div className="flex-1 text-left">
                <h3 className="text-2xl font-semibold text-gray-900">
                  Global Adoption Rising
                </h3>
                <p className="mt-3 text-gray-600">
                  More companies worldwide are now accepting crypto payments,
                  fueling mainstream adoption.
                </p>

                <button
                  className="hover:bg-white"
                  onClick={() =>
                    navigate("/LatestNews", {
                      state: {
                        type: "global",
                      },
                    })
                  }
                >
                  <a className="mt-4 inline-block text-blue-600 font-medium hover:underline">
                    Read More →
                  </a>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeLogged;
