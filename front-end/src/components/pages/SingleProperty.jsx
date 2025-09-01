import { useEffect, useState } from "react";
import ImageCarousel from "../misc/ImageCarousel";
import "./SingleProperty.css";
import { useNavigate, useParams } from "react-router-dom";
import { motion } from "framer-motion";

import NotFound from "../pages/NotFound";
import { api } from "../../service/api.js";
import Spinner from "../misc/Spinner.jsx";
import { usePropertyStore } from "../../store/useProperty";

export default function SingleProperty() {
  const [property, setProperty] = useState({});

  const { data } = usePropertyStore();

  const { id } = useParams();

  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    setProperty(data.find((p) => p.id == id));

    window.scrollTo(0, 0);
  }, [data, id]);

  const handlePayment = async () => {
    setIsLoading(true);

    try {
      const response = await api.post("/api/v1/stripe", {
        amount: `${property.price}00`,
      });

      const { client_secret } = response.data;

      navigate(
        {
          pathname: `/Checkout/${client_secret}`,
        },
        {
          state: property,
        }
      );
    } catch (error) {
      console.log(error);
    }
  };

  return property ? (
    <section className="single-property pt-[40px]">
      {/* Título */}
      <h1 className="text-4xl md:text-5xl font-semibold  mt-[40px] pl-[40px] text-gray-900 tracking-tight mb-12 text-start">
        {property.name}
      </h1>

      <ImageCarousel images={property.images} />

      <div className="info-button">
        <div className="infos">
          <div className="flex flex-col info1 gap-y-4 ">
            <h3>Target Profitability</h3>
            <h3 className="cl-blue num ">{property.profit}%</h3>
          </div>

          <div className="flex flex-col info2 gap-y-4">
            <h3>Objective of returned revenues</h3>
            <h3 className="cl-blue num">{property.returns}%</h3>
          </div>

          <div className="flex flex-col info3 gap-y-4">
            <h3>Valuation of the property</h3>
            <h3 className=" cl-blue num"> {property.price} ETH</h3>
          </div>

          <div className="h-[64px]  flex justify-center ">
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={handlePayment}
              disabled={isLoading}
              className="px-10 py-4 rounded-full bg-black text-white font-medium text-lg 
                     shadow-md hover:bg-gray-900"
            >
              {isLoading ? <Spinner color="border-white" /> : "Buy your NFT"}
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  ) : (
    <NotFound />
  );
}
