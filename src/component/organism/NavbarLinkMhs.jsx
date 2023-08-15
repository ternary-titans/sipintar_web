import React, { useState } from "react";
import { Link } from "react-router-dom";

const NavbarLink = ({ showDropdown, dropdownItems, userType }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleMenuItemClick = (menuItem) => {
    console.log(`Clicked on ${menuItem}`);
    setIsOpen(false);
  };

  return (
    <nav>
      <div className="flex justify-start bg-white shadow shadow-gray-400 p-0 h-[3rem] border-b border-black">
        <ul className="flex items-center mt-6 gap-8">
          <li className="ml-8">
            <Link to="/mahasiswa">
              <a href="/Beranda">Beranda</a>
            </Link>
          </li>
          <li>
            <div
              onClick={handleToggleDropdown}
              className="w-fit cursor-pointer"
            >
              Rekap Presensi
            </div>
          </li>
        </ul>
      </div>

      {isOpen && showDropdown && (
        <ul className="absolute right-0 mt-0 ml-[7.5rem] w-[16rem] bg-white border border-gray-300 rounded-md shadow-lg">
          {dropdownItems.map((item, index) => (
            <Link to={item.path}>
              <li
                key={index}
                className="px-4 py-2 hover:bg-gray-100"
                onClick={() => handleMenuItemClick(item)}
              >
                {item.name}
              </li>
            </Link>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default NavbarLink;
