import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Mahasiswa from "./Mahasiswa";
import CardUser from "../atoms/CardUser";
import Text from "../atoms/Text";
import Table from "../molecules/Tabel";
import axios from "../../api/axios";
import { useParams } from "react-router-dom";

export const MahasiswaMatkul = () => {
  const { id } = useParams();

  useEffect(() => {
    const token = localStorage.getItem("userData")
      ? JSON.parse(localStorage.getItem("userData")).token
      : null;

    const mahasiswaId = localStorage.getItem("userData")
      ? JSON.parse(localStorage.getItem("userData")).id
      : null;

    async function fetchData() {
      try {
        const response = await axios.get(
          `/mahasiswa/${mahasiswaId}/listPertemuan/${id}`,
          {
            headers: {
              Authorization: token,
            },
          }
        );
        setMahasiswaMKData(response.data.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    }
    fetchData();
  }, [id]);

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

  const formatted = mahasiswaMKData?.map((item, index) => ({
    No: index + 1,
    Hari: `${item.hari}`,
    Waktu: `${item.jam_mulai} - ${item.jam_akhir}`,
    Topik: item.topik_perkuliahan,
    Dosen: item.dosen,
    Ruangan: item.ruangan,
    Aksi: (
      <Link to={`/mahasiswa/qr/${item.id}`}>
        <button
          className={`p-2 font-bold mr-2 rounded mb-1 ${
            item.status
              ? "bg-[#facc15]"
              : "bg-gray-200 text-gray-500 cursor-not-allowed"
          }`}
          disabled={item.status ? false : true}
        >
          Lihat QR
        </button>
      </Link>
    ),
  }));

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
              <Text type="title3" text="Jadwal Pertemuan Mata Kuliah" />
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
                data={formatted}
                columnAlignments={columnAlignments}
                headerBackgroundColor={headerBackgroundColor}
                headerBorderColor={headerBorderColor}
                pageSizeOptions={pageSizeOptions}
                style={{ marginTop: "10px" }}
                pagination={false}
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
