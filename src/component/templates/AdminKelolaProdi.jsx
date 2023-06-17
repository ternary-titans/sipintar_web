import Admin from "./Admin";
import Card from "../atoms/Card";
import Text from "../atoms/Text";
import Button from "../atoms/Button";
import Table from "../molecules/Tabel.jsx";

export const AdminKelolaProdi = () => {
  const columns = ["No", "Kode Prodi", "Program Studi", "Edit", "Hapus"];
  const data = [
    {
      No: 1,
      "Kode Prodi": "IK",
      "Program Studi": "D3 Teknik Informatika",
      Edit: "-",
      Hapus: "-",
    },
  ];

  const columnAlignments = ["center", "center", "center", "center", "center"];
  const headerBackgroundColor = "white";
  const headerBorderColor = "#2563eb";
  const pageSizeOptions = [];

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
                display: "flex",
                gap: "30px",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Text type="title" text="PROGRAM STUDI"></Text>
              <div>
                <Button
                  variant="biru"
                  style={{
                    display: "flex",
                    justifyContent: "flex-end",
                    height: "36px",
                    marginRight: "10px",
                  }}
                >
                  {" "}
                  Tambah Prodi{" "}
                </Button>
              </div>
            </div>
            <div>
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

export default AdminKelolaProdi;
