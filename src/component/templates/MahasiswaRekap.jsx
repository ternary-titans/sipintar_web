import React, { useState } from "react";
import Mahasiswa from "./Mahasiswa";
import CardUser from "../atoms/CardUser";
import Text from "../atoms/Text";
import Table from "../molecules/Tabel";
import TableData from "../molecules/TabelData";

export const MahasiswaRekap = () => {
  const content = "Konten CardUser yang panjang";
  const contentHeight = content.length * 32;

  const [showTable2, setShowTable2] = useState(false);

  const columns = [
    "No",
    "Mata Kuliah",
    "Total Jam Pertemuan",
    "Hadir",
    "Sakit",
    "Izin",
    "Alpa",
    "Presentase",
    "Aksi",
  ];
  const data = [
    {
      No: 1,
      "Mata Kuliah": "Bais Data",
      "Total Jam Pertemuan": "32 jam",
      Hadir: "16 jam",
      Sakit: "1 jam",
      Izin: "1 jam",
      Alpa: "0",
      Presentase: "50%",
      Aksi: (
        <button
          style={{ textDecoration: "underline", color: "blue" }}
          onClick={() => setShowTable2(true)}
        >
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
    "Status",
  ];
  const data2 = [
    {
      No: 1,
      "Tanggal Realisasi": "10 mei 2023",
      "Jam Perkuliahan": "09.00 - 10.00",
      Topik: "Topik 1",
      Status: "Hadir",
    },
  ];
  const columns3 = ["Mata Kuliah", "Dosen"];
  const data3 = [
    {
      "Mata Kuliah": "Basis Data",
      Dosen: "Amran Yobioktabera S.Kom., M.Kom.",
    },
  ];
  const columnWidths = ["30px", "250px"];
  const fontSize = "14px";
  const textAlign = "start";

  return (
    <div>
      <Mahasiswa />
      <div style={{ margin: "20px" }}>
        <CardUser
          width={1220}
          height={contentHeight}
          borderColor="#9ca3af"
          borderWidth={2}
        >
          <div>
            <Text type="title3" text="Rekapitulasi Presensi Mahasiswa" />
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
          <hr className="w-full h-0.5 bg-gray-400 my-6 mt-8" />
          {showTable2 && (
            <div style={{ marginTop: "20px" }}>
              <Text type="title3" text="Detail Rekapitulasi Presensi " />
              <div style={{ marginTop: "10px" }}>
                <TableData
                  colomsData={columns3}
                  dataData={data3}
                  layout="vertical"
                  columnWidths={columnWidths}
                  fontSize={fontSize}
                  textAlign={textAlign}
                />
              </div>
              <div>
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
          )}
        </CardUser>
      </div>
    </div>
  );
};
export default MahasiswaRekap;
