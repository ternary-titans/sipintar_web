import React, { useState, useEffect } from "react";
import Dosen from "./Dosen";
import CardUser from "../atoms/CardUser";
import Text from "../atoms/Text";
import Table from "../molecules/Tabel";
import axios from "../../api/axios";

export const DosenRekap = () => {
  const [showDetail, setShowDetail] = useState(-1);
  const columns = [
    "No",
    "Kelas",
    "Mata Kuliah",
    "Total Jam Pertemuan",
    "Total Jam Kehadiran",
    "Total Ketidakhadiran",
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

  const [rekapDosenData, setRekapDosenData] = useState([]);
  const [loading, setLoading] = useState(true);

  const columns2 = [
    "No",
    "Tanggal Realisasi",
    "Jam Perkuliahan",
    "Topik",
    "Hadir",
    "Sakit",
    "Izin",
    "Alpa",
  ];

  useEffect(() => {
    async function fetchData() {
      const token = localStorage.getItem("userData")
        ? JSON.parse(localStorage.getItem("userData")).token
        : null;

      const id = localStorage.getItem("userData")
        ? JSON.parse(localStorage.getItem("userData")).id
        : null;

      try {
        const response = await axios.get(`/dosen/${id}/rekapitulasiPresensi`, {
          headers: {
            Authorization: token,
          },
        });
        setRekapDosenData(response.data.data.rekapitulasi);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    }
    fetchData();
  }, [rekapDosenData, setRekapDosenData]);

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
      <Dosen />
      <div style={{ margin: "20px" }}>
        <CardUser width={1220} borderColor="#9ca3af" borderWidth={2}>
          <div>
            <Text type="title3" text="Rekapitulasi Presensi Dosen" />
            <div style={{ marginTop: "30px" }}>
              {loading ? (
                <p>Loading...</p>
              ) : (
                <Table
                  columns={columns}
                  data={rekapDosenData?.map((item, index) => ({
                    No: index + 1,
                    Kelas: item.kelas,
                    "Mata Kuliah": item.mataKuliah,
                    "Total Jam Pertemuan": item.total_jam,
                    "Total Jam Kehadiran": item.total_hadir,
                    "Total Ketidakhadiran": item.total_alpha,
                    // Presentase: "50%",
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
            <hr className="w-full h-0.5 bg-gray-300 mt-20 mb-2" />
            {showDetail !== -1 && (
              <>
                <Text
                  type="title3"
                  text={`Rekapitulasi Presensi Dosen > ${rekapDosenData[showDetail].kelas} > ${rekapDosenData[showDetail].mataKuliah}`}
                />
                <div style={{ marginTop: "30px" }}>
                  <div style={{ marginTop: "20px" }}>
                    <Text type="title3" text="Detail Rekapitulasi Presensi" />
                    <div>
                      {loading ? (
                        <p>Loading...</p>
                      ) : (
                        <Table
                          columns={columns2}
                          data={rekapDosenData[showDetail].jadwalPertemuan.map(
                            (item, index) => ({
                              No: index + 1,
                              "Tanggal Realisasi": formatDate(
                                item.waktu_realisasi
                              ),
                              "Jam Perkuliahan": `${item.jam_mulai} - ${item.jam_akhir}`,
                              Topik: item.topik_perkuliahan,
                              Hadir: item.detail.total_hadir + " Mahasiswa",
                              Sakit: item.detail.total_sakit + " Mahasiswa",
                              Izin: item.detail.total_izin + " Mahasiswa",
                              Alpa: item.detail.total_alpha + " Mahasiswa",
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
                </div>
              </>
            )}
          </div>
        </CardUser>
      </div>
    </div>
  );
};
export default DosenRekap;
