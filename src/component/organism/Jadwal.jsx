import React, { useState } from "react";
import Card from "../atoms/Card";
import Text from "../atoms/Text";
import InputDropdown from "../atoms/InputDropdown";
import Button from "../atoms/Button";
import Table from "../molecules/Tabel";
import { Link } from "react-router-dom";

export const Jadwal = () => {
  const [selectedJurusan, setSelectedJurusan] = useState("");
  const [selectedProdi, setSelectedProdi] = useState("");
  const [selectedKelas, setSelectedKelas] = useState("");
  const [selectedTahunAjaran, setSelectedTahunAjaran] = useState("");

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

  const jurusanOptions = [
    { value: "option1", label: "Option 1" },
    { value: "option2", label: "Option 2" },
    { value: "option3", label: "Option 3" },
  ];

  const prodiOptions = [
    { value: "option4", label: "Option 4" },
    { value: "option5", label: "Option 5" },
    { value: "option6", label: "Option 6" },
  ];
  const kelasOptions = [
    { value: "option7", label: "Option 7" },
    { value: "option8", label: "Option 8" },
    { value: "option9", label: "Option 9" },
  ];

  const tahunajaranOptions = [
    { value: "option10", label: "Option 10aaaaaaaaaaaaaa" },
    { value: "option11", label: "Option 11aaaaaaaaaaaaaa" },
    { value: "option12", label: "Option 12aaaaaaaaaaaaaa" },
  ];

  const columns = [
    "No",
    "Hari",
    "Waktu",
    "Kode Mata Kuliah",
    "Mata Kuliah",
    "Total Jam",
    "Dosen",
    "Ruangan",
    "Aksi",
  ];
  const data = [
    {
      No: 1,
      Hari: "Senin",
      Waktu: "08:00 - 09:30",
      "Kode Mata Kuliah": "",
      "Mata Kuliah": "",
      "Total Jam": "2",
      Dosen: "",
      Ruangan: "",
      Aksi: (
        <div className="text-center">
          <Link
            to="/admin/editjadwal/:id"
            className="text-blue-500 hover:text-blue-700 underline"
          >
            Edit
          </Link>
        </div>
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
  const pageSizeOptions = [10, 25, 50];

  return (
    <div className="p-0">
      <Card size={{ height: "28rem", width: "78%" }}>
        <div className="flex flex-col gap-4">
          <Text type="title3" text="Jadwal Kuliah"></Text>
          <div className="overflow-y-scroll">
            <InputDropdown
              label="Jurusan"
              value={selectedJurusan}
              options={jurusanOptions}
              onChange={handleJurusanChange}
            />
            <InputDropdown
              label="Program Studi"
              value={selectedProdi}
              options={prodiOptions}
              onChange={handleProdiChange}
            />
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <div style={{ display: "flex", gap: "30px" }}>
                <InputDropdown
                  label="Kelas"
                  value={selectedKelas}
                  options={kelasOptions}
                  onChange={handleKelasChange}
                />
                <InputDropdown
                  label="Tahun Ajaran"
                  value={selectedTahunAjaran}
                  options={tahunajaranOptions}
                  onChange={handleTahunAjaranChange}
                />
              </div>
              <Button
                variant="kuning"
                style={{
                  display: "flex",
                  justifyContent: "flex-end",
                  marginTop: "1rem",
                  height: "28px",
                  marginRight: "6px",
                }}
              >
                Cari
              </Button>
            </div>
            <div className="flex justify-end mt-6"></div>
            <div>
              <Text type="title3" text=" Tabel Jadwal Kuliah"></Text>
              <div className="mr-2">
                <Table
                  columns={columns}
                  data={data}
                  columnAlignments={columnAlignments}
                  headerBackgroundColor={headerBackgroundColor}
                  headerBorderColor={headerBorderColor}
                  pageSizeOptions={pageSizeOptions}
                />
              </div>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default Jadwal;
