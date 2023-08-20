import React, { useState, useEffect } from "react";
import Mahasiswa from "./Mahasiswa";
import CardUser from "../atoms/CardUser";
import Text from "../atoms/Text";
import Table from "../molecules/Tabel";
import axios from "axios";

export const MahasiswaRekap = () => {
  const content = "Konten CardUser yang panjang";
  const contentHeight = content.length * 32;

  const [showDetail, setShowDetail] = useState(-1);

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

  const [rekapMHSData, setRekapMHsData] = useState([]);
  const [loading, setLoading] = useState(true);

  const columns2 = [
    "No",
    "Tanggal Realisasi",
    "Jam Perkuliahan",
    "Topik",
    "Status",
  ];

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(
          `http://localhost:3000/api/mahasiswa/1/rekapitulasi`
        );
        setRekapMHsData(response.data.data.rekapitulasi);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    }
    fetchData();
  }, [rekapMHSData, setRekapMHsData]);

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
            {loading ? (
              <p>Loading...</p>
            ) : (
              <Table
                columns={columns}
                data={rekapMHSData.map((item, index) => ({
                  No: index + 1,
                  "Mata Kuliah": item.mataKuliah,
                  "Total Jam Pertemuan": item.total_jam,
                  Hadir: item.total_hadir,
                  Sakit: item.total_sakit,
                  Izin: item.total_izin,
                  Alpa: item.total_alpha,
                  Presentase: "50%",
                  Aksi: (
                    <button
                      style={{ textDecoration: "underline", color: "blue" }}
                      onClick={() => setShowDetail(index)}
                    >
                      Detail
                    </button>
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
          <hr className="w-full h-0.5 bg-gray-400 my-6 mt-8" />
          {showDetail !== -1 && (
            <div style={{ marginTop: "20px" }}>
              <Text type="title3" text="Detail Rekapitulasi Presensi " />
              <div>
                {loading ? (
                  <p>Loading...</p>
                ) : (
                  <Table
                    columns={columns2}
                    data={rekapMHSData[showDetail].jadwalPertemuan.map(
                      (item, index) => ({
                        No: index + 1,
                        "Tanggal Realisasi": formatDate(item.waktu_realisasi),
                        "Jam Perkuliahan": item.total_jam,
                        Topik: item.topik_perkuliahan,
                        Status: item.status_presensi,
                      })
                    )}
                    columnAlignments={columnAlignments}
                    headerBackgroundColor={headerBackgroundColor}
                    headerBorderColor={headerBorderColor2}
                    pageSizeOptions={pageSizeOptions}
                    style={{ marginTop: "10px" }}
                  />
                )}
              </div>
            </div>
          )}
        </CardUser>
      </div>
    </div>
  );
};
export default MahasiswaRekap;
