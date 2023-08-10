import React, { useState } from "react";
import { Link } from "react-router-dom";
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

  const columns = [
    "No",
    "Kelas",
    "Mata Kuliah",
    "Total Jam Perkuliahan",
    "Presentase",
    "Aksi",
  ];
  const data = [
    {
      No: "1",
      Kelas: "IK3A",
      "Mata Kuliah": "Jaringan",
      "Total Jam Perkuliahan": "13",
      Presentase: "85%",
      Aksi: (
        <div className="flex flex-col gap-2 items-center">
          <div className="text-center">
            <Link
              to="/admin/dosen/rekap/:id"
              className="text-blue-500 hover:text-blue-700 underline"
            >
              Detail
            </Link>
          </div>
        </div>
      ),
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
  const pageSizeOptions = [10, 25, 50];

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
    <div>
      <Card size={{ height: "31rem", width: "79%" }}>
        <div className="mb-3">
          <Text type="title3" text="Rekap Presensi Dosen"></Text>
        </div>
        <div className="overflow-y-scroll">
          <div className="flex flex-col gap-2">
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
          <div className="flex justify-end mt-4 mr-2 h-8">
            <Button variant="kuning">Cari</Button>
          </div>
          <div>
            <div className="mt-2 mb-1">
              <Text type="title3" text="Tabel Rekap Presensi Dosen"></Text>
            </div>
            <div className="mt-2 mr-2">
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
          </div>
        </div>
      </Card>
    </div>
  );
};

export default FormRekapDosen;
