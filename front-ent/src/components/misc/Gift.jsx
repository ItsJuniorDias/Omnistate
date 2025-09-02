import React from "react";
import "./Gift.css";
import building from "../../images/building.jpg";

const Gift = () => {
  return (
    <React.Fragment>
      <div className="max-w-7xl mx-auto px-6 py-16 my-[40px] flex flex-col lg:flex-row items-center gap-12 bg-gray-50 rounded-2xl shadow-lg">
        {/* Texto */}
        <div className="flex-1 text-center lg:text-left">
          <h3 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-4">
            Lots of gifts to be won!
          </h3>
          <p className="text-gray-600 text-base md:text-lg mb-6 leading-relaxed">
            Please join our group where we can talk about the various current
            and future properties. In addition, there will be prizes to be won.
          </p>

          {/* Botão centralizado */}
          <div className="flex justify-center lg:justify-center ">
            <a href="https://discord.gg">
              <button className="bg-blue-600 text-white font-medium px-6 py-3 rounded-xl hover:bg-blue-700 transition">
                Join the Discord
              </button>
            </a>
          </div>
        </div>

        {/* Imagem moderna da casa */}
        <div className="flex-1">
          <img
            src="https://images.unsplash.com/photo-1721815693498-cc28507c0ba2?q=80&w=1920&auto=format&fit=crop"
            alt="modern house"
            className="w-full h-auto rounded-xl shadow-lg object-cover"
          />
        </div>
      </div>
    </React.Fragment>
  );
};

export default Gift;
