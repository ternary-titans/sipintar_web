import Admin from "./Admin";
import React, { useState } from "react";
import Card from "../atoms/Card";
import Text from "../atoms/Text";
import Button from "../atoms/Button";
import Table from "../molecules/Tabel.jsx";
import KelolaKelas from "../organism/KelolaKelas";
import UbahTA from "../organism/UbahTA";

export const AdminKelas = () => {
  const [isActive, setIsActive] = useState(false);

  const [isActiveTA, setIsActiveTA] = useState(false);

  const handleOKClick = () => {
    setIsActive(true);
  };

  const handleOKClickTA = () => {
    setIsActiveTA(true);
  };

  const columns = [
    "No",
    "Kelas",
    "Program Studi",
    "Jurusan",
    "Tahun Ajaran",
    "Aksi",
  ];
  const data = [
    {
      No: 1,
      Kelas: "IK-3A",
      "Program Studi": "Informatika",
      Jurusan: "Teknik Elektro",
      "Tahun Ajaran": "2022/2023 Genap",
      Aksi: (
        <div className="text-center text-red-500 hover:text-red-700 underline">
          Hapus
        </div>
      ),
    },
  ];

  const columnAlignments = ["center", "center", "center", "center", "center"];
  const headerBackgroundColor = "white";
  const headerBorderColor = "#2563eb";
  const pageSizeOptions = [10, 20];

  return (
    <div
      className={`bg-gray-300 h-screen relative ${
        isActive ? "backdrop-blur-2xl" : ""
      }`}
    >
      <Admin />
      <div className="flex flex-col justify-start">
        <div style={{ marginTop: "50px" }}>
          <Card size={{ height: "31rem", width: "78%" }}>
            <div className="ml-2 flex gap-30 justify-between items-center">
              <Text type="title" text="JURUSAN"></Text>
              <div className="flex flex-row gap-4">
                <Button variant="biru" onClick={handleOKClick}>
                  Tambah Kelas
                </Button>
                <Button variant="biru" onClick={handleOKClickTA}>
                  Ubah Tahun Ajaran
                </Button>
              </div>
            </div>
            <div>
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
      </div>
      <KelolaKelas isActive={isActive} setIsActive={setIsActive} />
      <UbahTA isActive={isActiveTA} setIsActive={setIsActiveTA} />
    </div>
  );
};

export default AdminKelas;
