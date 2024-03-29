import React, { useState, useEffect } from "react";
import Button from "../atoms/Button";
import Input from "../atoms/Input";
import InputDropdown from "../atoms/InputDropdown";
import Text from "../atoms/Text";
import axios from "../../api/axios";

const KelolaKelas = ({ isActive, setIsActive }) => {
  const [kelasValue, setkelasValue] = useState("");
  const [selectedProdi, setSelectedProdi] = useState();
  const [selectedJurusan, setSelectedJurusan] = useState("");
  const [selectedTahunAjaran, setSelectedTahunAjaran] = useState("");
  const [formValid, setFormValid] = useState(false);

  const [prodiOptions, setProdiOptions] = useState([]);
  const [tahunAjaranOptions, settahunAjaranOptions] = useState([]);

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

  useEffect(() => {
    setFormValid(
      kelasValue.trim() !== "" &&
        // selectedJurusan !== "" &&
        selectedProdi !== "" &&
        selectedTahunAjaran !== ""
    );
  }, [kelasValue, selectedProdi, selectedTahunAjaran]);

  const jurusanOptions = [
    { id: "", label: "Pilih Jurusan" },
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

        const response = await axios.get(
          `/prodi?jurusan_id=${selectedJurusan}`,
          {
            headers: {
              Authorization: token,
            },
          }
        );
        const prodiOptions = response.data;
        setProdiOptions(prodiOptions.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchData();
  }, [selectedJurusan]);

  useEffect(() => {
    async function fetchData() {
      try {
        const token = localStorage.getItem("userData")
          ? JSON.parse(localStorage.getItem("userData")).token
          : null;

        const response = await axios.get(`/tahunAjaran`, {
          headers: {
            Authorization: token,
          },
        });
        const tahunAjaranOptions = response.data;
        settahunAjaranOptions(tahunAjaranOptions.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    fetchData();
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const token = localStorage.getItem("userData")
      ? JSON.parse(localStorage.getItem("userData")).token
      : null;

    // const kelasMkDosen = localStorage.getItem("kelas_mk_dosen_id");

    if (
      kelasValue.trim() !== "" &&
      // selectedJurusan !== "" &&
      selectedProdi !== "" &&
      selectedTahunAjaran !== ""
    ) {
      try {
        const response = await axios.post(
          "/kelas",
          {
            nama_kelas: kelasValue,
            prodi_id: selectedProdi,
            tahun_ajaran_id: selectedTahunAjaran,
          },
          {
            headers: {
              Authorization: token,
            },
          }
        );
        console.log("Data berhasil disimpan:", response.data);

        alert("Data Kelas berhasil disimpan.");

        setkelasValue("");
        // setSelectedJurusan("");
        setSelectedProdi("");
        setSelectedTahunAjaran("");
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
          <Text type="title3" text="Tambah Kelas" />
        </div>
        <div className="space-y-2">
          <Input
            label="Kelas"
            uniqueKeys="nama_kelas"
            type="varchar"
            value={kelasValue}
            onChange={handlekelasChange}
          />
          <InputDropdown
            label="Jurusan"
            uniqueKeys="label"
            value={selectedJurusan}
            options={jurusanOptions}
            onChange={handleJurusanChange}
          />
          <InputDropdown
            isDisabled={selectedJurusan === "" ? true : false}
            label="Program Studi"
            uniqueKeys="nama_prodi"
            value={selectedProdi}
            options={selectedJurusan === "" ? null : prodiOptions}
            onChange={handleProdiChange}
          />
          <InputDropdown
            label="Tahun Ajaran"
            uniqueKeys="nama"
            value={selectedTahunAjaran}
            options={tahunAjaranOptions}
            onChange={handleTahunAjaranChange}
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

export default KelolaKelas;
