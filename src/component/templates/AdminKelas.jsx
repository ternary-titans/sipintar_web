import Admin from "./Admin";
import React, { useState, useEffect } from "react";
import Card from "../atoms/Card";
import Text from "../atoms/Text";
import Button from "../atoms/Button";
import Table from "../molecules/Tabel.jsx";
import KelolaKelas from "../organism/KelolaKelas";
import UbahTA from "../organism/UbahTA";
import { FaTrash } from "react-icons/fa";
import axios from "axios";

export const AdminKelas = () => {
  const [isActive, setIsActive] = useState(false);
  const [isActiveTA, setIsActiveTA] = useState(false);
  const [KelasData, setKelasData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [tahunAjaranData, setTahunAjaranData] = useState({});

  const handleOKClick = () => {
    setIsActive(true);
  };

  const handleOKClickTA = (item) => {
    setTahunAjaranData(item);
    setIsActiveTA(true);
  };

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get("http://localhost:3000/api/kelas");
        setKelasData(response.data.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    }

    fetchData();
  }, [KelasData, setKelasData]);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:3000/api/jurusan/${id}`);
      const updatedData = KelasData.filter((item) => item.id !== id);
      setKelasData(updatedData);
    } catch (error) {
      console.error("Error deleting data:", error);
    }
  };

  const handleUbahTA = async (newTahunAjaran) => {
    try {
      setLoading(true);
      await axios.put(`http://localhost:3000/api/tahunAjaran`, {
        tahunAjaran: newTahunAjaran,
      });

      const updatedKelasData = KelasData.map((item) =>
        item.id === tahunAjaranData.id
          ? { ...item, tahunAjaran: newTahunAjaran } // Perbarui data tahun ajaran pada item yang sesuai
          : item
      );

      setKelasData(updatedKelasData);
    } catch (error) {
      console.error("Error updating tahun ajaran:", error);
    } finally {
      setLoading(false);
      setIsActiveTA(false);
    }
  };

  const columns = [
    "No",
    "Kelas",
    "Program Studi",
    "Jurusan",
    "Tahun Ajaran",
    "Aksi",
  ];

  const columnAlignments = ["center", "center", "center", "center", "center"];
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
              <Text type="title" text="KELAS"></Text>
              <div className="flex flex-row gap-4">
                <Button variant="biru" onClick={handleOKClick}>
                  Tambah Kelas
                </Button>
                <Button variant="biru" onClick={handleOKClickTA}>
                  Ubah Tahun Ajaran
                </Button>
              </div>
            </div>
            <div>
              {loading ? (
                <p>Loading...</p>
              ) : (
                <Table
                  columns={columns}
                  data={KelasData.map((item, index) => ({
                    No: index + 1,
                    Kelas: item.nama_kelas,
                    "Program Studi": item.prodi,
                    "Tahun Ajaran": item.tahunAjaran,
                    Jurusan: item.nama_jurusan,
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
      <KelolaKelas isActive={isActive} setIsActive={setIsActive} />
      <UbahTA
        isActive={isActiveTA}
        setIsActive={setIsActiveTA}
        tahunAjaranData={tahunAjaranData}
        handleUbahTA={handleUbahTA}
      />
    </div>
  );
};

export default AdminKelas;
