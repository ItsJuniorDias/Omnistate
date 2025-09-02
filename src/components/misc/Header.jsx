import React from "react";
//import { Link } from "react-router-dom"
import "./Header.css";

const Header = () => {
  return (
    <React.Fragment>
      <header className="relative h-screen bg-[url('https://images.unsplash.com/photo-1721815693498-cc28507c0ba2?q=80&w=1920&auto=format&fit=crop')] bg-cover bg-center">
        {/* Overlay suave */}
        <div className="absolute inset-0 bg-black/40"></div>

        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">
          <h1 className="text-5xl md:text-7xl font-semibold text-white tracking-tight leading-tight max-w-4xl">
            Invest and Trade in Real Estate with Cryptocurrency
          </h1>

          <a
            href="#properties"
            className="mt-10 px-6 py-3 text-lg font-medium text-white bg-white/10 border border-white/30 rounded-xl backdrop-blur-md hover:bg-white/20 transition"
          >
            See Our Properties
          </a>
        </div>
      </header>
    </React.Fragment>
  );
};

export default Header;
