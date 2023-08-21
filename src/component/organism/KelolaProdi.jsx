import React, { useState, useEffect } from "react";
import Button from "../atoms/Button";
import Input from "../atoms/Input";
import InputDropdown from "../atoms/InputDropdown";
import Text from "../atoms/Text";
import axios from "axios";

const KelolaMK = ({ isActive, setIsActive }) => {
  const [prodiValue, setprodiValue] = useState("");
  const [kodeProdiValue, setkodeProdiValue] = useState("");
  const [selectedJurusan, setSelectedJurusan] = useState("");
  const [formValid, setFormValid] = useState(false);

  const handleCancelClick = () => {
    setIsActive(false);
  };

  const handleprodiChange = (event) => {
    setprodiValue(event.target.value);
  };
  const handlekodeProdiChange = (event) => {
    setkodeProdiValue(event.target.value);
  };
  const handleJurusanChange = (event) => {
    setSelectedJurusan(event.target.value);
  };

  useEffect(() => {
    setFormValid(
      prodiValue.trim() !== "" &&
        kodeProdiValue.trim() !== "" &&
        selectedJurusan !== ""
    );
  }, [prodiValue, kodeProdiValue, selectedJurusan]);

  const jurusanOptions = [
    { id: "", label: "Pilih Jurusan" },
    { id: 1, label: "Teknik Elektro" },
    { id: 2, label: "Teknik Sipil" },
    { id: 3, label: "Teknik Mesin" },
    { id: 4, label: "Akuntansi" },
    { id: 5, label: "Administrasi Bisnis" },
  ];

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (
      prodiValue.trim() !== "" &&
      kodeProdiValue.trim() !== "" &&
      selectedJurusan !== ""
    ) {
      try {
        const token = localStorage.getItem("userData")
          ? JSON.parse(localStorage.getItem("userData")).token
          : null;

        const response = await axios.post(
          "http://localhost:3000/api/prodi",
          {
            headers: {
              Authorization: token,
            },
          },
          {
            nama_prodi: prodiValue,
            kode_prodi: kodeProdiValue,
            jurusan_id: selectedJurusan,
          }
        );

        console.log("Data berhasil disimpan:", response.data);

        alert("Data Prodi berhasil disimpan.");

        setprodiValue("");
        setkodeProdiValue("");
        setSelectedJurusan("");
        setFormValid(false);
        setIsActive(false);
      } catch (error) {
        console.error("Terjadi kesalahan saat menyimpan data:", error);

        alert("Terjadi kesalahan saat menyimpan data. Mohon coba lagi.");
      }
    }
  };

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
            uniqueKeys="label"
            value={selectedJurusan}
            options={jurusanOptions}
            onChange={handleJurusanChange}
          />
        </div>
        <div className="flex justify-center space-x-4 mt-6">
          <Button onClick={handleSubmit} disabled={!formValid} variant="biru">
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
