import React, { useEffect } from "react";
import { CheckCircle } from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";

type Order = {
  orderNumber: string;
  totalPrice: number;
};

type LocationState = {
  order: Order;
};

export default function OrderPage() {
  const location = useLocation();
  const navigate = useNavigate();

  // Cast state to typed object
  const locationState = location.state as LocationState | null;

  useEffect(() => {
    if (!locationState?.order) {
      navigate("/"); // redirect if state is missing
    }
  }, [locationState, navigate]);

  function formatMoney(value: number, locale = "en-US", currency = "USD") {
    return new Intl.NumberFormat(locale, {
      style: "currency",
      currency: currency,
    }).format(value);
  }

  function formatDate(date: Date, locale = "en-US") {
    return new Intl.DateTimeFormat(locale, {
      year: "numeric",
      month: "long",
      day: "2-digit",
    }).format(date);
  }

  if (!locationState?.order) return null; // prevent render before redirect

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="bg-white shadow-xl rounded-2xl p-10 max-w-lg text-center">
        <CheckCircle className="w-20 h-20 text-green-500 mx-auto mb-4" />

        <h1 className="text-3xl font-bold text-gray-800 mb-2">Thank You!</h1>
        <p className="text-gray-600 mb-6">
          Your order has been placed successfully. You will receive a
          confirmation email shortly with your order details.
        </p>

        <div className="bg-gray-50 rounded-xl p-4 mb-6 text-left">
          <h2 className="text-lg font-semibold text-gray-700 mb-2">
            Order Details
          </h2>
          <p className="text-sm text-gray-600">
            Order Number:{" "}
            <span className="font-medium">
              {locationState.order.orderNumber}
            </span>
          </p>
          <p className="text-sm text-gray-600">
            Date: <span className="font-medium">{formatDate(new Date())}</span>
          </p>
          <p className="text-sm text-gray-600">
            Total:{" "}
            <span className="font-medium">
              {formatMoney(locationState.order.totalPrice)}
            </span>
          </p>
        </div>

        <div className="flex justify-center gap-4">
          <Link to="/">
            <button className="px-6 py-2 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-700 transition">
              Back to Home
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
