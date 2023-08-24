import React, { useState, useEffect } from "react";
import Dosen from "./Dosen";
import CardUser from "../atoms/CardUser";
import Text from "../atoms/Text";
import Input2 from "../atoms/InputDropdown";
import Table from "../molecules/Tabel";
import axios from "../../api/axios";

export const DosenRekapMhs = () => {
  const content = "Konten CardUser yang panjang";
  const contentHeight = content.length * 16;

  const [selectedKelas, setSelectedKelas] = useState();
  const [kelasOptions, setKelasOptions] = useState([
    {
      id: "",
      nama_kelas: "Pilih Kelas",
    },
  ]);

  const handleKelasChange = (event) => {
    setSelectedKelas(event.target.value);
  };

  const columns = ["No", "Nama", "NIM", "Hadir", "Sakit", "Izin", "Alpa"];

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
  const pageSizeOptions = [5, 10, 25];

  const [rekapDosenMhsData, setRekapDosenMhsData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function fetchData() {
      try {
        const token = localStorage.getItem("userData")
          ? JSON.parse(localStorage.getItem("userData")).token
          : null;

        const id = localStorage.getItem("userData")
          ? JSON.parse(localStorage.getItem("userData")).id
          : null;

        // 1. Ambil data kelas
        const kelasResponse = await axios.get(`/kelas`, {
          headers: {
            Authorization: token,
          },
        });

        const dataKelas = [
          ...kelasOptions,
          ...kelasResponse.data.data.map((kelas) => ({
            id: kelas.id,
            nama_kelas: kelas.nama_kelas,
          })),
        ];

        setKelasOptions(dataKelas);

        // 2. Ambil data rekap presensi mahasiswa jika ada kelas terpilih
        if (selectedKelas) {
          setLoading(true);
          const rekapResponse = await axios.get(
            `/dosen/${id}/rekapitulasiMahasiswa`,
            {
              headers: {
                Authorization: token,
              },
              params: {
                kelas_id: selectedKelas,
              },
            }
          );
          setRekapDosenMhsData(rekapResponse.data.data.data);
        }

        // Selesai, matikan loading
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false); // Matikan loading jika terjadi error juga
      }
    }

    fetchData();
  }, [selectedKelas]);

  return (
    <div>
      <Dosen />
      <div style={{ margin: "20px" }}>
        <CardUser
          width={1220}
          height={contentHeight + 32}
          borderColor="#9ca3af"
          borderWidth={2}
        >
          <div>
            <Text type="title3" text="Rekapitulasi Presensi Mahasiswa" />
            <div className="flex gap-8 mt-5 w-72">
              <Input2
                label="Kelas"
                uniqueKeys="nama_kelas"
                value={selectedKelas}
                options={kelasOptions}
                onChange={handleKelasChange}
              />
            </div>
            <div style={{ marginTop: "30px" }}>
              {loading ? (
                <p>Loading...</p>
              ) : (
                <Table
                  columns={columns}
                  data={
                    selectedKelas
                      ? rekapDosenMhsData?.map((item, index) => ({
                          No: index + 1,
                          Nama: item.nama_mahasiswa,
                          NIM: item.nim,
                          Hadir: item.rekapitulasi.total_hadir,
                          Sakit: item.rekapitulasi.total_sakit,
                          Izin: item.rekapitulasi.total_izin,
                          Alpa: item.rekapitulasi.total_alpha,
                          //  Keterangan
                        }))
                      : rekapDosenMhsData
                  }
                  columnAlignments={columnAlignments}
                  headerBackgroundColor={headerBackgroundColor}
                  headerBorderColor={headerBorderColor}
                  pageSizeOptions={pageSizeOptions}
                  style={{ marginTop: "10px" }}
                />
              )}
            </div>
          </div>
        </CardUser>
      </div>
    </div>
  );
};
export default DosenRekapMhs;
