import React from "react";
import TableData from "../molecules/TabelData";
import JamInput from "../atoms/JamInput";
import TanggalInput from "../atoms/TanggalInput";

export const Aktivasi = () => {
  const handleTanggalChange = (date) => {
    console.log("Tanggal yang dipilih:", date);
  };
  const handleJamPertamaChange = (jam) => {
    console.log("Jam Pertama yang valid:", jam);
  };

  const handleJamKeduaChange = (jam) => {
    console.log("Jam Kedua yang valid:", jam);
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
      "Jam Perkuliahan": (
        <div style={{ display: "flex", alignItems: "left", gap: "8px" }}>
          <JamInput onJamChange={handleJamPertamaChange} />
          <text>sampai</text>
          <JamInput onJamChange={handleJamKeduaChange} />
        </div>
      ),
      Topik: (
        <textarea className="bg-gray-300  rounded px-2 py-1 w-64 text-black"></textarea>
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
    </div>
  );
};
export default Aktivasi;
