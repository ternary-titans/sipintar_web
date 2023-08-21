import React, { useState, useEffect } from "react";
import Button from "../atoms/Button";
import Input from "../atoms/Input";
import Text from "../atoms/Text";
import axios from "axios";

const KelolaJurusan = ({ isActive, setIsActive }) => {
  const [jurusanValue, setjurusanValue] = useState("");
  const [formValid, setFormValid] = useState(false);

  const handleCancelClick = () => {
    setIsActive(false);
  };

  const handlejurusanChange = (event) => {
    setjurusanValue(event.target.value);
  };

  useEffect(() => {
    setFormValid(jurusanValue.trim() !== "");
  }, [jurusanValue]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (jurusanValue.trim() !== "") {
      try {
        const token = localStorage.getItem("userData")
          ? JSON.parse(localStorage.getItem("userData")).token
          : null;

        const response = await axios.post(
          "http://localhost:3000/api/jurusan",
          {
            headers: {
              Authorization: token,
            },
          },
          {
            nama_jurusan: jurusanValue,
          }
        );

        console.log("Data berhasil disimpan:", response.data);

        alert("Data mahasiswa berhasil disimpan.");

        setjurusanValue("");
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

export default KelolaJurusan;
