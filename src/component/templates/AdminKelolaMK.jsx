import Admin from "./Admin";
import React, { useState } from "react";
import Card from "../atoms/Card";
import Text from "../atoms/Text";
import Button from "../atoms/Button";
import Table from "../molecules/Tabel.jsx";
import KelolaMK from "../organism/KelolaMK";

export const AdminKelolaMK = () => {
  const [isActive, setIsActive] = useState(false);

  const handleOKClick = () => {
    setIsActive(true);
  };
  const columns = ["No", "Kode MK", "Mata Kuliah", "Aksi"];
  const data = [
    {
      No: 1,
      "Kode MK": "1234Mk",
      "Mata Kuliah": "Pemrogramam Basis Data",
      Aksi: (
        <div className="text-center text-red-500 hover:text-red-700 underline">
          Hapus
        </div>
      ),
    },
  ];

  const columnAlignments = ["center", "center", "center", "center"];
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
              <Text type="title" text="MATA KULIAH"></Text>
              <div>
                <Button variant="biru" onClick={handleOKClick}>
                  Tambah Mata Kuliah
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
      <KelolaMK isActive={isActive} setIsActive={setIsActive} />
    </div>
  );
};

export default AdminKelolaMK;
