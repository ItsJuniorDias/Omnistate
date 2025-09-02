import React from "react";
import { useEffect } from "react";

import { api } from "../../service/api";

import "./Home.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

import Header from "../misc/Header";
import Gift from "../misc/Gift";
import Property from "../misc/Property";
import QnA from "../misc/QnA";

import vrmobile from "../../images/vrmobile.png";
import connect_wallet from "../../images/connect_wallet.png";
import home1 from "../../images/home.jpg";
import trading from "../../images/trading.jpg";
import sellhome from "../../images/sellhome.jpg";

import faq from "../../datas/faqs/faq";

import { usePropertyStore } from "../../store/useProperty";

const Home = () => {
  const { fetch, data } = usePropertyStore();

  useEffect(() => {
    window.scrollTo(0, 0);

    const handleProperty = async () => {
      try {
        const response = await api.get("/api/v1/property/all");

        fetch(response.data.data);
      } catch (error) {
        console.log(error);
      }
    };

    handleProperty();
  }, [fetch]);

  return (
    <React.Fragment>
      <Header />

      <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 text-center mt-8 mb-8 max-w-3xl mx-auto">
        How to invest and trade in real estate with RoyalCity?
      </h2>

      <div className="w-full px-6 py-10 bg-white">
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="relative rounded-2xl shadow-lg overflow-hidden group">
            <img
              src={connect_wallet}
              alt="wallet"
              className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-300"
            />

            <span className="absolute top-3 left-3 bg-blue-600 text-white font-bold text-lg px-3 py-1 rounded-lg shadow">
              01
            </span>

            <div className="absolute bottom-0 w-full bg-gradient-to-t from-black/90 to-transparent p-4 text-center">
              <p className="text-white text-base font-semibold">
                Connect your wallet to RoyalCity
              </p>
            </div>
          </div>

          <div className="relative rounded-2xl shadow-lg overflow-hidden group">
            <img
              src={home1}
              alt="home"
              className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <span className="absolute top-3 left-3 bg-blue-600 text-white font-bold text-lg px-3 py-1 rounded-lg shadow">
              02
            </span>
            <div className="absolute bottom-0 w-full bg-gradient-to-t from-black/90 to-transparent p-4 text-center">
              <p className="text-white text-base font-semibold">
                Go to the marketplaces to buy a real estate
              </p>
            </div>
          </div>

          <div className="relative rounded-2xl shadow-lg overflow-hidden group">
            <img
              src={trading}
              alt="trading"
              className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <span className="absolute top-3 left-3 bg-blue-600 text-white font-bold text-lg px-3 py-1 rounded-lg shadow">
              03
            </span>
            <div className="absolute bottom-0 w-full bg-gradient-to-t from-black/90 to-transparent p-4 text-center">
              <p className="text-white text-base font-semibold">
                You receive your rental return each month.
              </p>
            </div>
          </div>

          <div className="relative rounded-2xl shadow-lg overflow-hidden group">
            <img
              src={sellhome}
              alt="sell_home"
              className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <span className="absolute top-3 left-3 bg-blue-600 text-white font-bold text-lg px-3 py-1 rounded-lg shadow">
              04
            </span>
            <div className="absolute bottom-0 w-full bg-gradient-to-t from-black/90 to-transparent p-4 text-center">
              <p className="text-white text-base font-semibold">
                Sell your real estate whenever you want.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-16 text-center">
        <h3 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-6">
          The advantages, without the disadvantages
        </h3>
        <p className="text-gray-700 text-base md:text-lg max-w-2xl mx-auto mb-12 leading-relaxed">
          Our unique solution allows everyone to build up their own assets, from
          as little as $10.
          <br />
          Investing your savings is finally simple and really rewarding.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="flex flex-col items-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition">
            <i className="fas fa-check fa-2x text-blue-600 mb-4"></i>
            <h4 className="text-xl font-semibold text-gray-900 mb-2">
              Profitability
            </h4>
            <p className="text-gray-600 text-sm md:text-base text-center">
              We will try to base this on an average of 7%.
            </p>
          </div>

          <div className="flex flex-col items-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition">
            <i className="fas fa-check fa-2x text-blue-600 mb-4"></i>
            <h4 className="text-xl font-semibold text-gray-900 mb-2">
              Liquidity
            </h4>
            <p className="text-gray-600 text-sm md:text-base text-center">
              You buy and sell your NFTs whenever you want.
            </p>
          </div>

          <div className="flex flex-col items-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition">
            <i className="fas fa-check fa-2x text-blue-600 mb-4"></i>
            <h4 className="text-xl font-semibold text-gray-900 mb-2">
              No hidden fee
            </h4>
            <p className="text-gray-600 text-sm md:text-base text-center">
              No entry, exit or capital gains fees.
            </p>
          </div>

          <div className="flex flex-col items-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition">
            <i className="fas fa-check fa-2x text-blue-600 mb-4"></i>
            <h4 className="text-xl font-semibold text-gray-900 mb-2">
              No management
            </h4>
            <p className="text-gray-600 text-sm md:text-base text-center">
              Don't worry, RoyalCity takes care of everything.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-16 text-center">
        <h3 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-12">
          How <span className="text-blue-600">RoyalCity</span> works?
        </h3>

        <div className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-20 relative">
          <div className="flex-1 space-y-8 text-left">
            <div>
              <h4 className="text-xl font-semibold text-gray-900 mb-1">
                <span className="text-blue-600 mr-2">1.</span> A building is
                selected
              </h4>
              <p className="text-gray-600 text-sm md:text-base">
                We divide it by $10 to have a supply of NFTs on it.
              </p>
            </div>

            <div>
              <h4 className="text-xl font-semibold text-gray-900 mb-1">
                <span className="text-blue-600 mr-2">2.</span> NFTs are
                available
              </h4>
              <p className="text-gray-600 text-sm md:text-base">
                You can now buy NFTs against the property in question.
              </p>
            </div>
          </div>

          <div className="flex-shrink-0">
            <img
              src={
                "https://res.cloudinary.com/dqvujibkn/image/upload/v1756739927/65534f11-3411-4bd2-a701-46b46a1e3b8b_ltodpp.png"
              }
              alt="RoyalCity mobile"
              className="w-80 h-64 md:w-[550px] md:h-[350px] mx-auto rounded-xl"
            />
          </div>

          <div className="flex-1 space-y-8 text-left">
            <div>
              <h4 className="text-xl font-semibold text-gray-900 mb-1">
                <span className="text-blue-600 mr-2">3.</span> Receive rents
              </h4>
              <p className="text-gray-600 text-sm md:text-base">
                Each month, you will receive the rents collected on your wallet.
              </p>
            </div>

            <div>
              <h4 className="text-xl font-semibold text-gray-900 mb-1">
                <span className="text-blue-600 mr-2">4.</span> Sell or hold NFTs
              </h4>
              <p className="text-gray-600 text-sm md:text-base">
                When you decide, you can put your NFT up for sale, otherwise
                take advantage of the passive income.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-between px-6 md:px-20 mb-8">
        <h3
          className="text-2xl md:text-3xl font-semibold text-gray-900"
          id="properties"
        >
          Among our properties already financed
        </h3>
        <a
          href="/MarketPlace"
          className="mt-4 md:mt-0 text-blue-600 font-medium hover:underline transition"
        >
          View All
        </a>
      </div>

      <div className="grid grid-cols-1 px-20 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-[64px]">
        {data.map((property) => (
          <Property property={property} />
        ))}
      </div>

      <div className="max-w-4xl mx-auto px-6 py-16 text-center ">
        <h3 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-4">
          Your most frequently asked questions
        </h3>
        <p className="text-gray-600 text-base md:text-lg leading-relaxed">
          Based on your feedback, we try to answer your questions and
          expectations.
        </p>
      </div>

      <div id="faq" className="max-w-4xl mx-auto px-6 space-y-4">
        {faq.map((q, i) => (
          <QnA key={i} n={i + 1} q={q} />
        ))}
      </div>

      <Gift />
    </React.Fragment>
  );
};

export default Home;
