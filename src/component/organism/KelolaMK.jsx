import React, { useState, useEffect } from "react";
import Button from "../atoms/Button";
import Input from "../atoms/Input";
import Text from "../atoms/Text";
import axios from "../../api/axios";

const KelolaMK = ({ isActive, setIsActive }) => {
  const [kodeMKValue, setkodeMKValue] = useState("");
  const [matakuliahValue, setMataKuliahValue] = useState("");
  const [formValid, setFormValid] = useState(false);

  const handleCancelClick = () => {
    setIsActive(false);
  };

  const handlekodeMKChange = (event) => {
    setkodeMKValue(event.target.value);
  };
  const handlematakuliahChange = (event) => {
    setMataKuliahValue(event.target.value);
  };

  useEffect(() => {
    setFormValid(kodeMKValue.trim() !== "" && matakuliahValue.trim() !== "");
  }, [kodeMKValue, matakuliahValue]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (kodeMKValue.trim() !== "" && matakuliahValue.trim() !== "") {
      try {
        const token = localStorage.getItem("userData")
          ? JSON.parse(localStorage.getItem("userData")).token
          : null;

        const response = await axios.post(
          "/mataKuliah",
          {
            nama_mk: matakuliahValue,
            kode_mk: kodeMKValue,
          },
          {
            headers: {
              Authorization: token,
            },
          }
        );

        console.log("Data berhasil disimpan:", response.data);

        alert("Data Mata Kuliah berhasil disimpan.");

        setMataKuliahValue("");
        setkodeMKValue("");
        setFormValid(false);
      } catch (error) {
        console.error("Terjadi kesalahan saat menyimpan data:", error);

        console.log("Error response:", error.response);

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
          <Button onClick={handleSubmit} variant="biru">
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
