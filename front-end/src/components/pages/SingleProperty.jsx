import { useEffect, useState } from "react";
import ImageCarousel from "../misc/ImageCarousel";
import "./SingleProperty.css";
import { useNavigate, useParams } from "react-router-dom";

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

      navigate({
        pathname: `/Checkout/${client_secret}`,
      });
    } catch (error) {
      console.log(error);
    }
  };

  return property ? (
    <section className="single-property pt-[40px]">
      <h1 className="page-heading">{property.name}</h1>

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
        </div>

        <button onClick={handlePayment} className="buy-button">
          {isLoading && <Spinner color="border-white" />}

          {!isLoading && "Buy your NFT"}
        </button>
      </div>
    </section>
  ) : (
    <NotFound />
  );
}
