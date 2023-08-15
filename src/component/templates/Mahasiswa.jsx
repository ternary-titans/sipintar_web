import React from "react";
import HeaderMhs from "../organism/HeaderMhs";
import NavbarLinkMhs from "../organism/NavbarLinkMhs";

const Mahasiswa = () => {
  const dropdownItems = [
    {
      path: "/mahasiswa/rekap",
      name: "Rekap Presensi Mahasiswa",
    },
  ];
  return (
    <div>
      <HeaderMhs userName="Nama Mahasiswa" nim="3.34.20.0.21" />
      <NavbarLinkMhs showDropdown={true} dropdownItems={dropdownItems} />
    </div>
  );
};

export default Mahasiswa;
