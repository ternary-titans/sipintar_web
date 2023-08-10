import React, { useState } from "react";
import Button from "../atoms/Button";
import Input from "../atoms/Input";
import Text from "../atoms/Text";

const KelolaJurusan = ({ setLogoutOn, setChoice, isActive, setIsActive }) => {
  const [jurusanValue, setjurusanValue] = useState("");

  const handleOKClick = () => {
    setChoice(true);
    setLogoutOn(false);
  };
  const handleCancelClick = () => {
    setIsActive(false);
  };

  const handlejurusanChange = (event) => {
    setjurusanValue(event.target.value);
  };

  return (
    <div
      className={`h-screen justify-center items-center bg-gray-900 ${
        isActive ? "absolute flex top-0 left-1/2 right-1/2" : "hidden"
      }`}
    >
      <div className="flex-col justify-center  bg-white py-8 px-4 border-black border-2 text-left">
        <div className="mb-6" style={{ width: "400px" }}>
          <Text type="title3" text="Tambah Jurusan" />
        </div>
        <div className="space-y-2">
          <Input
            label="Jurusan"
            type="varchar"
            value={jurusanValue}
            onChange={handlejurusanChange}
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

export default KelolaJurusan;
