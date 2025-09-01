import React from "react";
import "./About.css";
import Property from "../misc/Property";

import { useEffect } from "react";
import { usePropertyStore } from "../../store/useProperty";
import { api } from "../../service/api";

const MarketPlace = () => {
  const { fetch, data } = usePropertyStore();

  useEffect(() => {
    const handleFetch = async () => {
      const response = await api.get("/api/v1/property/all");

      console.log(response, "RESPONSE");

      fetch(response.data.data);
    };

    handleFetch();

    window.scrollTo(0, 0);
  }, [fetch]);

  return (
    <React.Fragment>
      <section className="about pt-16 px-6 mt-[40px] md:px-20">
        <h1 className="text-4xl md:text-5xl font-semibold text-gray-900 mb-12 text-center md:text-left">
          MarketPlace
        </h1>

        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <h3
            id="properties"
            className="text-lg md:text-xl font-medium text-gray-800 mb-4 md:mb-0"
          >
            Among our properties already financed
          </h3>
          <h3 className="text-blue-600 font-medium text-lg hover:underline cursor-pointer">
            View All
          </h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {data.map((property) => (
            <Property key={property.id} property={property} />
          ))}
        </div>
      </section>
    </React.Fragment>
  );
};

export default MarketPlace;
