import React, { useState } from "react";
import Button from "../atoms/Button";
import Input from "../atoms/Input";
import InputDropdown from "../atoms/InputDropdown";
import Text from "../atoms/Text";

const KelolaKelas = ({ setLogoutOn, setChoice, isActive, setIsActive }) => {
  const [kelasValue, setkelasValue] = useState("");
  const [selectedProdi, setSelectedProdi] = useState("");
  const [selectedJurusan, setSelectedJurusan] = useState("");
  const [selectedTahunAjaran, setSelectedTahunAjaran] = useState("");

  const handleOKClick = () => {
    setChoice(true);
    setLogoutOn(false);
  };
  const handleCancelClick = () => {
    setIsActive(false);
  };

  const handlekelasChange = (event) => {
    setkelasValue(event.target.value);
  };

  const handleProdiChange = (event) => {
    setSelectedProdi(event.target.value);
  };

  const handleJurusanChange = (event) => {
    setSelectedJurusan(event.target.value);
  };

  const handleTahunAjaranChange = (event) => {
    setSelectedTahunAjaran(event.target.value);
  };

  const prodiOptions = [
    { value: "option1", label: "Option 1" },
    { value: "option2", label: "Option 2" },
    { value: "option3", label: "Option 3" },
  ];
  const jurusanOptions = [
    { value: "option1", label: "Option 1" },
    { value: "option2", label: "Option 2" },
    { value: "option3", label: "Option 3" },
  ];
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
          <Text type="title3" text="Tambah Kelas" />
        </div>
        <div className="space-y-2">
          <Input
            label="Kelas"
            type="varchar"
            value={kelasValue}
            onChange={handlekelasChange}
          />
          <InputDropdown
            label="Program Studi"
            value={selectedProdi}
            options={prodiOptions}
            onChange={handleProdiChange}
          />
          <InputDropdown
            label="Jurusan"
            value={selectedJurusan}
            options={jurusanOptions}
            onChange={handleJurusanChange}
          />
          <InputDropdown
            label="Tahun Ajaran"
            value={selectedTahunAjaran}
            options={tahunAjaranOptions}
            onChange={handleTahunAjaranChange}
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

export default KelolaKelas;
