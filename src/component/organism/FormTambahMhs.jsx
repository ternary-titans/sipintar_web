import React, { useState, useEffect } from "react";
import axios from "../../api/axios";
import Card from "../atoms/Card";
import Input from "../atoms/Input";
import InputDropdown from "../atoms/InputDropdown";
import { useNavigate } from "react-router-dom";

const FormTambahMhs = () => {
  const navigate = useNavigate();
  const [namaValue, setNamaValue] = useState("");
  const [nimValue, setNIMValue] = useState("");
  const [selectedJurusan, setSelectedJurusan] = useState("");
  const [selectedProdi, setSelectedProdi] = useState();
  const [selectedKls, setSelectedKelas] = useState();
  const [passwordValue, setPasswordValue] = useState("");
  const [formValid, setFormValid] = useState(false);
  const [error, setError] = useState({
    nama: "",
    nim: "",
    jurusan: "",
    prodi: "",
    kelas: "",
    password: "",
  });

  const [prodiOptions, setProdiOptions] = useState([]);
  const [kelasOptions, setKelasOptions] = useState([]);

  const handleNamaChange = (event) => {
    setNamaValue(event.target.value);
    setError({ ...error, nama: "" });
  };

  const handleNIMChange = (event) => {
    setNIMValue(event.target.value);
    setError({ ...error, nim: "" });
  };

  const handleJurusanChange = (event) => {
    setSelectedJurusan(event.target.value);
    setError({ ...error, jurusan: "" });
  };

  const handleProdiChange = (event) => {
    setSelectedProdi(event.target.value);
    setError({ ...error, prodi: "" });
  };

  const handleKelasChange = (event) => {
    setSelectedKelas(event.target.value);
    setError({ ...error, kelas: "" });
  };

  const handlePasswordChange = (event) => {
    setPasswordValue(event.target.value);
    setError({ ...error, password: "" });
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
        nimValue.trim() !== "" &&
        selectedJurusan !== "" &&
        selectedProdi !== "" &&
        selectedKls !== "" &&
        passwordValue !== ""
    );
  }, [
    namaValue,
    nimValue,
    selectedJurusan,
    selectedProdi,
    selectedKls,
    passwordValue,
  ]);

  const jurusanOptions = [
    { id: "", label: "Pilih Jurusan" },
    { id: 1, label: "Teknik Elektro" },
    { id: 2, label: "Teknik Sipil" },
    { id: 3, label: "Teknik Mesin" },
    { id: 4, label: "Akuntansi" },
    { id: 5, label: "Administrasi Bisnis" },
  ];

  useEffect(() => {
    axios
      .get(`/prodi?jurusan_id=${selectedJurusan}`)
      .then((response) => {
        const prodiData = response.data;
        setProdiOptions(prodiData.data);
      })
      .catch((error) => {
        console.error("Error fetching Prodi data:", error);
      });
  }, [selectedJurusan]);

  useEffect(() => {
    if (selectedProdi) {
      axios
        .get(`/kelas?prodi_id=${selectedProdi}`)
        .then((response) => {
          const kelasData = response.data;
          setKelasOptions(kelasData.data);
        })
        .catch((error) => {
          setKelasOptions([]);
          console.error("Error fetching Kelas data:", error);
        });
    }
  }, [selectedProdi]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    let newError = {
      nama: "",
      nim: "",
      jurusan: "",
      prodi: "",
      kelas: "",
      password: "",
    };

    if (namaValue.trim() === "") {
      newError.nama = "Nama harus diisi.";
    }

    if (nimValue.trim() === "") {
      newError.nim = "NIM harus diisi.";
    }

    if (selectedJurusan === "") {
      newError.jurusan = "Jurusan harus dipilih.";
    }

    if (selectedProdi === "") {
      newError.prodi = "Program Studi harus dipilih.";
    }

    if (selectedKls === "") {
      newError.kelas = "Kelas harus dipilih.";
    }

    if (passwordValue === "") {
      newError.password = "password harus 8 karakter";
    }

    setError(newError);

    if (
      namaValue.trim() !== "" &&
      nimValue.trim() !== "" &&
      selectedJurusan !== "" &&
      selectedProdi !== "" &&
      selectedKls !== "" &&
      passwordValue !== ""
    ) {
      try {
        const response = await axios.post("/mahasiswa", {
          nama_mahasiswa: namaValue,
          nim: nimValue,
          kelas_id: selectedKls,
          password: passwordValue,
        });

        console.log("Data berhasil disimpan:", response.data);

        alert("Data mahasiswa berhasil disimpan.");

        setNamaValue("");
        setNIMValue("");
        setSelectedJurusan("");
        setSelectedProdi("");
        setSelectedKelas("");
        setPasswordValue("");
        setFormValid(false);
        setError({
          nama: "",
          nim: "",
          jurusan: "",
          prodi: "",
          kelas: "",
          password: "",
        });

        navigate("/admin/mahasiswa");
      } catch (error) {
        console.error("Terjadi kesalahan saat menyimpan data:", error);

        alert("Terjadi kesalahan saat menyimpan data. Mohon coba lagi.");
      }
    }
  };

  return (
    <div className="p-2">
      <Card size={{ height: "30rem", width: "79%" }}>
        <div className="flex flex-col gap-3">
          <Input
            label="Nama"
            type="text"
            value={namaValue}
            onChange={handleNamaChange}
            error={error.nama}
          />

          <Input
            label="NIM"
            type="text"
            value={nimValue}
            onChange={handleNIMChange}
            error={error.nim}
          />

          <InputDropdown
            label="Jurusan"
            uniqueKeys="label"
            value={selectedJurusan}
            options={jurusanOptions}
            onChange={handleJurusanChange}
            error={error.jurusan}
          />

          <InputDropdown
            isDisabled={selectedJurusan === "" ? true : false}
            label="Program Studi"
            uniqueKeys="nama_prodi"
            value={selectedProdi}
            options={selectedJurusan === "" ? null : prodiOptions}
            onChange={handleProdiChange}
            error={error.prodi}
          />

          <InputDropdown
            isDisabled={selectedJurusan === "" ? true : false}
            label="Kelas"
            uniqueKeys="nama_kelas"
            value={selectedKls}
            options={selectedJurusan === "" ? null : kelasOptions}
            onChange={handleKelasChange}
            error={error.kelas}
          />

          <Input
            label="Password"
            type="password"
            value={passwordValue}
            onChange={handlePasswordChange}
            error={error.password}
          />

          <button
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-1 px-4 rounded"
            onClick={() => setPasswordValue(generateRandomPassword())}
          >
            Generate Random Password
          </button>

          <button
            className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-4 rounded ${
              formValid ? "" : "opacity-50 cursor-not-allowed"
            }`}
            disabled={!formValid}
            onClick={handleSubmit}
          >
            SIMPAN
          </button>

          {error.nama && <p className="text-red-500">{error.nama}</p>}
          {error.nim && <p className="text-red-500">{error.nim}</p>}
          {error.jurusan && <p className="text-red-500">{error.jurusan}</p>}
          {error.prodi && <p className="text-red-500">{error.prodi}</p>}
          {error.kelas && <p className="text-red-500">{error.kelas}</p>}
          {error.password && <p className="text-red-500">{error.password}</p>}
        </div>
      </Card>
    </div>
  );
};

export default FormTambahMhs;
