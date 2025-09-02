import React from "react";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe(
  "pk_test_51S0Q1uEh4zjPHEag1ccdx44CrTXJavCokiAfWEsmA76BF35IKjdM2BOvlo3W1AZCZRfb6qZEpbl125rdTuns5xB600FfLttySw"
);

export default function StripeProvider({ children }) {
  return <Elements stripe={stripePromise}>{children}</Elements>;
}
