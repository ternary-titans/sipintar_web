import React, { useState, useEffect } from "react";
import Card from "../atoms/Card";
import Input from "../atoms/Input";
import InputDropdown from "../atoms/InputDropdown";
import Button from "../atoms/Button";
import axios from "../../api/axios";
import { useNavigate } from "react-router-dom";

const FormEditDosen = ({ id }) => {
  const navigate = useNavigate();
  const [namaValue, setNamaValue] = useState("");
  const [nipValue, setNIPValue] = useState("");
  const [selectedJurusan, setSelectedJurusan] = useState("");
  const [passwordValue, setPasswordValue] = useState("");

  const jurusanOptions = [
    { id: 0, label: "Pilih Jurusan" },
    { id: 1, label: "Teknik Elektro" },
    { id: 2, label: "Teknik Sipil" },
    { id: 3, label: "Teknik Mesin" },
    { id: 4, label: "Akuntansi" },
    { id: 5, label: "Administrasi Bisnis" },
  ];

  useEffect(() => {
    async function fetchData() {
      try {
        const token = localStorage.getItem("userData")
          ? JSON.parse(localStorage.getItem("userData")).token
          : null;

        const response = await axios.get(`/dosen/${id}`, {
          headers: {
            Authorization: token,
          },
        });
        const data = response.data.data;
        setNamaValue(data.nama_dosen);
        setNIPValue(data.nip);
        setSelectedJurusan(data.jurusan_id);
        setPasswordValue(data.password);
      } catch (error) {
        console.error("Error fetching data from API:", error);
      }
    }

    fetchData();
  }, [id]);

  const handleNamaChange = (event) => {
    setNamaValue(event.target.value);
  };

  const handleNIPChange = (event) => {
    setNIPValue(event.target.value);
  };

  const handleJurusanChange = (event) => {
    setSelectedJurusan(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPasswordValue(event.target.value);
  };

  const handleSave = async () => {
    const dataToUpdate = {
      nama_dosen: namaValue,
      nip: nipValue,
      jurusan_id: selectedJurusan,
      password: passwordValue,
    };

    try {
      const token = localStorage.getItem("userData")
        ? JSON.parse(localStorage.getItem("userData")).token
        : null;

      const response = await axios.put(
        `/dosen/${id}`,
        {
          headers: {
            Authorization: token,
          },
        },
        dataToUpdate
      );

      navigate("/admin/dosen");

      console.log("Data updated successfully:", response.data);
    } catch (error) {
      console.error("Error updating data:", error);
    }
  };

  return (
    <div className="p-2">
      <Card size={{ height: "27rem", width: "78%" }}>
        <div className="flex flex-col gap-4 ">
          <Input
            label="Nama"
            type="text"
            value={namaValue}
            onChange={handleNamaChange}
          />
          <Input
            label="NIP"
            type="varchar"
            value={nipValue}
            onChange={handleNIPChange}
          />

          <InputDropdown
            label="Jurusan"
            uniqueKeys="label"
            value={selectedJurusan}
            options={jurusanOptions}
            onChange={handleJurusanChange}
          />

          <Input
            label="Password"
            type="password"
            value={passwordValue}
            onChange={handlePasswordChange}
          />
        </div>
        <div className="flex justify-end mt-12 mr-4">
          <Button variant="biru" onClick={handleSave}>
            Simpan
          </Button>
        </div>
      </Card>
    </div>
  );
};

export default FormEditDosen;
