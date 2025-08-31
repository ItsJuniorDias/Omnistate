import React from "react";
//import { Link } from "react-router-dom"
import "./Header.css";

const Header = () => {
  return (
    <React.Fragment>
      <header className="bg-image">
        <div className="bg-container">
          <h1 className="text-[60px] text-white ">
            Invest and Trade in Real Estate with Cryptocurrency
          </h1>

          <a href="#properties" className="action">
            See Our Properties
          </a>
        </div>
      </header>
    </React.Fragment>
  );
};

export default Header;
