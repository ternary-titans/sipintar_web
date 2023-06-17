import Admin from "./Admin";
import Button from "../atoms/Button";
import Card from "../atoms/Card";
import Table from "../molecules/Tabel";
import Text from "../atoms/Text";
import Search from "../molecules/Search";

export const AdminMahasiswa = () => {
  const columns = [
    "No",
    "Nama",
    "NIM",
    "Kelas",
    "Prodi",
    "Jurusan",
    "Status",
    "Aksi",
  ];
  const data = [
    {
      No: 1,
      Nama: "Rifka Anggun Puspitaningrum",
      NIM: 12345,
      Kelas: "IK3A",
      Prodi: "D3-Teknik Informatika",
      Jurusan: "Teknik Elektro",
      Status: "Aktif",
      Aksi: "-",
    },
  ];

  const columnAlignments = [
    "center",
    "left",
    "center",
    "center",
    "center",
    "center",
    "center",
    "center",
  ];
  const headerBackgroundColor = "white";
  const headerBorderColor = "#2563eb";

  const handleSearch = (searchTerm) => {
    console.log("Search term:", searchTerm);
  };

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
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            marginTop: "44px",
          }}
        >
          <Button
            variant="biru"
            style={{ width: "200px", marginRight: "10px" }}
          >
            Masukkan Dosen Baru
          </Button>
          <Button variant="kuning">Rekap Presensi</Button>
        </div>
        <div style={{ marginTop: "10px" }}>
          <Card size={{ height: "calc(100vh - 164px)", width: "81.5%" }}>
            <div
              style={{
                marginLeft: "10px",
              }}
            >
              <Text type="title" text="TABEL DATA MAHASISWA"></Text>
            </div>

            <div
              style={{
                display: "flex",
                justifyContent: "flex-end",
                marginBottom: "20px",
              }}
            >
              <Search onSearch={handleSearch} />
            </div>
            <Table
              columns={columns}
              data={data}
              columnAlignments={columnAlignments}
              headerBackgroundColor={headerBackgroundColor}
              headerBorderColor={headerBorderColor}
              style={{ marginTop: "10px" }}
            />
          </Card>
        </div>
      </div>
    </div>
  );
};

export default AdminMahasiswa;
