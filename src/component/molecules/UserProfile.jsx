import React from "react";
import logo from "../../assest/polines.png";

export const UserProfile = () => {
  return (
    <div className="bg-indigo-800 rounded-b-lg border-b-4 border-yellow-400 p-2 flex items-center">
      <div className="min-w-[4rem] h-[4rem] ml-4 mt-1">
        <img src={logo} alt="" className="object-cover w-14" />
      </div>
      <div>
        <h3 className="text-3xl font-bold text-white p-1">PINTAR</h3>
      </div>
    </div>
  );
};

export default UserProfile;
