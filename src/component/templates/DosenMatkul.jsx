import React, { useEffect, useState } from "react";
import Dosen from "./Dosen";
import CardUser from "../atoms/CardUser";
import Text from "../atoms/Text";
import Table from "../molecules/Tabel";
import { Link } from "react-router-dom";
import axios from "axios";
import { useParams } from "react-router-dom";

export const DosenMatkul = () => {
  const { id } = useParams();
  const columns = [
    "No",
    "Kelas",
    "Mata Kuliah",
    "Topik",
    "Realisasi Tanggal",
    "Realisasi Jam",
    "Aksi",
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

  const [dosenMKData, setDosenMKData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchData();
  }, [id, fetchData]);
  async function fetchData() {
    try {
      const response = await axios.get(
        `http://localhost:3000/api/dosen/1/listPertemuan/${id}`
      );
      setDosenMKData(response.data.data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching data:", error);
      setLoading(false);
    }
  }

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
            {loading ? (
              <p>Loading...</p>
            ) : (
              <Table
                columns={columns}
                data={dosenMKData.map((item, index) => ({
                  No: index + 1,
                  Kelas: item.kelas,
                  Topik: item.topik_perkuliahan,
                  "Mata Kuliah": item.mataKuliah,
                  "Realisasi Tanggal": `${item.hari}, ${item.waktu_realisasi}`,
                  "Realisasi Jam": `${item.jam_mulai} - ${item.jam_akhir}`,
                  Aksi: (
                    <>
                      <Link to={`/dosen/mk/QR/${id}`}>
                        <button className="qr-button mb-1">Lihat QR</button>
                      </Link>
                      <br></br>
                      <Link to={`/dosen/mk/lihat/${id}`}>
                        <button className="rekap-button">Lihat Rekap</button>
                      </Link>
                    </>
                  ),
                }))}
                columnAlignments={columnAlignments}
                headerBackgroundColor={headerBackgroundColor}
                headerBorderColor={headerBorderColor}
                pageSizeOptions={pageSizeOptions}
                style={{ marginTop: "10px" }}
              />
            )}
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
