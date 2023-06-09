import React from "react";
import user from "../../assest/logo pcc.png";
import { BsPersonCircle } from "react-icons/bs";

export const UserProfile = ({ toggle }) => {
  return (
    <div
      className={`flex gap-3 items-center ${
        toggle
          ? "bg-none transition-all duration-300 delay-200"
          : "bg-indigo-800 rounded-b-lg border-b-4 border-yellow-400 p-1"
      }`}
    >
      <div className="min-w-[4rem] h-[4rem]">
        <BsPersonCircle
          style={{
            color: "#FFC300",
            fontSize: "50px",
            rounded: "full",
            object: "cover",
            width: "96%",
            height: "96%",
            padding: "0.2rem",
          }}
        />
      </div>
      <div className={toggle ? "opacity-0 delay-200" : ""}>
        <h3 className="text-xl font-bold text-white">Hi, Admin!</h3>
      </div>
    </div>
  );
};

export default UserProfile;
