import React, { useState } from "react";
import { BsPersonCircle } from "react-icons/bs";
import Logout from "../organism/Logout";
import logo from "./../../assest/polines.png";

const HeaderMhs = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLogoutVisible, setLogoutVisible] = useState(false);
  const nama = localStorage.getItem("userData")
    ? JSON.parse(localStorage.getItem("userData")).nama
    : null;

  const username = localStorage.getItem("userData")
    ? JSON.parse(localStorage.getItem("userData")).username
    : null;

  const handleProfileClick = () => {
    setIsOpen(!isOpen);
  };

  const handleLogoutClick = () => {
    setIsOpen(false);
    setLogoutVisible(true);
  };

  const handleConfirmLogout = () => {
    setLogoutVisible(false);
  };

  return (
    <div className="flex justify-between items-center bg-indigo-900 p-0 min-full h-[3.575rem]">
      <div className="flex items-center">
        <img src={logo} alt="Logo" className="ml-3 mr-2 w-10 h-10" />
        <div style={{ fontSize: "30px", color: "white", fontWeight: "bold" }}>
          PINTAR
        </div>
      </div>
      <div>
        <div className="relative">
          <div
            className="flex items-center  h-[3.575rem] bg-yellow-400 p-0 cursor-pointer"
            onClick={handleProfileClick}
          >
            <div className="ml-4">
              <BsPersonCircle className="text-blue-900 text-4xl" />
            </div>
            <div className="ml-4 mr-4 text-lg font-bold text-blue-900 flex flex-col">
              <div>{nama}</div>
              <div
                style={{
                  fontSize: "12px",
                  fontWeight: "bold",
                }}
              >
                {username}
              </div>
            </div>
          </div>
          {isOpen && (
            <div className="absolute top-15 right-0 bg-gray-300 shadow-md">
              <ul className="py-2 px-4">
                <li className="cursor-pointer" onClick={handleLogoutClick}>
                  Logout
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
      {isLogoutVisible && (
        <Logout
          setLogoutOn={setLogoutVisible}
          setChoice={handleConfirmLogout}
        />
      )}
    </div>
  );
};

export default HeaderMhs;
