import React, { useState } from "react";
import Dosen from "./Dosen";
import CardUser from "../atoms/CardUser";
import Text from "../atoms/Text";
import Input2 from "../atoms/InputDropdown";
import Table from "../molecules/Tabel";

export const DosenRekapMhs = () => {
  const content = "Konten CardUser yang panjang";
  const contentHeight = content.length * 16;

  const [selectedKelas, setSelectedKelas] = useState("");
  const [selectedTahunAjaran, setSelectedTahunAjaran] = useState("");

  const handleKelasChange = (event) => {
    setSelectedKelas(event.target.value);
  };
  const handleTahunAjaranChange = (event) => {
    setSelectedTahunAjaran(event.target.value);
  };

  const KelasOptions = [
    { value: "option1", label: "Option 1" },
    { value: "option2", label: "Option 2" },
    { value: "option3", label: "Option 3" },
  ];
  const TahunAjaranOptions = [
    { value: "option1", label: "Option 1" },
    { value: "option2", label: "Option 2" },
    { value: "option3", label: "Option 3" },
  ];

  const columns = ["No", "Nama", "NIM", "Sakit", "Izin", "Alpa", "Keterangan"];
  const data = [
    {
      No: 1,
      Nama: "Rifka Anggun",
      NIM: "3.34.20.0.21",
      Sakit: "1",
      Izin: "1",
      Alpa: "1",
      Keterangan: "SP1",
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
  ];
  const headerBackgroundColor = "white";
  const headerBorderColor = "#2563eb";
  const pageSizeOptions = [5, 10, 25];

  return (
    <div>
      <Dosen />
      <div style={{ margin: "20px" }}>
        <CardUser
          width={1220}
          height={contentHeight + 32}
          borderColor="#9ca3af"
          borderWidth={2}
        >
          <div>
            <Text type="title3" text="Rekapitulasi Presensi Mahasiswa" />
            <div className="flex gap-8 mt-5 w-72">
              <Input2
                label="Kelas"
                value={selectedKelas}
                options={KelasOptions}
                onChange={handleKelasChange}
              />
              <Input2
                label="Tahun Ajaran"
                value={selectedTahunAjaran}
                options={TahunAjaranOptions}
                onChange={handleTahunAjaranChange}
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
          </div>
        </CardUser>
      </div>
    </div>
  );
};
export default DosenRekapMhs;
