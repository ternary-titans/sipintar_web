import React from "react";
import Header from "../organism/Header";
import NavbarLink from "../organism/NavbarLink";

const Dosen = () => {
  const dropdownItems = [
    {
      path: "/dosen/rekap",
      name: "Rekap Presensi",
    },
    {
      path: "/dosen/rekapbln",
      name: "Rekap Bulanan",
    },
    {
      path: "/dosen/rekapmhs",
      name: "Rekap Presensi Mahasiswa",
    },
  ];
  return (
    <div>
      <Header userName="Dosen" webName="PINTAR" />
      <NavbarLink showDropdown={true} dropdownItems={dropdownItems} />
    </div>
  );
};

export default Dosen;
