import React, { useState } from "react";
import Button from "../atoms/Button";
import Input from "../atoms/Input";
import InputDropdown from "../atoms/InputDropdown";
import Text from "../atoms/Text";

const KelolaMK = ({ setLogoutOn, setChoice, isActive, setIsActive }) => {
  const [prodiValue, setMataKuliahValue] = useState("");
  const [kodeProdiValue, setkodeMKValue] = useState("");
  const [selectedJurusan, setSelectedJurusan] = useState("");

  const handleOKClick = () => {
    setChoice(true);
    setLogoutOn(false);
  };
  const handleCancelClick = () => {
    setIsActive(false);
  };

  const handleprodiChange = (event) => {
    setkodeMKValue(event.target.value);
  };
  const handlekodeProdiChange = (event) => {
    setMataKuliahValue(event.target.value);
  };
  const handleJurusanChange = (event) => {
    setSelectedJurusan(event.target.value);
  };

  const jurusanOptions = [
    { value: "option1", label: "Option 1" },
    { value: "option2", label: "Option 2" },
    { value: "option3", label: "Option 3" },
  ];

  return (
    <div
      className={`h-screen justify-center items-center bg-gray-900 ${
        isActive ? "absolute flex top-0 left-1/2 right-1/2" : "hidden"
      }`}
    >
      <div className="flex-col justify-center  bg-white py-8 px-4 border-black border-2 text-left">
        <div className="mb-6" style={{ width: "400px" }}>
          <Text type="title3" text="Tambah Program Studi" />
        </div>
        <div className="space-y-2">
          <Input
            label="Program Studi"
            type="varchar"
            value={prodiValue}
            onChange={handleprodiChange}
          />
          <Input
            label="Kode Program Studi"
            type="varchar"
            value={kodeProdiValue}
            onChange={handlekodeProdiChange}
          />
          <InputDropdown
            label="Jurusan"
            value={selectedJurusan}
            options={jurusanOptions}
            onChange={handleJurusanChange}
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

export default KelolaMK;
