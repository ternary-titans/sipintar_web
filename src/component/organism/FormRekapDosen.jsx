import React, { useState } from "react";
import Card from "../atoms/Card";
import InputDropdown from "../atoms/InputDropdown";
import Text from "../atoms/Text";
import Button from "../atoms/Button";
import Table from "../molecules/Tabel";

export const FormRekapDosen = () => {
  const [selectedJurusan, setSelectedJurusan] = useState("");
  const [selectedNamaDosen, setSelectedNamaDosen] = useState("");
  const [selectedTahunAjaran, setSelectedTahunAjaran] = useState("");

  const handleJurusanChange = (event) => {
    setSelectedJurusan(event.target.value);
  };

  const handleNamaDosenChange = (event) => {
    setSelectedNamaDosen(event.target.value);
  };

  const handleTahunAjaranChange = (event) => {
    setSelectedTahunAjaran(event.target.value);
  };

  const columns = ["No", "Kelas", "MataKuliah", "Total", "Presentase", "Aksi"];
  const data = [
    {
      No: 1,
      Kelas: "IK3A",
      MataKuliah: "Jaringan",
      Total: "13",
      Presentase: "85%",
      Aksi: "-",
    },
  ];

  const columnAlignments = [
    "center",
    "left",
    "center",
    "center",
    "center",
    "center",
  ];
  const headerBackgroundColor = "white";
  const headerBorderColor = "#2563eb";

  const jurusanOptions = [
    { value: "option1", label: "Option 1" },
    { value: "option2", label: "Option 2" },
    { value: "option3", label: "Option 3" },
  ];

  const namaDosenOptions = [
    { value: "option4", label: "Option 4" },
    { value: "option5", label: "Option 5" },
    { value: "option6", label: "Option 6" },
  ];
  const tahunAjaranOptions = [
    { value: "option7", label: "Option 7" },
    { value: "option8", label: "Option 8" },
    { value: "option9", label: "Option 9" },
  ];

  return (
    <div className="p-2">
      <Card size={{ height: "calc(100vh - 72px)", width: "81.5%" }}>
        <div className="mb-3">
          <Text type="title3" text="Rekap Presensi Dosen"></Text>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          <InputDropdown
            label="Jurusan"
            value={selectedJurusan}
            options={jurusanOptions}
            onChange={handleJurusanChange}
          />
          <InputDropdown
            label="Nama Dosen"
            value={selectedNamaDosen}
            options={namaDosenOptions}
            onChange={handleNamaDosenChange}
          />
          <InputDropdown
            label="Tahun Ajaran"
            value={selectedTahunAjaran}
            options={tahunAjaranOptions}
            onChange={handleTahunAjaranChange}
          />
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            marginTop: "1rem",
            height: "32px",
          }}
        >
          <Button variant="kuning">Cari</Button>
        </div>
        <div>
          <div className="mt-4 mb-3">
            <Text type="title3" text="Tabel Rekap Presensi Dosen"></Text>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "flex-start",
              marginTop: "10px",
              marginBottom: "20px",
              height: "32px",
            }}
          >
            <Button
              variant="yes"
              style={{
                height: "32px",
                width: "150px",
              }}
            >
              Export to Excel
            </Button>
          </div>
          <div>
            <Table
              columns={columns}
              data={data}
              columnAlignments={columnAlignments}
              headerBackgroundColor={headerBackgroundColor}
              headerBorderColor={headerBorderColor}
              style={{ marginTop: "10px" }}
            />
          </div>
        </div>
      </Card>
    </div>
  );
};

export default FormRekapDosen;
