import React, { useState } from "react";
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

      <h2 className="text-[24px] mt-[32px] mb-[32px]">
        How to invest and trade in real estate with RoyalCity?
      </h2>

      <div className="w-full px-6 py-10 bg-white">
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Step 01 */}
          <div className="relative rounded-2xl shadow-lg overflow-hidden group">
            <img
              src={connect_wallet}
              alt="wallet"
              className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-300"
            />
            {/* Número */}
            <span className="absolute top-3 left-3 bg-blue-600 text-white font-bold text-lg px-3 py-1 rounded-lg shadow">
              01
            </span>
            {/* Footer sombreado */}
            <div className="absolute bottom-0 w-full bg-gradient-to-t from-black/90 to-transparent p-4 text-center">
              <p className="text-white text-base font-semibold">
                Connect your wallet to RoyalCity
              </p>
            </div>
          </div>

          {/* Step 02 */}
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

          {/* Step 03 */}
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

          {/* Step 04 */}
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

      <div className="ad">
        <h3> The advantages, without the disadvantages</h3>
        <p>
          Our unique solution allows everyone to build up their own assets, from
          as little as $10.
          <br />
          Investing your savings is finally simple and really rewarding.
        </p>

        <div className="adcontainer">
          <div className="adcontent">
            <i className="fas fa-check fa-checker" />
            <h3>Profitability</h3>
            <p>We will try to base this on an average of 7%.</p>
          </div>
          <div className="adcontent">
            <i className="fas fa-check fa-checker" />
            <h3>Liquidity</h3>
            <p>You buy and sell your NFTs whenever you want.</p>
          </div>
          <div className="adcontent">
            <i className="fas fa-check fa-checker" />
            <h3>No hidden fee</h3>
            <p>No entry, exit or capital gains fees.</p>
          </div>
          <div className="adcontent">
            <i className="fas fa-check fa-checker" />
            <h3>No management</h3>
            <p>Don't worry, RoyalCity takes care of everything.</p>
          </div>
        </div>
      </div>
      <h3>
        How <span className="cl-blue">RoyalCity</span> works?
      </h3>
      <div className="how">
        <div className="how-left">
          <h3>
            <span className="cl-blue">1.</span> A building is selected
          </h3>
          <p>We divide it by 10$ to have a supply NFTs on it.</p>
          <br />
          <h3>
            <span className="cl-blue">2.</span> A building is selected
          </h3>
          <p>You can now buy NFTs against the property in question.</p>
        </div>
        <div className="how-right">
          <h3>
            <span className="cl-blue">3.</span> A building is selected
          </h3>
          <p>
            Each month, you will receive the rents collected on your wallet.{" "}
          </p>
          <br />
          <h3>
            <span className="cl-blue">4.</span> A building is selected
          </h3>
          <p>
            When you decide, you can put your NFT up for sale, otherwise take
            advantage of the passive income.
          </p>
        </div>
        <img
          src={vrmobile}
          className="vrmobile"
          alt="RoyalCity mobile"
          style={{ width: "550px", height: "350px" }}
        />
      </div>

      <div className="flex flex-row justify-between px-20 mb-[32px]">
        <h3 id="properties">Among our properties already financed</h3>
        <h3 className="cl-blue">
          <a href="/MarketPlace">View All</a>
        </h3>
      </div>

      <div className="grid grid-cols-1 px-20 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-[64px]">
        {data.map((property) => (
          <Property property={property} />
        ))}
      </div>

      <h3>Your most frequently asked questions</h3>
      <p className="center">
        Based on your feedback, we try to answer your questions and
        expectations.
      </p>
      <div id="faq">
        {faq.map((q, i) => {
          return <QnA n={i + 1} q={q} />;
        })}
      </div>
      <Gift />
    </React.Fragment>
  );
};

export default Home;
