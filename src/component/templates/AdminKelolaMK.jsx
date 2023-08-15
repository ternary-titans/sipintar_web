import Admin from "./Admin";
import React, { useState, useEffect } from "react";
import Card from "../atoms/Card";
import Text from "../atoms/Text";
import Button from "../atoms/Button";
import Table from "../molecules/Tabel.jsx";
import KelolaMK from "../organism/KelolaMK";
import { FaTrash } from "react-icons/fa";
import axios from "axios";

export const AdminKelolaMK = () => {
  const [isActive, setIsActive] = useState(false);
  const [MatakuliahData, setMatakuliahData] = useState([]);
  const [loading, setLoading] = useState(true);

  const handleSubmit = () => {
    setIsActive(true);
  };

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(
          "http://localhost:3000/api/mataKuliah"
        );
        setMatakuliahData(response.data.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    }

    fetchData();
  }, [MatakuliahData, setMatakuliahData]);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:3000/api/mataKuliah/${id}`);
      const updatedData = MatakuliahData.filter((item) => item.id !== id);
      setMatakuliahData(updatedData);
    } catch (error) {
      console.error("Error deleting data:", error);
    }
  };
  const columns = ["No", "Kode MK", "Mata Kuliah", "Aksi"];
  const columnAlignments = ["center", "center", "center", "center"];
  const headerBackgroundColor = "white";
  const headerBorderColor = "#2563eb";
  const pageSizeOptions = [10, 20];

  return (
    <div
      className={`bg-gray-300 h-screen relative ${
        isActive ? "backdrop-blur-2xl" : ""
      }`}
    >
      <Admin />
      <div className="flex flex-col justify-start">
        <div style={{ marginTop: "50px" }}>
          <Card size={{ height: "31rem", width: "78%" }}>
            <div className="ml-2 flex gap-30 justify-between items-center">
              <Text type="title" text="MATA KULIAH"></Text>
              <div>
                <Button variant="biru" onClick={handleSubmit}>
                  Tambah Mata Kuliah
                </Button>
              </div>
            </div>
            <div>
              {loading ? (
                <p>Loading...</p>
              ) : (
                <Table
                  columns={columns}
                  data={MatakuliahData.map((item, index) => ({
                    No: index + 1,
                    "Kode MK": item.kode_mk,
                    "Mata Kuliah": item.nama_mk,
                    Aksi: (
                      <div
                        className=" flex justify-center text-center text-red-500 pointer hover:text-red-700 underline"
                        onClick={() => handleDelete(item.id)}
                      >
                        <FaTrash />
                      </div>
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
          </Card>
        </div>
      </div>
      <KelolaMK isActive={isActive} setIsActive={setIsActive} />
    </div>
  );
};

export default AdminKelolaMK;
