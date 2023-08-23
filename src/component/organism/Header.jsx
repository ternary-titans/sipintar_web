import React, { useState } from "react";
import { IoPersonCircleSharp } from "react-icons/io5";
import logo from "./../../assest/polines.png";
import Logout from "./Logout";

const Header = ({ webName }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLogoutVisible, setLogoutVisible] = useState(false);
  const nama = localStorage.getItem("userData")
    ? JSON.parse(localStorage.getItem("userData")).nama
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
    <div className="flex justify-between items-center bg-indigo-900 p-1">
      <div className="flex items-center">
        <img src={logo} alt="Logo" className="ml-8 mr-4 w-10 h-10" />
        <div style={{ fontSize: "30px", color: "white", fontWeight: "bold" }}>
          {nama}
        </div>
      </div>
      <div
        className="flex items-center cursor-pointer "
        onClick={handleProfileClick}
      >
        <div className="ml-10 text-base font-bold text-white">{nama}</div>
        <div style={{ marginLeft: "10px", marginRight: "20px" }}>
          <IoPersonCircleSharp style={{ fontSize: "50px", color: "white" }} />
        </div>
        {isOpen && (
          <div className="fixed top-[3.62rem] ml-[71.5rem] w-36 bg-gray-300 shadow-md hover:bg-gray-500">
            <ul className="py-2 px-4">
              <li
                className="cursor-pointer font-semibold "
                onClick={handleLogoutClick}
              >
                Logout
              </li>
            </ul>
          </div>
        )}
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

export default Header;
