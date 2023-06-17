import React, { useState } from "react";
import { IoPersonCircleSharp } from "react-icons/io5";
import logo from "./../../assest/polines.png";
import Logout from "./Logout";

const Header = ({ userName, webName }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLogoutVisible, setLogoutVisible] = useState(false);

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
        <img
          src={logo}
          alt="Logo"
          style={{
            marginLeft: "20px",
            marginRight: "20px",
            width: "50px",
            height: "50px",
          }}
        />
        <div style={{ fontSize: "30px", color: "white", fontWeight: "bold" }}>
          {webName}
        </div>
      </div>
      <div className="flex items-center " onClick={handleProfileClick}>
        <div
          style={{
            marginLeft: "10px",
            fontSize: "16px",
            fontWeight: "bold",
            color: "white",
          }}
        >
          {userName}
        </div>
        <div style={{ marginLeft: "10px", marginRight: "20px" }}>
          <IoPersonCircleSharp style={{ fontSize: "50px", color: "white" }} />
        </div>
        {isOpen && (
          <div className="absolute top-12 bg-gray-300 shadow-md">
            <ul className="py-2 px-4">
              <li className="cursor-pointer" onClick={handleLogoutClick}>
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
