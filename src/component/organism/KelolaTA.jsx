import React, { useState, useEffect } from "react";
import Button from "../atoms/Button";
import Input from "../atoms/Input";
import Text from "../atoms/Text";
import axios from "axios";

const KelolaTA = ({ isActive, setIsActive }) => {
  const [TahunAjaranValue, setTahunAjaranValue] = useState("");
  const [formValid, setFormValid] = useState(false);

  const handleTahunAjaranChange = (event) => {
    setTahunAjaranValue(event.target.value);
  };

  const handleCancelClick = () => {
    setIsActive(false);
  };

  useEffect(() => {
    setFormValid(TahunAjaranValue.trim() !== "");
  }, [TahunAjaranValue]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (TahunAjaranValue.trim() !== "") {
      const token = localStorage.getItem("userData")
        ? JSON.parse(localStorage.getItem("userData")).token
        : null;

      try {
        const response = await axios.post(
          "http://localhost:3000/api/tahunAjaran",
          {
            headers: {
              Authorization: token,
            },
          },
          {
            nama: TahunAjaranValue,
          }
        );

        console.log("Data berhasil disimpan:", response.data);

        alert("Tahun Ajaran berhasil disimpan.");

        setTahunAjaranValue("");
        setFormValid(false);
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
          <Text type="title3" text="Tambah Tahun Ajaran" />
        </div>
        <div className="space-y-2">
          <Input
            label="Tahun Ajaran"
            type="text"
            value={TahunAjaranValue}
            onChange={handleTahunAjaranChange}
          />
        </div>
        <div className="flex justify-center space-x-4 mt-6">
          <Button onClick={handleSubmit} variant="biru" disabled={!formValid}>
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

export default KelolaTA;
