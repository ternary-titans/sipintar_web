import Admin from "./Admin";
import Card from "../atoms/Card";
import Text from "../atoms/Text";
import TabelData from "../molecules/TabelData";
import CustomTable from "../molecules/CustomTable"; //belum fix

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
      Nama: " :",
      NIM: " :",
      Jurusan: " :",
      "Program Studi": " :",
      Kelas: " :",
      Semester: " :",
      "Dosen Wali": " :",
    },
    {
      Nama: "Rifka Anggun",
      NIM: "3.34.20.0.21",
      Jurusan: "Teknik Elektro",
      "Program Studi": "Teknik Informatika",
      Kelas: "IK3A",
      Semester: "VI(Enam",
      "Dosen Wali": "Amran Yobioktabera, S.Kom., M.Kom.",
    },
  ];

  const columns = [
    "No",
    "Hari,Tanggal",
    "Jam",
    "Jam Realisasi",
    "Mata Kuliah",
    "Topik",
    "Pertemuan ke- ",
    "Hadir",
    "Ijin",
    "Alpa",
    "Aktivasi",
  ];

  const data = [
    {
      no: "1",
      hari: "Senin",
      jam: ["a", "a"],
      jamRealisasi: ["a", "a"],
      mataKuliah: ["Indo", "Jepang"],
      topik: ["a", "b"],
      pertemuan: ["1", "2"],
      hadir: ["22", "22"],
      ijin: ["1", "1"],
      alpa: ["1", "1"],
      aktivasi: ["Slamet", "Bejo"],
    },
  ];

  return (
    <div className="bg-gray-300 w-screen h-screen">
      <Admin />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "start",
          height: "100vh",
        }}
      >
        <div style={{ marginTop: "10px" }}>
          <Card size={{ height: "calc(100vh - 72px)", width: "81.5%" }}>
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
                columnWidths={["1px", "1px", "250px"]}
                fontSize="14px"
                textAlign="left"
              />
            </div>
            <div style={{ margin: "10px 10px" }}>
              <CustomTable columns={columns} data={data} />
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default AdminMahasiswaRekapDetail;
