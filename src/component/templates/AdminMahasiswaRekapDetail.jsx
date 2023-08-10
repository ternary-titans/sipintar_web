import Admin from "./Admin";
import { Link } from "react-router-dom";
import Card from "../atoms/Card";
import Text from "../atoms/Text";
import TabelData from "../molecules/TabelData";
import Tabel from "../molecules/Tabel";

export const AdminMahasiswaRekapDetail = () => {
  const colomsData = [
    "Nama",
    "NIM",
    "Jurusan",
    "Program Studi",
    "Kelas",
    "Semester",
    "Dosen Wali",
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
    },
  ];
  const columns = [
    "No",
    "Mata Kuliah",
    "Total Jam Pertemuan",
    "Hadir",
    "Sakit",
    "Izin",
    "Alpa",
    "Aksi",
  ];
  const data = [
    {
      No: 1,
      "Mata Kuliah": "PBO",
      "Total Jam Pertemuan": "32 jam",
      Hadir: "30 jam",
      Sakit: "1",
      Izin: "1",
      Alpa: "1",
      Aksi: (
        <div className="text-center">
          <Link
            to="/admin/mahasiswa/rekap/detailmk/:id"
            className="text-blue-500 hover:text-blue-700 underline"
          >
            Detail
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

  const columns2 = ["Sakit", "Izin", "Alpa"];
  const data2 = [
    {
      Sakit: [":", "36", " jam"],
      Izin: [":", "84", " jam"],
      Alpa: [":", "84", " jam"],
    },
  ];
  const columnWidths = ["100px"];
  const fontSize = "14px";
  const textAlign = "start";

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
            <div className="flex flex-col mt-2 ml-2">
              <TabelData
                colomsData={columns2}
                dataData={data2}
                layout="vertical"
                columnWidths={columnWidths}
                fontSize={fontSize}
                textAlign={textAlign}
              />
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default AdminMahasiswaRekapDetail;
