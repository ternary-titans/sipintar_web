import React, { useState } from "react";

const NavbarLink = ({ showDropdown, dropdownItems }) => {
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
      <div className="flex justify-start bg-white shadow shadow-gray-400 p-0 w-screen h-[3rem] border-b border-black">
        <ul
          style={{
            display: "flex",
            alignItems: "center",
            marginTop: "20px",
          }}
        >
          <li style={{ marginRight: "20px", marginLeft: "30px" }}>
            <a href="/">Beranda</a>
          </li>
          <li>
            <div
              onClick={handleToggleDropdown}
              style={{
                width: "fit-content",
                cursor: "pointer",
              }}
            >
              Rekap Presensi
            </div>
          </li>
        </ul>
      </div>

      {isOpen && showDropdown && (
        <ul style={{ marginLeft: "110px", cursor: "pointer" }}>
          {dropdownItems.map((item, index) => (
            <li key={index} onClick={() => handleMenuItemClick(item)}>
              {item}
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default NavbarLink;
