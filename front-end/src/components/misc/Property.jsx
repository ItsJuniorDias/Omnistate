import React from "react";
import "./Property.css";
import { Link } from "react-router-dom";

const Property = ({ property }) => {
  return (
    <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col">
      <div className="relative w-full h-52">
        <img
          src={property.images[0]}
          alt="property"
          className="w-full h-full object-cover"
        />

        <div className="absolute top-3 right-3 bg-green-100 text-green-700 text-sm font-semibold px-3 py-1 rounded-full shadow">
          {property.profit}%
        </div>
      </div>

      <div className="flex flex-col gap-4 p-5">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold text-gray-800">
            {property.name}
          </h3>
          <p className="text-blue-600 font-bold">{property.price} ETH</p>
        </div>

        <p className="text-sm text-gray-500">
          Funded by{" "}
          <span className="font-medium text-gray-700">
            {property.investors}
          </span>{" "}
          investors
        </p>

        <Link to={`/property/${property.id}`} className="w-full">
          <button className="w-full bg-blue-600 text-white text-sm font-medium px-4 py-2 rounded-xl hover:bg-blue-700 transition">
            View Details
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Property;
