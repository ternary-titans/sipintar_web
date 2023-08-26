import React from "react";
import logo from "./../../assest/polines.png";

const CardMk = ({ text1, text2 }) => {
  return (
    <div className="w-full p-0 bg-white rounded-lg border border-gray-300 shadow-md overflow-hidden">
      <div className="flex items-center justify-center bg-gray-300 relative h-28">
        <div className="bg-gray-300"></div>
        <img src={logo} alt="Polines Logo" className="w-20 h-20 relative" />
      </div>
      <div className="mb-2 ml-2 text-left">
        <div className="text-black font-semibold">{text1}</div>
        <div className="text-gray-600">{text2}</div>
      </div>
    </div>
  );
};

export default CardMk;
