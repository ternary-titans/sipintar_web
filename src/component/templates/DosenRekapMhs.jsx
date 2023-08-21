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

  const [selectedKelas, setSelectedKelas] = useState("");

  const handleKelasChange = (event) => {
    setSelectedKelas(event.target.value);
  };

  const KelasOptions = [
    { value: "option1", label: "Option 1" },
    { value: "option2", label: "Option 2" },
    { value: "option3", label: "Option 3" },
  ];

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
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(
          `http://localhost:3000/api/dosen/1/rekapitulasiMahasiswa`
        );
        setRekapDosenMhsData(response.data.data.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    }
    fetchData();
  }, [rekapDosenMhsData, setRekapDosenMhsData]);

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
                value={selectedKelas}
                options={KelasOptions}
                onChange={handleKelasChange}
              />
            </div>
            <div style={{ marginTop: "30px" }}>
              {loading ? (
                <p>Loading...</p>
              ) : (
                <Table
                  columns={columns}
                  data={rekapDosenMhsData?.map((item, index) => ({
                    No: index + 1,
                    Nama: item.nama_mahasiswa,
                    NIM: item.nim,
                    Hadir: item.rekapitulasi.total_hadir,
                    Sakit: item.rekapitulasi.total_sakit,
                    Izin: item.rekapitulasi.total_izin,
                    Alpa: item.rekapitulasi.total_alpha,
                    //  Keterangan
                  }))}
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
