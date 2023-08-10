import React from "react";
import Dosen from "./Dosen";
import CardUser from "../atoms/CardUser.jsx";
import Text from "../atoms/Text";
import TableData from "../molecules/TabelData";
import Table from "../molecules/Tabel";
import Button from "../atoms/Button";
import { BsTrash } from "react-icons/bs";

export const DosenLihatRekap = () => {
  const content = "Konten CardUser yang panjang";
  const contentHeight = content.length * 20;

  const columns = [
    "Tahun Ajaran",
    "Kode Mata Kuliah",
    "Mata Kuliah",
    "Jadwal",
    "Dosen",
    "Ruangan",
    "Realisasi Tanggal",
    "Jam Perkuliahan",
    "Topik",
  ];
  const data = [
    {
      "Tahun Ajaran": "2022 - 2023",
      "Kode Mata Kuliah": "334-191-605",
      "Mata Kuliah": "Pemr. Basis Data Jaringan",
      Jadwal: "1-6(07.00-11.50)",
      Dosen: "Amran Yobioktabera, S.Kom., M.Kom.",
      Ruangan: "MSTIII/05",
      "Realisasi Tanggal": "18 Mei 2023",
      "Jam Perkuliahan": "07.00 - 08.00",
      Topik: "Topik 1",
    },
  ];

  const columnWidths = ["30px", "200px"];
  const fontSize = "12px";
  const textAlign = "start";

  const columns2 = ["No", "Nama", "NIM", "Presensi", "Validasi"];
  const data2 = [
    {
      No: 1,
      Nama: "Rifka Anggun",
      NIM: "3.34.20.0.21",
      Presensi: "08:05",
      Validasi: (
        <div className="flex items-center justify-center">
          <button onClick="" className="text-red-500">
            <BsTrash className="" />
          </button>
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
  ];
  const headerBackgroundColor = "white";
  const headerBorderColor = "#2563eb";
  const pageSizeOptions = [5, 10, 15];

  return (
    <div>
      <Dosen />
      <div className="flex flex-col h-auto ml-8 mt-8 mr-8">
        <CardUser
          width={1200}
          height={contentHeight + 32}
          borderColor="#9ca3af"
          borderWidth={2}
        >
          <div>
            <Text type="title3" text="Lihat Rekap Presensi" />
          </div>
          <div style={{ marginTop: "10px" }}>
            <TableData
              colomsData={columns}
              dataData={data}
              layout="vertical"
              columnWidths={columnWidths}
              fontSize={fontSize}
              textAlign={textAlign}
            />
          </div>
          <hr
            style={{
              width: "100%",
              height: "2px",
              background: "#9ca3af",
              margin: "6px 0",
              marginTop: "10px",
            }}
          />
          <div>
            <Table
              columns={columns2}
              data={data2}
              columnAlignments={columnAlignments}
              headerBackgroundColor={headerBackgroundColor}
              headerBorderColor={headerBorderColor}
              pageSizeOptions={pageSizeOptions}
              style={{ marginTop: "10px" }}
            />
          </div>
          <div className="mt-4">
            <Button variant="biru">Simpan</Button>
          </div>
        </CardUser>
      </div>
    </div>
  );
};
export default DosenLihatRekap;
