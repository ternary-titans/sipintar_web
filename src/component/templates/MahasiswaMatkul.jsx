import React from "react";
import { Link } from "react-router-dom";
import Mahasiswa from "./Mahasiswa";
import CardUser from "../atoms/CardUser";
import Text from "../atoms/Text";
import Table from "../molecules/Tabel";

export const MahasiswaMatkul = () => {
  const columns = ["No", "Hari", "Waktu", "Dosen", "Ruangan", "Aksi"];
  const data = [
    {
      No: "1",
      Hari: "Senin",
      Waktu: "08:00 - 09:00",
      Dosen: "Pak Amran",
      Ruangan: "MST II/06",
      Aksi: (
        <Link to="/mahasiswa/qr">
          <button className="qr-button ml-2 mb-1">Lihat QR</button>
        </Link>
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
      <Mahasiswa />
      <div style={{ margin: "20px" }}>
        <CardUser
          width={1230}
          height={420}
          borderColor="#1e40af"
          borderWidth={2}
        >
          <div className="flex flex-row justify-between">
            <div>
              <Text type="title3" text="Jadwal Pertemuan Mara Kuliah A" />
            </div>
            <div>
              <Link to="/mahasiswa/aktivasi">
                <button className="aktivasi-button">AKTIVASI</button>
              </Link>
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
        </CardUser>
      </div>
      <style>
        {`
        .aktivasi-button {
            background-color: #172554;
            color: #facc15;;
            border-radius: 4px;
            padding: 4px;
            font-weight: bold;
            width: 100px;
          }
          .qr-button {
            background-color: #facc15;
            color: #172554;
            border-radius: 4px;
            margin-right: 4px;
            padding: 2px;
            font-weight: bold;
          }
        `}
      </style>
    </div>
  );
};

export default MahasiswaMatkul;
