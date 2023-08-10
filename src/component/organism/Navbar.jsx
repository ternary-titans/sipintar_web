import React, { useState } from "react";
import { BsPersonCircle } from "react-icons/bs";
import Text from "../atoms/Text";
import Logout from "../organism/Logout";

export const Navbar = () => {
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
    <>
      <div className="flex justify-end items-start bg-white shadow shadow-gray-400 p-0 w-screen h-[5.5rem]">
        <div className="flex justify-end items-start bg-indigo-900 p-0 min-w-full h-[3.125rem]">
          <div className="p-0">
            <div className="relative">
              <div
                className="flex items-center bg-yellow-400 p-2 cursor-pointer"
                onClick={handleProfileClick}
              >
                <div style={{ marginRight: "8px", marginLeft: "20px" }}>
                  <BsPersonCircle
                    style={{ color: "#00008B", fontSize: "34px" }}
                  />
                </div>
                <div style={{ marginLeft: "8px", marginRight: "20px" }}>
                  <Text type="user" text="Admin" />
                </div>
              </div>
              {isOpen && (
                <div className="absolute top-12 right-0 bg-gray-300 shadow-md">
                  <ul className="py-2 px-4">
                    <li className="cursor-pointer" onClick={handleLogoutClick}>
                      Logout
                    </li>
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>

        {isLogoutVisible && (
          <Logout
            setLogoutOn={setLogoutVisible}
            setChoice={handleConfirmLogout}
          />
        )}
      </div>
    </>
  );
};

export default Navbar;
