import Admin from "./Admin";
import Card from "../atoms/Card";
import Text from "../atoms/Text";
import Table from "../molecules/Tabel";

export const AdminRekapDetailDosen = () => {
  const columns = [
    "No",
    "Hari,Tanggal Realisasi",
    "Jam Realisasi",
    "Mata Kuliah",
    "Topik",
    "Hadir",
    "Sakit",
    "Izin",
    "Alpa",
  ];

  const data = [
    {
      No: 1,
      "Hari,Tanggal Realisasi": "Senin, 4 Januari 2023",
      "Jam Realisasi": "08:00 - 09:30",
      "Mata Kuliah": "Basis Data",
      Topik: "Topik 1",
      Hadir: "22",
      Sakit: "1",
      Izin: "1",
      Alpa: "1",
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
    "center",
  ];
  const headerBackgroundColor = "white";
  const headerBorderColor = "#2563eb";
  const pageSizeOptions = [10, 25, 50];

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
              <Text type="title" text="REKAP PRESENSI DOSEN"></Text>
            </div>
            <div style={{ margin: "10px 10px" }}>
              <Table
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

export default AdminRekapDetailDosen;
