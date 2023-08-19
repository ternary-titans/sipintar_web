import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Mahasiswa from "./Mahasiswa";
import CardUser from "../atoms/CardUser";
import Text from "../atoms/Text";
import Table from "../molecules/Tabel";
import axios from "axios";
import { useParams } from "react-router-dom";

export const MahasiswaMatkul = () => {
  const { id } = useParams();
  const columns = ["No", "Hari", "Waktu", "Topik", "Dosen", "Ruangan", "Aksi"];

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

  const [mahasiswaMKData, setMahasiswaMKData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchData();
  }, [id, fetchData]);
  async function fetchData() {
    try {
      const response = await axios.get(
        `http://localhost:3000/api/mahasiswa/1/listPertemuan/${id}`
      );
      setMahasiswaMKData(response.data.data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching data:", error);
      setLoading(false);
    }
  }

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
              <Text type="title3" text="Jadwal Pertemuan Mata Kuliah A" />
            </div>
            <div>
              <Link to="/mahasiswa/aktivasi">
                <button className="aktivasi-button">AKTIVASI</button>
              </Link>
            </div>
          </div>

          <div>
            {loading ? (
              <p>Loading...</p>
            ) : (
              <Table
                columns={columns}
                data={mahasiswaMKData.map((item, index) => ({
                  No: index + 1,
                  Hari: `${item.hari}, ${item.waktu_realisasi}`,
                  Waktu: `${item.jam_mulai} - ${item.jam_akhir}`,
                  Topik: item.topik_perkuliahan,
                  Dosen: item.dosen,
                  Ruangan: item.ruangan,
                  Aksi: (
                    <Link to="/mahasiswa/qr/:id">
                      <button className="qr-button ml-2 mb-1">Lihat QR</button>
                    </Link>
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
