import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Button from "../atoms/Button";
import Card from "../atoms/Card";
import Table from "../molecules/Tabel";
import Text from "../atoms/Text";
import Search from "../molecules/Search";
import axios from "axios";
import Admin from "./Admin"; // Import komponen Admin

export const AdminMahasiswa = () => {
  const columns = [
    "No",
    "Nama",
    "NIM",
    "Kelas",
    "Prodi",
    "Jurusan",
    "Password",
    "Aksi",
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
  const pageSizeOptions = [10, 25, 50];

  const [mahasiswaData, setMahasiswaData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get("http://localhost:3000/api/mahasiswa");
        setMahasiswaData(response.data.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:3000/api/mahasiswa/${id}`);
      const updatedData = mahasiswaData.filter((item) => item.id !== id);
      setMahasiswaData(updatedData);
    } catch (error) {
      console.error("Error deleting data:", error);
    }
  };

  const handleSearch = (searchTerm) => {
    console.log("Search term:", searchTerm);
  };

  return (
    <div className="bg-gray-300 h-screen">
      <Admin />
      <div className="flex flex-col justify-start">
        <div className="flex justify-end mt-12 mr-2">
          <Link to="/admin/mahasiswa/tambah">
            <Button
              variant="biru"
              style={{ width: "300px", marginRight: "10px" }}
            >
              Tambah Data Mahasiswa
            </Button>
          </Link>
          <Link to="/admin/mahasiswa/rekap">
            <Button variant="kuning">Rekap Presensi</Button>
          </Link>
        </div>
        <div style={{ marginTop: "10px" }}>
          <Card size={{ width: "78%" }}>
            <div style={{ marginLeft: "10px" }}>
              <Text type="title" text="TABEL DATA MAHASISWA"></Text>
            </div>

            <div className="flex justify-end mb-8">
              <Search onSearch={handleSearch} />
            </div>
            {loading ? (
              <p>Loading...</p>
            ) : (
              <Table
                columns={columns}
                data={mahasiswaData.map((item, index) => ({
                  No: index + 1,
                  Nama: item.nama_mahasiswa,
                  NIM: item.nim,
                  Kelas: item.nama_kelas,
                  Prodi: item.prodi,
                  Jurusan: item.jurusan,
                  Password: item.password,
                  Aksi: (
                    <div className="flex flex-col gap-2 items-center">
                      <div className="text-center">
                        <Link
                          to={`/admin/mahasiswa/edit/${item.id}`}
                          className="text-blue-500 hover:text-blue-700 underline"
                        >
                          Edit
                        </Link>
                      </div>
                      <div
                        className="text-center text-red-500 pointer hover:text-red-700 underline"
                        onClick={() => handleDelete(item.id)}
                      >
                        Hapus
                      </div>
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
          </Card>
        </div>
      </div>
    </div>
  );
};

export default AdminMahasiswa;
