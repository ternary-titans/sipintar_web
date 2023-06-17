import React, { useState } from "react";
import Card from "../atoms/Card";
import Text from "../atoms/Text";
import InputDropdown from "../atoms/InputDropdown";
import Button from "../atoms/Button";
import Table from "../molecules/Tabel"; //sementara hahaha

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
    "NIM",
    "Nama",
    "Sakit",
    "Izin",
    "Alpa",
    "Kompen",
    "Aksi",
  ];
  const data = [
    {
      No: 1,
      NIM: "33420021",
      Nama: "Rifka Anggun",
      Sakit: 0,
      Izin: 0,
      Alpa: 0,
      Kompen: 0,
      Aksi: "-",
    },
  ];

  const columnAlignments = [
    "center",
    "center",
    "left",
    "center",
    "center",
    "center",
    "center",
  ];
  const headerBackgroundColor = "white";
  const headerBorderColor = "#2563eb";
  const pageSizeOptions = [10, 25, 50];

  return (
    <div className="p-2">
      <Card size={{ height: "calc(100vh - 72px)", width: "81.5%" }}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "20px",
            marginLeft: "10px",
            marginRight: "10px",
          }}
        >
          <Text type="title3" text="Jadwal Kuliah"></Text>
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
              }}
            >
              Cari
            </Button>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            marginTop: "1rem",
            height: "32px",
          }}
        ></div>
        <div>
          <Text type="title3" text=" Tabel Jadwal Kuliah"></Text>
          <Button
            variant="biru"
            style={{
              display: "flex",
              marginTop: "1rem",
              height: "28px",
            }}
          >
            Edit
          </Button>
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
      </Card>
    </div>
  );
};

export default Jadwal;
