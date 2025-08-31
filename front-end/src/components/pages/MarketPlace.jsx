import React from "react";
import "./About.css";
import Property from "../misc/Property";
import properties from "../../datas/properties";
// import comingSoon from "../../images/coming-soon-p.png"
import { useEffect } from "react";

const MarketPlace = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <React.Fragment>
      <section className="about pt-[40px]">
        <h1 className="page-heading">MarketPlace</h1>
        <div className="market-contents">
          <div className="flex flex-row justify-between px-20 mb-[32px]">
            <h3 id="properties">Among our properties already financed</h3>
            <h3 className="cl-blue">View All</h3>
          </div>

          <div className="grid grid-cols-1 px-20 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-[64px]">
            {properties.map((property) => (
              <Property property={property} />
            ))}
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default MarketPlace;
