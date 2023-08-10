import React, { useState } from "react";
import Dosen from "./Dosen";
import CardUser from "../atoms/CardUser";
import Text from "../atoms/Text";
import Input2 from "../atoms/InputDropdown";
import Table from "../molecules/Tabel";
import TabelData from "../molecules/TabelData";

export const DosenRekapBulan = () => {
  const [selectedTahunAjaran, setSelectedTahunAjaran] = useState("");
  const [selectedBulan, setSelectedBulan] = useState("");

  const handleTahunAjaranChange = (event) => {
    setSelectedTahunAjaran(event.target.value);
  };
  const handleBulanChange = (event) => {
    setSelectedBulan(event.target.value);
  };

  const TahunAjaranOptions = [
    { value: "option1", label: "Option 1" },
    { value: "option2", label: "Option 2" },
    { value: "option3", label: "Option 3" },
  ];

  const BulanOptions = [
    { value: "option1", label: "Januari" },
    { value: "option2", label: "Februari" },
    { value: "option3", label: "Maret" },
    { value: "option4", label: "April" },
    { value: "option5", label: "Mei" },
    { value: "option6", label: "Juni" },
    { value: "option7", label: "Juli" },
    { value: "option8", label: "Agustus" },
    { value: "option9", label: "September" },
    { value: "option10", label: "Oktober" },
    { value: "option11", label: "November" },
    { value: "option12", label: "Desember" },
  ];

  const columns = ["No", "Kelas", "Mata Kuliah", "Tanggal", "Jam Mengajar"];
  const data = [
    {
      No: 1,
      Kelas: "IK-3A",
      "Mata Kuliah": "Big Data",
      Tanggal: "21 Juni 2023",
      "Jam Mengajar": "6",
    },
  ];

  const columnAlignments = [
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

  const columns2 = [
    "Total Jam Mengajar",
    "Kewajiban Jam Mengajar",
    "Kelebihan Jam Mengajar",
  ];
  const data2 = [
    {
      "Total Jam Mengajar": [":", "120", " jam"],
      "Kewajiban Jam Mengajar": [":", "36", " jam"],
      "Kelebihan Jam Mengajar": [":", "84", " jam"],
    },
  ];
  const columnWidths = ["30px", "200px", "200px"];
  const fontSize = "14px";
  const textAlign = "start";

  return (
    <div>
      <Dosen />
      <div style={{ margin: "20px" }}>
        <CardUser width={1220} borderColor="#9ca3af" borderWidth={2}>
          <div>
            <Text type="title3" text="Rekapitulasi Mengajar Dosen" />
            <div className="flex gap-8 mt-5 w-80">
              <Input2
                label="Tahun Ajaran"
                value={selectedTahunAjaran}
                options={TahunAjaranOptions}
                onChange={handleTahunAjaranChange}
              />
              <Input2
                label="Bulan"
                value={selectedBulan}
                options={BulanOptions}
                onChange={handleBulanChange}
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
            <div className="flex flex-col">
              <TabelData
                colomsData={columns2}
                dataData={data2}
                layout="vertical"
                columnWidths={columnWidths}
                fontSize={fontSize}
                textAlign={textAlign}
              />
            </div>
          </div>
        </CardUser>
      </div>
    </div>
  );
};
export default DosenRekapBulan;
