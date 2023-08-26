import React, { useState, useEffect } from "react";
import Input from "../atoms/Input";
import InputDropdown from "../atoms/InputDropdown";
import Text from "../atoms/Text";
import axios from "../../api/axios";
import Button from "../atoms/Button";

export const TambahJadwal = ({ isActive, setIsActive }) => {
  const [selectedJurusan, setSelectedJurusan] = useState("");
  const [selectedProdi, setSelectedProdi] = useState("");
  const [selectedKls, setSelectedKelas] = useState("");
  const [selectedTahunAjaran, setSelectedTahunAjaran] = useState("");

  const [hariValue, setHariValue] = useState();
  const [waktuMulaiValue, setWaktuMulaiValue] = useState();
  const [waktuAkhirValue, setWaktuAkhirValue] = useState();
  const [selectedMatkul, setSelectedMatkul] = useState();
  const [totalValue, setTotalValue] = useState();
  const [selectedDosen, setSelectedDosen] = useState();
  const [ruangValue, setRuangValue] = useState();

  const [mataKuliahOptions, setMataKuliahOptions] = useState([]);
  const [dosenOptions, setDosenOptions] = useState([]);

  const [prodiOptions, setProdiOptions] = useState([]);
  const [kelasOptions, setKelasOptions] = useState([]);
  const [tahunAjaranOptions, settahunAjaranOptions] = useState([]);

  const handleCancelClick = () => {
    setIsActive(false);
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
  const handleTahunAjaranChange = (event) => {
    setSelectedTahunAjaran(event.target.value);
  };

  const handleHariChange = (event) => {
    setHariValue(event.target.value);
  };

  const handleWaktuMulaiChange = (time) => {
    setWaktuMulaiValue(time);
    const Total = calculateTotalJam(time, waktuAkhirValue);
    setTotalValue(Total);
  };

  const handleWaktuAkhirChange = (time) => {
    setWaktuAkhirValue(time);
    const Total = calculateTotalJam(waktuMulaiValue, time);
    setTotalValue(Total);
  };

  const handleMatkulChange = (event) => {
    setSelectedMatkul(event.target.value);
  };
  const handleTotalChange = (event) => {
    setTotalValue(event.target.value);
  };
  const handleDosenChange = (event) => {
    setSelectedDosen(event.target.value);
  };
  const handleRuangChange = (event) => {
    setRuangValue(event.target.value);
  };

  const calculateTotalJam = (waktuMulaiValue, waktuAkhirValuea) => {
    const timeStart = new Date(`01/01/2022 ${waktuMulaiValue}`);
    const timeEnd = new Date(`01/01/2022 ${waktuAkhirValue}`);
    const diffMinutes = Math.abs(timeEnd - timeStart) / 60000;

    const Total = Math.ceil(diffMinutes / 45);
    return Total;
  };
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

        const response = await axios.get(`/kelas?prodi_id=${selectedProdi}`, {
          headers: {
            Authorization: token,
          },
        });
        const kelasOptions = response.data;
        setKelasOptions(kelasOptions.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchData();
  }, [selectedProdi]);
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

  useEffect(() => {
    async function fetchData() {
      try {
        const token = localStorage.getItem("userData")
          ? JSON.parse(localStorage.getItem("userData")).token
          : null;

        const response = await axios.get(`/mataKuliah`, {
          headers: {
            Authorization: token,
          },
        });
        const mataKuliahOptions = response.data;
        setMataKuliahOptions(mataKuliahOptions.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    fetchData();
  }, []);

  useEffect(() => {
    async function fetchData() {
      try {
        const token = localStorage.getItem("userData")
          ? JSON.parse(localStorage.getItem("userData")).token
          : null;

        const response = await axios.get(`/dosen`, {
          headers: {
            Authorization: token,
          },
        });
        const dosenOptions = response.data;
        setDosenOptions(dosenOptions.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    fetchData();
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();

    // const token = localStorage.getItem("userData")
    //   ? JSON.parse(localStorage.getItem("userData")).token
    //   : null;

    // const kelasMkDosen = localStorage.getItem("kelas_mk_dosen_id");

    if (
      selectedJurusan !== "" &&
      selectedProdi !== "" &&
      selectedKls !== "" &&
      selectedTahunAjaran !== "" &&
      hariValue !== "" &&
      waktuMulaiValue !== "" &&
      waktuAkhirValue !== "" &&
      selectedMatkul !== "" &&
      totalValue !== "" &&
      selectedDosen !== "" &&
      ruangValue !== ""
    ) {
      try {
        const response = await axios.post("/jadwal", {
          hari: hariValue,
          jam_mulai: waktuMulaiValue,
          jam_akhir: waktuAkhirValue,
          mata_kuliah_id: selectedMatkul,
          total_jam: totalValue,
          dosen_id: selectedDosen,
          ruangan: ruangValue,
          kelas_id: selectedKls,
        });
        console.log("Data berhasil disimpan:", response.data);

        alert("Jadwal berhasil disimpan.");

        setHariValue("");
        setWaktuMulaiValue("");
        setWaktuAkhirValue("");
        setSelectedMatkul("");
        setTotalValue("");
        setSelectedDosen("");
        setRuangValue("");
        setSelectedKelas("");
        setIsActive(false);
      } catch (error) {
        console.error("Terjadi kesalahan saat menyimpan data:", error);

        alert("Terjadi kesalahan saat menyimpan data. Mohon coba lagi.");
      }
    }
  };

  return (
    <div
      className={`h-screen justify-center items-center ${
        isActive ? "absolute flex top-0 left-1/3 right-1/4" : "hidden"
      }`}
    >
      <div className="flex-col justify-center  bg-white py-4 px-8  border-black border-2 text-left">
        <div className="text-center">
          <Text type="title3" text="FORM BUAT JADWAL" />
        </div>
        <div className="flex flex-col ">
          <div className="grid grid-cols-2 gap-4 mt-4">
            <div>
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
            </div>
            <div>
              <InputDropdown
                isDisabled={selectedJurusan === "" ? true : false}
                label="Kelas"
                uniqueKeys="nama_kelas"
                value={selectedKls}
                options={selectedJurusan === "" ? null : kelasOptions}
                onChange={handleKelasChange}
              />
              <InputDropdown
                label="Tahun Ajaran"
                uniqueKeys="nama"
                value={selectedTahunAjaran}
                options={tahunAjaranOptions}
                onChange={handleTahunAjaranChange}
              />
            </div>
          </div>

          <div className="mt-2 w-[100%]">
            <div>
              <div>
                <Input
                  label="Hari"
                  type="varchar"
                  value={hariValue}
                  onChange={handleHariChange}
                  placeholder="Senin"
                  width="20px"
                />
              </div>

              <div className="grid grid-cols-3 gap-4">
                <Input
                  label="Waktu Mulai"
                  type="time"
                  value={waktuMulaiValue}
                  onChange={(e) => handleWaktuMulaiChange(e.target.value)}
                  placeholder="HH:MM"
                />
                <Input
                  label="Waktu Akhir"
                  type="time"
                  value={waktuAkhirValue}
                  onChange={(e) => handleWaktuAkhirChange(e.target.value)}
                  placeholder="HH:MM"
                />
                <Input
                  label="Total Jam"
                  type="varchar"
                  value={totalValue}
                  onChange={handleTotalChange}
                  disabled
                />
              </div>

              <InputDropdown
                label="Mata Kuliah"
                uniqueKeys="nama_mk"
                value={selectedMatkul}
                options={mataKuliahOptions}
                onChange={handleMatkulChange}
              />
              <InputDropdown
                label="Dosen"
                uniqueKeys="nama_dosen"
                value={selectedDosen}
                options={dosenOptions}
                onChange={handleDosenChange}
              />
              <Input
                label="Ruangan"
                type="varchar"
                value={ruangValue}
                onChange={handleRuangChange}
              />
            </div>
            <div className="flex justify-center space-x-4 mt-6">
              <Button variant="biru" onClick={handleSubmit}>
                Simpan
              </Button>
              <Button onClick={handleCancelClick} variant="biru">
                Batal
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default TambahJadwal;
