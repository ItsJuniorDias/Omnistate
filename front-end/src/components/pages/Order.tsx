import React, { useState, useEffect } from "react";
import { CheckCircle } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

export default function OrderPage() {
  const location = useLocation();
  const locationOrder = location.state || {};

  console.log(locationOrder, "LOCATION");

  function formatMoney(value, locale = "en-US", currency = "USD") {
    return new Intl.NumberFormat(locale, {
      style: "currency",
      currency: currency,
    }).format(value);
  }

  function formatDate(date, locale = "en-US") {
    return new Intl.DateTimeFormat(locale, {
      year: "numeric",
      month: "long",
      day: "2-digit",
    }).format(date);
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="bg-white shadow-xl rounded-2xl p-10 max-w-lg text-center">
        {/* Ícone de sucesso */}
        <CheckCircle className="w-20 h-20 text-green-500 mx-auto mb-4" />

        <h1 className="text-3xl font-bold text-gray-800 mb-2">Thank You!</h1>
        <p className="text-gray-600 mb-6">
          Your order has been placed successfully. You will receive a
          confirmation email shortly with your order details.
        </p>

        {/* Resumo pequeno da ordem */}
        <div className="bg-gray-50 rounded-xl p-4 mb-6 text-left">
          <h2 className="text-lg font-semibold text-gray-700 mb-2">
            Order Details
          </h2>
          <p className="text-sm text-gray-600">
            Order Number:{" "}
            <span className="font-medium">
              {locationOrder?.order.orderNumber}
            </span>
          </p>
          <p className="text-sm text-gray-600">
            Date: <span className="font-medium">{formatDate(new Date())}</span>
          </p>
          <p className="text-sm text-gray-600">
            Total:{" "}
            <span className="font-medium">{`${formatMoney(
              locationOrder?.order.totalPrice
            )}`}</span>
          </p>
        </div>

        {/* Botões de ação */}
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
