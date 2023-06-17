import React from "react";
import Header from "../organism/Header";
import NavbarLink from "../organism/NavbarLink";
import CardMk from "../molecules/CardMk";

const Dosen = () => {
  const dropdownItems = ["Opsi 1", "Opsi 2", "Opsi 3"];
  return (
    <div>
      <Header userName="Dosen" webName="PINTAR" />
      <NavbarLink showDropdown={true} dropdownItems={dropdownItems} />
      <div className="flex mt-2 ml-8">
        <CardMk
          width={200}
          height={120}
          text1="Ini adalah teks pertama"
          text2="Ini adalah teks kedua"
          style={{ marginRight: "10px" }}
        />
        <CardMk
          width={200}
          height={120}
          text1="Teks lainnya"
          text2="Lebih banyak teks di sini"
          style={{ marginRight: "10px", marginLeft: "10px" }}
        />
        <CardMk
          width={200}
          height={120}
          text1="kjfkdsfj"
          text2="Lebih banyak teks di sini"
        />
      </div>
    </div>
  );
};

export default Dosen;
