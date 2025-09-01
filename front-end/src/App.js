import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import StripeProvider from "./context/StripeProvider";

import Layout from "./layout/Layout";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import FAQ from "./components/pages/FAQ";
import NotFound from "./components/pages/NotFound";
import MarketPlace from "./components/pages/MarketPlace";

import SignIn from "./components/pages/SignIn";
import SignUp from "./components/pages/SignUp";

import HomeLogged from "./components/pages/HomeLogged";
import Checkout from "./components/pages/Checkout";

import "./App.css";
import SingleProperty from "./components/pages/SingleProperty";
import OrderPage from "./components/pages/Order";

function App() {
  return (
    <div className="body-wrap">
      <StripeProvider>
        <Router>
          <Layout>
            <Routes>
              <Route path="/HomeLogged" element={<HomeLogged />}></Route>
              <Route path="/Checkout/:id" element={<Checkout />}></Route>
              <Route path="/Order" element={<OrderPage />}></Route>

              <Route path="/SignIn" element={<SignIn />}></Route>
              <Route path="/SignUp" element={<SignUp />}></Route>
              <Route path="/About" element={<About />}></Route>
              <Route path="/FAQ" element={<FAQ />}></Route>
              <Route path="/MarketPlace" element={<MarketPlace />}></Route>
              <Route path="/property/:id" element={<SingleProperty />}></Route>
              <Route path="/" element={<Home />}></Route>
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Layout>
        </Router>
      </StripeProvider>
    </div>
  );
}

export default App;
