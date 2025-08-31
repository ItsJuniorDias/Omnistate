import { useEffect, useState } from "react";
import ImageCarousel from "../misc/ImageCarousel";
import "./SingleProperty.css";
import { useNavigate, useParams } from "react-router-dom";
import properties from "../../datas/properties.js";

import {
  CardElement,
  useStripe,
  useElements,
  PaymentElement,
} from "@stripe/react-stripe-js";

import NotFound from "../pages/NotFound";
import { api } from "../../service/api.js";

export default function SingleProperty() {
  const [property, setProperty] = useState({});
  const { id } = useParams();

  const navigate = useNavigate();

  const stripe = useStripe();
  const elements = useElements();

  console.log(elements, "ELEMENTS");

  useEffect(() => {
    setProperty(properties.find((p) => p.id == id));
    window.scrollTo(0, 0);
  }, [property, id]);

  const handlePayment = async () => {
    console.log(property, "PROPERTY");

    try {
      const response = await api.post("/api/v1/stripe", {
        amount: property.price,
      });

      const { client_secret } = response.data;

      console.log(client_secret, "CLIENT SECRET");

      navigate({
        pathname: `/Checkout/${client_secret}`,
      });

      // const { error } = await stripe.confirmPayment({
      //   elements,
      //   redirect: "always",
      //   clientSecret: client_secret,
      //   confirmParams: {
      //     return_url: "https://example.com/order/123/complete",
      //   },
      // });

      // console.log(error, "RESPONSE");
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
          Buy your NFT
        </button>
      </div>
    </section>
  ) : (
    <NotFound />
  );
}
