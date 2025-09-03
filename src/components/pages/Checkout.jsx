import { useEffect, useState } from "react";

import {
  CardNumberElement,
  CardExpiryElement,
  CardCvcElement,
  useStripe,
  useElements,
  CardElement,
} from "@stripe/react-stripe-js";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import localforage from "localforage";
import { api } from "../../service/api";
import { useQueryClient } from "@tanstack/react-query";

export default function CheckoutScreen(props) {
  const { id } = useParams();

  const { state } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  console.log(state, "PROPERTY");

  const navigate = useNavigate();

  console.log(id, "PARAMS");

  const stripe = useStripe();
  const elements = useElements();
  const [loading, setLoading] = useState(false);

  function generateRefCode() {
    const prefix = "#RC";
    const randomNumber = Math.floor(10000 + Math.random() * 90000); // 5 dígitos
    return `${prefix}${randomNumber}`;
  }

  console.log(generateRefCode(), "GENERATED REF CODE");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!stripe || !elements) return;

    setLoading(true);

    const cardNumber = elements.getElement(CardNumberElement);
    const cardExpiry = elements.getElement(CardExpiryElement);
    const cardCvc = elements.getElement(CardCvcElement);

    const user = await localforage.getItem("@user");

    try {
      const { error, paymentMethod } = await stripe.createPaymentMethod({
        type: "card",
        card: cardNumber,
      });

      console.log(
        {
          paymentMethod,
          error,
        },
        "CARD ELEMENTS"
      );

      if (error) {
        alert(error.message);
      } else {
        console.log(paymentMethod);

        console.log(elements.getElement(CardElement));

        const { error, paymentIntent } = await stripe.confirmCardPayment(id, {
          payment_method: {
            card: cardNumber,
          },
        });

        console.log(paymentIntent, "PAYMENT INTENT");

        if (paymentIntent.status === "succeeded") {
          alert("Payment successful!");

          const response = await api.post(
            "/api/v1/order/new",
            {
              orderNumber: generateRefCode(),
              shippingInfo: {
                address: "123 Main Street",
                city: "São Paulo",
                state: "SP",
                country: "Brazil",
                pincode: 12345678,
                phoneNo: 5511999999999,
              },
              useREPmail: "itsjuniordias1997@gmail.com",
              orderItems: [
                {
                  name: state.name,
                  price: state.price,
                  quantity: 1,
                  image: state.images[0],
                  product: state._id,
                },
              ],
              user: user._id,
              paymentInfo: {
                id: paymentIntent.id,
                status: paymentIntent.status,
              },
              paidAt: "2025-08-31T12:00:00.000Z",
              totalPrice: state.price,
              orderStatus: "Processing",
            },
            {
              headers: {
                "Content-Type": "application/json",
              },
            }
          );

          console.log(response.data, "RESPONSE CREATE ORDER");

          navigate("/Order", {
            state: response.data,
          });
        }
      }

      setLoading(false);
    } catch (error) {
      console.log(error, "ERROR");
    }
  };

  const inputStyle = {
    style: {
      base: {
        fontSize: "16px",
        color: "#111827",
        "::placeholder": {
          color: "#9CA3AF",
        },
      },
    },
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-md mx-auto p-6 bg-white mt-[120px] shadow-lg rounded-lg flex flex-col gap-4"
    >
      <label className="font-semibold">Card Number</label>
      <div className="p-3 border border-gray-300 rounded">
        <CardNumberElement
          options={inputStyle}
          onChange={(event) => {
            if (event.error) {
              console.log(event.error.message);
            }
            console.log("Card complete?", event.complete);
          }}
        />
      </div>

      <div className="flex gap-4">
        <div className="flex-1">
          <label className="font-semibold">Expiry</label>
          <div className="p-3 border border-gray-300 rounded">
            <CardExpiryElement options={inputStyle} />
          </div>
        </div>
        <div className="flex-1">
          <label className="font-semibold">CVC</label>
          <div className="p-3 border border-gray-300 rounded">
            <CardCvcElement options={inputStyle} />
          </div>
        </div>
      </div>

      <button
        type="submit"
        disabled={!stripe || loading}
        className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 disabled:opacity-50"
      >
        {loading ? "Processing..." : "Pay"}
      </button>
    </form>
  );
}
