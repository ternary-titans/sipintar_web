import React from "react";
import Dosen from "./Dosen";
import CardUser from "../atoms/CardUser";
import Text from "../atoms/Text";
import Table from "../molecules/Tabel";

export const DosenMatkul = () => {
  const columns = [
    "No",
    "Kelas",
    "Mata Kuliah",
    "Topik",
    "Realisasi Tanggal",
    "Realisasi Jam",
    "Aksi",
  ];
  const data = [
    {
      No: "1",
      Kelas: "IK3A",
      "Mata Kuliah": "Jaringan",
      Topik: "DHCP",
      "Realisasi Tanggal": "-",
      "Realisasi Jam": "-",
      Aksi: (
        <>
          <button className="qr-button mb-1">Lihat QR</button>
          <br></br>
          <button className="rekap-button">Lihat Rekap</button>
        </>
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
  ];
  const headerBackgroundColor = "white";
  const headerBorderColor = "#2563eb";
  const pageSizeOptions = [5, 10];

  return (
    <div>
      <Dosen />
      <div style={{ margin: "20px" }}>
        <CardUser
          width={1230}
          height={420}
          borderColor="#1e40af"
          borderWidth={2}
        >
          <div>
            <Text type="title3" text="List Pertemuan Kelas" />
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
        </CardUser>
      </div>
      <style>
        {`
          .qr-button {
            background-color: #facc15;
            color: #172554;
            border-radius: 4px;
            margin-right: 4px;
            padding: 2px;
            font-weight: bold;
          }

          .rekap-button {
            background-color: #172554;
            color: #facc15;;
            border-radius: 4px;
            padding: 2px;
            font-weight: bold;
          }
        `}
      </style>
    </div>
  );
};

export default DosenMatkul;
