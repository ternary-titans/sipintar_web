import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Card from "../atoms/Card";
import Input from "../atoms/Input";
import InputDropdown from "../atoms/InputDropdown";
import Button from "../atoms/Button";
import axios from "axios";

const FormEditMhs = ({ id }) => {
  const navigate = useNavigate();
  const [namaValue, setNamaValue] = useState("");
  const [nimValue, setNIMValue] = useState("");
  const [selectedJurusan, setSelectedJurusan] = useState("");
  const [selectedProdi, setSelectedProdi] = useState("");
  const [selectedKls, setSelectedKelas] = useState("");
  const [passwordValue, setPasswordValue] = useState("");
  const [prodiOptions, setProdiOptions] = useState([]);
  const [kelasOptions, setKelasOptions] = useState([]);

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
        const response = await axios.get(
          `http://localhost:3000/api/mahasiswa/${id}`
        );
        const data = response.data.data;
        setNamaValue(data.nama_mahasiswa);
        setNIMValue(data.nim);
        setSelectedJurusan(data.jurusan);
        setSelectedProdi(data.prodi);
        setSelectedKelas(data.kelas);
        setPasswordValue(data.password);
      } catch (error) {
        console.error("Error fetching data from API:", error);
      }
    }

    fetchData();
  }, [id]);

  useEffect(() => {
    if (selectedJurusan === 0 || selectedJurusan === undefined) {
      setProdiOptions([]);
    }
    axios
      .get(`http://localhost:3000/api/prodi?jurusan_id=${selectedJurusan}`)
      .then((response) => {
        const prodiData = response.data;
        setProdiOptions(prodiData.data);
      })
      .catch((error) => {
        console.error("Error fetching Prodi data:", error);
      });
    if (selectedJurusan === undefined) {
      setProdiOptions([]);
    }
  }, [selectedJurusan]);

  useEffect(() => {
    if (selectedProdi) {
      axios
        .get(`http://localhost:3000/api/kelas?prodi_id=${selectedProdi}`)
        .then((response) => {
          if (response.status === 200) {
            const kelasData = response.data;
            setKelasOptions(kelasData.data);
          }
        })
        .catch((error) => {
          setKelasOptions([]);
          console.error("Error fetching Kelas data:", error);
        });
    }
  }, [selectedProdi]);

  const handleNamaChange = (event) => {
    setNamaValue(event.target.value);
  };

  const handleNIMChange = (event) => {
    setNIMValue(event.target.value);
  };

  const handleJurusanChange = (event) => {
    setSelectedJurusan(event.target.value);
  };

  const handleProdiChange = (event) => {
    setSelectedProdi(event.target.value);
  };

  const handleKelasChange = (event) => {
    setSelectedKelas(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPasswordValue(event.target.value);
  };

  const handleSave = async () => {
    const dataToUpdate = {
      nama_mahasiswa: namaValue,
      nim: nimValue,
      kelas_id: selectedKls,
      password: passwordValue,
    };

    try {
      const response = await axios.put(
        `http://localhost:3000/api/mahasiswa/${id}`,
        dataToUpdate
      );

      navigate("/admin/mahasiswa");

      console.log("Data updated successfully:", response.data);
    } catch (error) {
      console.error("Error updating data:", error);
    }
  };

  return (
    <div className="">
      <Card size={{ height: "31rem", width: "78%" }}>
        <div className="flex flex-col gap-4 ml-4 mr-4">
          <Input
            label="Nama"
            type="text"
            value={namaValue}
            onChange={handleNamaChange}
          />
          <Input
            label="NIM"
            type="text"
            value={nimValue}
            onChange={handleNIMChange}
          />
          <InputDropdown
            label="Jurusan"
            uniqueKeys="label"
            value={selectedJurusan}
            options={jurusanOptions}
            onChange={handleJurusanChange}
          />
          <InputDropdown
            label="Program Studi"
            uniqueKeys="nama_prodi"
            value={selectedProdi}
            options={prodiOptions}
            onChange={handleProdiChange}
          />
          <InputDropdown
            label="Kelas"
            uniqueKeys="nama_kelas"
            value={selectedKls}
            options={kelasOptions}
            onChange={handleKelasChange}
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

export default FormEditMhs;
