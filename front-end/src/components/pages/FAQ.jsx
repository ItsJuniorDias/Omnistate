import React from "react";
import "./FAQ.css";
import how from "../../datas/faqs/how.js";
import marketPlace from "../../datas/faqs/marketPlace.js";
import propertyManagement from "../../datas/faqs/propertyManagement.js";
import accounting from "../../datas/faqs/accounting.js";
import financial from "../../datas/faqs/financial.js";
import legal from "../../datas/faqs/legal.js";
import QnA from "../misc/QnA";
import { useEffect } from "react";

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <React.Fragment>
      <section className="faq pt-16 px-6 mt-[40px] md:px-20">
        <h1 className="text-4xl md:text-5xl font-semibold text-gray-900 mb-12 text-center md:text-left">
          FAQ
        </h1>

        <div className="space-y-12">
          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">
              General Information
            </h2>
            <div className="space-y-4">
              {how.map((item, i) => (
                <QnA key={i} n={i + 1} q={item} />
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">
              Marketplace
            </h2>
            <div className="space-y-4">
              {marketPlace.map((item, i) => (
                <QnA key={i} n={i + 1} q={item} />
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">
              Property Management
            </h2>
            <div className="space-y-4">
              {propertyManagement.map((item, i) => (
                <QnA key={i} n={i + 1} q={item} />
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">
              Accounting
            </h2>
            <div className="space-y-4">
              {accounting.map((item, i) => (
                <QnA key={i} n={i + 1} q={item} />
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">
              Financial
            </h2>
            <div className="space-y-4">
              {financial.map((item, i) => (
                <QnA key={i} n={i + 1} q={item} />
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">Legal</h2>
            <div className="space-y-4">
              {legal.map((item, i) => (
                <QnA key={i} n={i + 1} q={item} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default About;
