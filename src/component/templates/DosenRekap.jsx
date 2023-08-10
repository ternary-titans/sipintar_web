import React, { useState } from "react";
import Dosen from "./Dosen";
import CardUser from "../atoms/CardUser";
import Text from "../atoms/Text";
import Input2 from "../atoms/InputDropdown";
import Table from "../molecules/Tabel";

export const DosenRekap = () => {
  const [selectedOption, setSelectedOption] = useState("");

  const handleDropdownChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const dropdownOptions = [
    { value: "option1", label: "Option 1" },
    { value: "option2", label: "Option 2" },
    { value: "option3", label: "Option 3" },
  ];
  const columns = [
    "No",
    "Kelas",
    "Mata Kuliah",
    "Total Jam Pertemuan",
    "Presentase",
    "Aksi",
  ];
  const data = [
    {
      No: 1,
      Kelas: "IK3A",
      "Mata Kuliah": "Pemr. Basis Data Jaringan",
      "Total Jam Pertemuan": "32 jam",
      Presentase: "100%",
      Aksi: (
        <button style={{ textDecoration: "underline", color: "blue" }}>
          Detail
        </button>
      ),
    },
  ];

  const columnAlignments = [
    "center",
    "center",
    "center",
    "center",
    "center",
    "center",
    "center",
    "center",
    "center",
  ];
  const headerBackgroundColor = "white";
  const headerBorderColor = "#2563eb";
  const headerBorderColor2 = "#facc15";
  const pageSizeOptions = [5, 10, 25];

  const columns2 = [
    "No",
    "Tanggal Realisasi",
    "Jam Perkuliahan",
    "Topik",
    "Hadir",
    "Sakit",
    "Izin",
    "Alpa",
  ];
  const data2 = [
    {
      No: 1,
      "Tanggal Realisasi": "10 mei 2023",
      "Jam Perkuliahan": "09.00 - 10.00",
      Topik: "Topik 1",
      Hadir: "1 mahasiswa",
      Sakit: "1 mahasiswa",
      Izin: "1 mahasiswa",
      Alpa: "1 mahasiswa",
    },
  ];

  return (
    <div>
      <Dosen />
      <div style={{ margin: "20px" }}>
        <CardUser width={1220} borderColor="#9ca3af" borderWidth={2}>
          <div>
            <Text type="title3" text="Rekapitulasi Presensi Dosen" />
            <div style={{ marginTop: "20px", width: "300px" }}>
              <Input2
                label="Tahun Ajaran"
                value={selectedOption}
                options={dropdownOptions}
                onChange={handleDropdownChange}
              />
            </div>
            <div style={{ marginTop: "30px" }}>
              <Table
                columns={columns}
                data={data}
                columnAlignments={columnAlignments}
                headerBackgroundColor={headerBackgroundColor}
                headerBorderColor={headerBorderColor}
                pageSizeOptions={pageSizeOptions}
                style={{ marginTop: "10px" }}
              />
            </div>
            <hr className="w-full h-0.5 bg-gray-300 mt-20 mb-2" />
            <Text
              type="title3"
              text="Rekapitulasi Presensi Dosen > {Kelas} > {MatKul}"
            />
            <div style={{ marginTop: "30px" }}>
              <Table
                columns={columns2}
                data={data2}
                columnAlignments={columnAlignments}
                headerBackgroundColor={headerBackgroundColor}
                headerBorderColor={headerBorderColor2}
                pageSizeOptions={pageSizeOptions}
                style={{ marginTop: "10px" }}
              />
            </div>
          </div>
        </CardUser>
      </div>
    </div>
  );
};
export default DosenRekap;
