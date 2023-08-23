import React, { useState, useEffect } from "react";
import Card from "../atoms/Card";
import Input from "../atoms/Input";
import InputDropdown from "../atoms/InputDropdown";
import axios from "../../api/axios";
import { useNavigate } from "react-router-dom";

export const FormTambahDosen = () => {
  const navigate = useNavigate();
  const [namaValue, setNamaValue] = useState("");
  const [nipValue, setNIPValue] = useState("");
  const [selectedJurusan, setSelectedJurusan] = useState("");
  const [passwordValue, setPasswordValue] = useState("");
  const [formValid, setFormValid] = useState(false);
  const [error, setError] = useState({
    nama: "",
    nip: "",
    jurusan: "",
    password: "",
  });

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

  const generateRandomPassword = () => {
    const length = 8;
    const charset =
      "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*";
    let result = "";
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * charset.length);
      result += charset[randomIndex];
    }
    return result;
  };

  useEffect(() => {
    setFormValid(
      namaValue.trim() !== "" &&
        nipValue.trim() !== "" &&
        selectedJurusan !== "" &&
        passwordValue !== ""
    );
  }, [namaValue, nipValue, selectedJurusan, passwordValue]);

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

    let newError = {
      nama: "",
      nip: "",
      jurusan: "",
      password: "",
    };

    if (namaValue.trim() === "") {
      newError.nama = "Nama harus diisi.";
    }

    if (nipValue.trim() === "") {
      newError.nip = "NIP harus diisi.";
    }

    if (selectedJurusan === "") {
      newError.jurusan = "Jurusan harus dipilih.";
    }

    if (passwordValue === "") {
      newError.password = "Password harus terdiri dari 8 karakter.";
    }

    setError(newError);

    if (
      namaValue.trim() !== "" &&
      nipValue.trim() !== "" &&
      selectedJurusan !== "" &&
      passwordValue !== ""
    ) {
      try {
        const token = localStorage.getItem("userData")
          ? JSON.parse(localStorage.getItem("userData")).token
          : null;

        const response = await axios.post(
          "/dosen",
          {
            nama_dosen: namaValue,
            nip: nipValue,
            jurusan_id: selectedJurusan,
            password: passwordValue,
          },
          {
            headers: {
              Authorization: token,
            },
          }
        );

        console.log("Data berhasil disimpan:", response.data);

        setNamaValue("");
        setNIPValue("");
        setSelectedJurusan("");
        setPasswordValue("");
        setFormValid(false);
        setError({
          nama: "",
          nip: "",
          jurusan: "",
          password: "",
        });

        navigate("/admin/dosen");
      } catch (error) {
        console.error("Terjadi kesalahan saat menyimpan data:", error);
        console.log("Error response:", error.response);

        alert("Terjadi kesalahan saat menyimpan data. Mohon coba lagi.");
      }
    }
  };

  return (
    <div className="p-2">
      <Card size={{ height: "27rem", width: "79%" }}>
        <div className="flex flex-col gap-4">
          <Input
            label="Nama"
            type="text"
            value={namaValue}
            onChange={handleNamaChange}
            error={error.nama}
          />

          <Input
            label="NIP"
            type="text"
            value={nipValue}
            onChange={handleNIPChange}
            error={error.nip}
          />

          <InputDropdown
            label="Jurusan"
            uniqueKeys="label"
            value={selectedJurusan}
            options={jurusanOptions}
            onChange={handleJurusanChange}
            error={error.jurusan}
          />

          <Input
            label="Password"
            type="password"
            value={passwordValue}
            onChange={handlePasswordChange}
            error={error.password}
          />

          <button
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
            onClick={() => setPasswordValue(generateRandomPassword())}
          >
            Generate Random Password
          </button>

          <button
            className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ${
              formValid ? "" : "opacity-50 cursor-not-allowed"
            }`}
            disabled={!formValid}
            onClick={handleSubmit}
          >
            SIMPAN
          </button>

          {error.nama && <p className="text-red-500">{error.nama}</p>}
          {error.nip && <p className="text-red-500">{error.nip}</p>}
          {error.jurusan && <p className="text-red-500">{error.jurusan}</p>}
          {error.password && <p className="text-red-500">{error.password}</p>}
        </div>
      </Card>
    </div>
  );
};

export default FormTambahDosen;
