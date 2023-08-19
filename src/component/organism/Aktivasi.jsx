import React, { useState } from "react";
import TableData from "../molecules/TabelData";
import JamInput from "../atoms/JamInput";
import TanggalInput from "../atoms/TanggalInput";
import axios from "../../api/axios";
import { useNavigate } from "react-router-dom";

export const Aktivasi = () => {
  const navigate = useNavigate();
  const [realisasiTanggal, setRealisasiTanggal] = useState("");
  const [jamPertama, setJamPertama] = useState("");
  const [jamKedua, setJamKedua] = useState("");
  const [topik, setTopik] = useState("");
  const [hariRealisasi, setHariRealisasi] = useState("");
  const [totaljamValue, setTotalJamValue] = useState("");

  const calculateTotalJam = (jamPertama, jamKedua) => {
    const timeStart = new Date(`01/01/2022 ${jamPertama}`);
    const timeEnd = new Date(`01/01/2022 ${jamKedua}`);
    const diffMinutes = Math.abs(timeEnd - timeStart) / 60000;

    const totalJam = Math.ceil(diffMinutes / 45);
    return totalJam;
  };

  const handleJamPertamaChange = (jam) => {
    setJamPertama(jam);
    const totalJam = calculateTotalJam(jam, jamKedua);
    setTotalJamValue(totalJam);
  };

  const handleJamKeduaChange = (jam) => {
    setJamKedua(jam);
    const totalJam = calculateTotalJam(jamPertama, jam);
    setTotalJamValue(totalJam);
  };

  const handleTanggalChange = (date) => {
    if (date) {
      setRealisasiTanggal(date);
      const days = [
        "Minggu",
        "Senin",
        "Selasa",
        "Rabu",
        "Kamis",
        "Jumat",
        "Sabtu",
      ];
      const dayIndex = date.getDay();
      setHariRealisasi(days[dayIndex]);
    } else {
      setRealisasiTanggal(null);
      setHariRealisasi(null);
    }
  };

  const handleTopikChange = (event) => {
    setTopik(event.target.value);
  };
  const handleTotalJamChange = (event) => {
    setTotalJamValue(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (
      realisasiTanggal !== "" &&
      jamPertama !== "" &&
      jamKedua !== "" &&
      topik !== ""
    ) {
      try {
        const response = await axios.post(
          `http://localhost:3000/api/aktivasiPerkuliahan`,
          {
            hari: hariRealisasi,
            jam_mulai: jamPertama,
            jam_akhir: jamKedua,
            waktu_realisasi: realisasiTanggal.toISOString(),
            ruangan: "SB-1/1",
            topik_perkuliahan: topik,
            total_jam: totaljamValue,
            kelas_mk_dosen_id: 2,
          }
        );

        console.log("Data berhasil disimpan:", response.data);

        alert("Data aktivasi berhasil disimpan.");

        setRealisasiTanggal("");
        setJamPertama("");
        setJamKedua("");
        setTopik("");
        setTotalJamValue("");

        navigate(-1);
      } catch (error) {
        console.error("Terjadi kesalahan saat menyimpan data:", error);

        alert("Terjadi kesalahan saat menyimpan data. Mohon coba lagi.");
      }
    }
  };

  const columns = [
    "Tahun Ajaran",
    "Kode Mata Kuliah",
    "Mata Kuliah",
    "Jadwal",
    "Dosen",
    "Ruangan",
    "Realisasi Tanggal",
    "Jam Perkuliahan",
    "Topik",
    "Total Jam",
  ];

  const data = [
    {
      "Tahun Ajaran": "2022 - 2023",
      "Kode Mata Kuliah": "334-191-605",
      "Mata Kuliah": "Pemr. Basis Data Jaringan",
      Jadwal: "1-6(07.00-11.50)",
      Dosen: "Amran Yobioktabera, S.Kom., M.Kom.",
      Ruangan: "MSTIII/05",
      "Realisasi Tanggal": (
        <TanggalInput onTanggalChange={handleTanggalChange} />
      ),
      Hari: hariRealisasi,
      "Jam Perkuliahan": (
        <div style={{ display: "flex", alignItems: "left", gap: "8px" }}>
          <JamInput onJamChange={handleJamPertamaChange} />
          <span>sampai</span>
          <JamInput onJamChange={handleJamKeduaChange} />
        </div>
      ),
      Topik: (
        <textarea
          className="bg-gray-300 rounded px-2 py-1 w-64 text-black"
          value={topik}
          onChange={handleTopikChange}
        ></textarea>
      ),
      "Total Jam": (
        <input
          className="bg-gray-300 rounded px-2 py-1 w-64 text-black"
          value={totaljamValue}
          onChange={handleTotalJamChange}
          disabled
        ></input>
      ),
    },
  ];

  const columnWidths = ["30px", "250px"];
  const fontSize = "14px";
  const textAlign = "start";

  return (
    <div>
      <div style={{ marginTop: "10px" }}>
        <TableData
          colomsData={columns}
          dataData={data}
          layout="vertical"
          columnWidths={columnWidths}
          fontSize={fontSize}
          textAlign={textAlign}
        />
      </div>
      <div className="mt-4 mb-4 text-red-500 font-normal text-sm italic">
        <text>
          *Pilih tanggal dan jam perkuliahan sesuai realisasi prkuliahan.
        </text>
        <br />
        <text>
          *Aktivasi perkuliahan hanya bisa dilakukan satu kali oleh salah satu
          perwakilan kelas saja.
        </text>
        <br />
        <text>
          *Setelah klik button AKTIVASI PERKULIAHAN, diharap mahasiswa segera
          melakukan scan QR Code.
        </text>
      </div>
      <button
        className="bg-yellow-400 text-blue-950 font-bold rounded-md py-1 px-4 hover:bg-yellow-600"
        onClick={handleSubmit}
      >
        Aktivasi Perkuliahan
      </button>
    </div>
  );
};

export default Aktivasi;
