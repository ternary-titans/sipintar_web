import React, { useState, useEffect } from "react";
import Button from "../atoms/Button";
import InputDropdown from "../atoms/InputDropdown";
import Text from "../atoms/Text";
import axios from "axios";

const UbahTA = ({ isActive, setIsActive, handleUbahTA }) => {
  const [selectedtahunAjaran, setSelectedtahunAjaran] = useState("");
  const [formValid, setFormValid] = useState(false);

  const [tahunAjaranOptions, settahunAjaranOptions] = useState([]);

  const handleCancelClick = () => {
    setIsActive(false);
  };

  const handletahunAjaranChange = (event) => {
    setSelectedtahunAjaran(event.target.value);
  };

  useEffect(() => {
    setFormValid(selectedtahunAjaran !== "");
  }, [selectedtahunAjaran]);

  useEffect(() => {
    axios
      .get(`http://localhost:3000/api/tahunAjaran`)
      .then((response) => {
        const tahunAjaranData = response.data;
        settahunAjaranOptions(tahunAjaranData.data);
      })
      .catch((error) => {
        console.error("Error fetching Prodi data:", error);
      });
  }, []);

  const handleSubmit = async () => {
    if (selectedtahunAjaran !== "") {
      try {
        await handleUbahTA(selectedtahunAjaran);
        setSelectedtahunAjaran("");
        setFormValid(false);
        setIsActive(false);
      } catch (error) {
        console.error(
          "Terjadi kesalahan saat mengubah data tahun ajaran:",
          error
        );

        alert(
          "Terjadi kesalahan saat mengubah data tahun ajaran. Mohon coba lagi."
        );
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
          <Text type="title3" text="Ubah Tahun Ajaran" />
        </div>
        <div className="space-y-2">
          <InputDropdown
            label="Tahun Ajaran"
            uniqueKeys="nama"
            value={selectedtahunAjaran}
            options={tahunAjaranOptions}
            onChange={handletahunAjaranChange}
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

export default UbahTA;
