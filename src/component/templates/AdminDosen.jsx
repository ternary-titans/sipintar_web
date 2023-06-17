import Admin from "./Admin";
import Button from "../atoms/Button";
import Card from "../atoms/Card";
import Table from "../molecules/Tabel";
import Text from "../atoms/Text";
import Search from "../molecules/Search";

export const AdminDosen = () => {
  const columns = ["No", "Nama", "NIP", "Password", "Edit", "Hapus"];
  const data = [
    {
      No: 1,
      Nama: "Rifka",
      NIP: 12345,
      Password: "R123",
      Edit: "-",
      Hapus: "-",
    },
    {
      No: 2,
      Nama: "Anggun",
      NIP: 12345,
      Password: "A123",
      Edit: "-",
      Hapus: "-",
    },
  ];

  const columnAlignments = [
    "center",
    "left",
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
              <Text type="title" text="TABEL DATA DOSEN"></Text>
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
            <div>
              <Table
                columns={columns}
                data={data}
                columnAlignments={columnAlignments}
                headerBackgroundColor={headerBackgroundColor}
                headerBorderColor={headerBorderColor}
                style={{ marginTop: "10px" }}
              />
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default AdminDosen;
