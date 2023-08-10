import Admin from "./Admin";
import { Link } from "react-router-dom";
import Card from "../atoms/Card";
import Text from "../atoms/Text";
import TabelData from "../molecules/TabelData";
import Tabel from "../molecules/Tabel";

export const AdminMahasiswaRekapDetailMK = () => {
  const colomsData = [
    "Nama",
    "NIM",
    "Jurusan",
    "Program Studi",
    "Kelas",
    "Semester",
    "Dosen Wali",
    "Mata Kuliah",
    "Dosen Pengajar",
  ];
  const dataData = [
    {
      Nama: ": Rifka Anggun",
      NIM: ": 3.34.20.0.21",
      Jurusan: ": Teknik Elektro",
      "Program Studi": ": Teknik Informatika",
      Kelas: ": IK3A",
      Semester: ": VI(Enam)",
      "Dosen Wali": ": Amran Yobioktabera, S.Kom., M.Kom.",
      "Mata Kuliah": ": Sistem Informasi",
      "Dosen Pengajar": ": Amran Yobioktabera, S.Kom., M.Kom.",
    },
  ];
  const columns = [
    "No",
    "Tanggal dan Jam Realisasi",
    "Topik",
    "Status",
    "Aksi",
  ];
  const data = [
    {
      No: 1,
      "Tanggal dan Jam Realisasi": "Senin, 21 Januari 2023 08:00 - 09:00",
      Topik: "Topik 1",
      Status: "Sakit",
      Aksi: (
        <div className="text-center">
          <Link
            to="/admin/mahasiswa/rekap/edit/:id"
            className="text-blue-500 hover:text-blue-700 underline"
          >
            Edit
          </Link>
        </div>
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
    "center",
  ];
  const headerBackgroundColor = "white";
  const headerBorderColor = "#2563eb";
  const pageSizeOptions = [16, 25, 50];

  return (
    <div className="bg-gray-300 h-screen">
      <Admin />
      <div className="flex flex-col justify-start">
        <div style={{ marginTop: "50px" }}>
          <Card size={{ height: "31rem", width: "78%" }}>
            <div
              style={{
                marginLeft: "10px",
              }}
            >
              <Text type="title" text="REKAP PRESENSI MAHASISWA"></Text>
            </div>
            <div style={{ margin: "10px 10px" }}>
              <TabelData
                colomsData={colomsData}
                dataData={dataData}
                layout="vertical"
                columnWidths={["250px"]}
                fontSize="14px"
                textAlign="left"
              />
            </div>
            <div className="mt-2 overflow-y-scroll">
              <Tabel
                columns={columns}
                data={data}
                columnAlignments={columnAlignments}
                headerBackgroundColor={headerBackgroundColor}
                headerBorderColor={headerBorderColor}
                pageSizeOptions={pageSizeOptions}
                style={{ marginTop: "10px" }}
              />
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default AdminMahasiswaRekapDetailMK;
