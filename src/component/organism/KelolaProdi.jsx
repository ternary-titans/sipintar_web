import React, { useState } from "react";
import Button from "../atoms/Button";
import Input from "../atoms/Input";
import Text from "../atoms/Text";

const KelolaProdi = ({ setLogoutOn, setChoice }) => {
  const handleOKClick = () => {
    setChoice(true);
    setLogoutOn(false);
  };
  const handleCancelClick = () => {
    setChoice(false);
    setLogoutOn(false);
  };

  const [kodeProdiValue, setkodeProdiValue] = useState("");
  const [ProdiValue, setProdiValue] = useState("");

  const handlekodeProdiChange = (event) => {
    setkodeProdiValue(event.target.value);
  };
  const handleprodiChange = (event) => {
    setProdiValue(event.target.value);
  };

  return (
    <div className="flex h-screen justify-center items-center">
      <div className="flex-col justify-center bg-white py-8 px-4 border-black border-2 text-left">
        <div className="mb-6" style={{ width: "400px" }}>
          <Text type="title3" text="Tambah Program Studi" />
        </div>
        <div className="space-y-2">
          <Input
            label="Kode Prodi"
            type="varchar"
            value={kodeProdiValue}
            onChange={handlekodeProdiChange}
          />
          <Input
            label="Program Studi"
            type="varchar"
            value={ProdiValue}
            onChange={handleprodiChange}
          />
        </div>
        <div className="flex justify-center space-x-4 mt-6">
          <Button onClick={handleOKClick} variant="biru">
            Simpan
          </Button>
          <Button onClick={handleCancelClick} variant="biru">
            Batal
          </Button>
        </div>
      </div>
    </div>
  );
};

export default KelolaProdi;
