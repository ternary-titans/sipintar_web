import React, { useState } from "react";
import Button from "../atoms/Button";
import InputDropdown from "../atoms/InputDropdown";
import Text from "../atoms/Text";

const UbahTA = ({ setLogoutOn, setChoice, isActive, setIsActive }) => {
  const [selectedtahunAjaran, setSelectedtahunAjaran] = useState("");

  const handleOKClick = () => {
    setChoice(true);
    setLogoutOn(false);
  };
  const handleCancelClick = () => {
    setIsActive(false);
  };

  const handletahunAjaranChange = (event) => {
    setSelectedtahunAjaran(event.target.value);
  };

  const tahunAjaranOptions = [
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
          <Text type="title3" text="Ubah Tahun Ajaran" />
        </div>
        <div className="space-y-2">
          <InputDropdown
            label="Tahun Ajaran"
            value={selectedtahunAjaran}
            options={tahunAjaranOptions}
            onChange={handletahunAjaranChange}
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

export default UbahTA;
