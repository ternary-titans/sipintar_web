import React, { useEffect, useState } from "react";
import Dosen from "./Dosen";
import CardUser from "../atoms/CardUser";
import Text from "../atoms/Text";
import Table from "../molecules/Tabel";
import { Link } from "react-router-dom";
import axios from "../../api/axios";
import { useParams } from "react-router-dom";

export const DosenMatkul = () => {
  const { id } = useParams();
  const [dosenMKData, setDosenMKData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchData();
  }, [id]);

  async function fetchData() {
    try {
      const token = localStorage.getItem("userData")
        ? JSON.parse(localStorage.getItem("userData")).token
        : null;

      const dosenId = localStorage.getItem("userData")
        ? JSON.parse(localStorage.getItem("userData")).id
        : null;

      const response = await axios.get(
        `/dosen/${dosenId}/listPertemuan/${id}`,
        {
          headers: {
            Authorization: token,
          },
        }
      );
      setDosenMKData(response.data.data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching data:", error);
      setLoading(false);
    }
  }

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

  function formatDate(dateString) {
    const dateObject = new Date(dateString);

    const months = [
      "Januari",
      "Februari",
      "Maret",
      "April",
      "Mei",
      "Juni",
      "Juli",
      "Agustus",
      "September",
      "Oktober",
      "November",
      "Desember",
    ];

    const day = dateObject.getDate();
    const month = dateObject.getMonth();
    const year = dateObject.getFullYear();

    const formattedDate = `${day} ${months[month]} ${year}`;
    return formattedDate;
  }

  const handleTutupPresensi = async (aktivasiId) => {
    try {
      const token = localStorage.getItem("userData")
        ? JSON.parse(localStorage.getItem("userData")).token
        : null;

      const response = await axios.put(
        `/aktivasiPerkuliahan/${aktivasiId}`,
        {},
        {
          headers: {
            Authorization: token,
          },
        }
      );
    } catch (error) {}
  };

  const formattedData = dosenMKData?.map((item, index) => ({
    No: index + 1,
    Kelas: item.kelas,
    Topik: item.topik_perkuliahan,
    "Mata Kuliah": item.mataKuliah,
    "Realisasi Tanggal": `${item.hari}, ${formatDate(item.waktu_realisasi)}`,
    "Realisasi Jam": `${item.jam_mulai} - ${item.jam_akhir}`,
    Aksi: (
      <>
        <div className="flex flex-row gap-0 justify-center">
          <Link to={`/dosen/mk/QR/${item.id}`}>
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
          <button
            className="bg-red-400 text-blue-950 font-bold w-30 px-2 py-1 rounded hover:bg-red-600"
            onClick={() => handleTutupPresensi(item.id)}
          >
            Tutup Presensi
          </button>
        </div>
      </>
    ),
  }));

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
                data={formattedData}
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
    </div>
  );
};

export default DosenMatkul;
