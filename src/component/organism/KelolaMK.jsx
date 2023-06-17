import React, { useState } from "react";
import Button from "../atoms/Button";
import Input from "../atoms/Input";
import Text from "../atoms/Text";

const KelolaMK = ({ setLogoutOn, setChoice }) => {
  const handleOKClick = () => {
    setChoice(true);
    setLogoutOn(false);
  };
  const handleCancelClick = () => {
    setChoice(false);
    setLogoutOn(false);
  };
  const [kodeMKValue, setkodeMKValue] = useState("");
  const [matakuliahValue, setMataKuliahValue] = useState("");

  const handlekodeMKChange = (event) => {
    setkodeMKValue(event.target.value);
  };
  const handlematakuliahChange = (event) => {
    setMataKuliahValue(event.target.value);
  };

  return (
    <div className="flex h-screen justify-center items-center">
      <div className="flex-col justify-center bg-white py-8 px-4 border-black border-2 text-left">
        <div className="mb-6" style={{ width: "400px" }}>
          <Text type="title3" text="Tambah Mata Kuliah" />
        </div>
        <div className="space-y-2">
          <Input
            label="Kode Mata Kuliah"
            type="varchar"
            value={kodeMKValue}
            onChange={handlekodeMKChange}
          />
          <Input
            label="Mata Kuliah"
            type="varchar"
            value={matakuliahValue}
            onChange={handlematakuliahChange}
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
