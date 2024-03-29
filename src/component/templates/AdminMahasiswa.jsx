import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Button from "../atoms/Button";
import Card from "../atoms/Card";
import Table from "../molecules/Tabel";
import Text from "../atoms/Text";
import Search from "../molecules/Search";
import axios from "../../api/axios";
import Admin from "./Admin";
import { FaEdit, FaTrash } from "react-icons/fa";

export const AdminMahasiswa = () => {
  const [mahasiswaData, setMahasiswaData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [totalItem, setTotalItem] = useState(0);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchData();
  }, [currentPage]);

  async function fetchData(query = "") {
    try {
      setLoading(true);
      const token = localStorage.getItem("userData")
        ? JSON.parse(localStorage.getItem("userData")).token
        : null;

      const response = await axios.get(`/mahasiswa`, {
        headers: {
          Authorization: token,
        },
        params: {
          nama: query,
          page: currentPage,
        },
      });
      setMahasiswaData(response.data.data);
      setTotalPages(response.data.paging.total_page);
      setTotalItem(response.data.paging.total_item);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching data:", error);
      setLoading(false);
    }
  }

  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setCurrentPage(newPage);
    }
  };

  const handleDelete = async (id) => {
    try {
      const token = localStorage.getItem("userData")
        ? JSON.parse(localStorage.getItem("userData")).token
        : null;

      await axios.delete(`/mahasiswa/${id}`, {
        headers: {
          Authorization: token,
        },
      });
      const updatedData = mahasiswaData.filter((item) => item.id !== id);
      setMahasiswaData(updatedData);
    } catch (error) {
      console.error("Error deleting data:", error);
    }
  };

  const handleSearch = async (searchTerm) => {
    fetchData(searchTerm);
  };

  const formatted = mahasiswaData?.map((item, index) => ({
    No: index + 1,
    Nama: item.nama_mahasiswa,
    NIM: item.nim,
    Kelas: item.kelas,
    Prodi: item.prodi,
    Jurusan: item.jurusan,
    Aksi: (
      <div className="flex flex-row gap-2 justify-center items-center">
        <div className="text-center">
          <Link
            to={`/admin/mahasiswa/edit/${item.id}`}
            className="text-blue-500 hover:text-blue-700 underline"
          >
            <FaEdit />
          </Link>
        </div>
        <div
          className="text-center text-red-500 pointer hover:text-red-700 underline"
          onClick={() => handleDelete(item.id)}
        >
          <FaTrash />
        </div>
      </div>
    ),
  }));

  const columns = ["No", "Nama", "NIM", "Kelas", "Prodi", "Jurusan", "Aksi"];

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
  const pageSizeOptions = [10];

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
            <div className="flex flex-row justify-between">
              <Text type="title" text="TABEL DATA MAHASISWA"></Text>
              <Search onSearch={handleSearch} />
            </div>
            {loading ? (
              <p>Loading...</p>
            ) : (
              <Table
                columns={columns}
                data={formatted}
                columnAlignments={columnAlignments}
                headerBackgroundColor={headerBackgroundColor}
                headerBorderColor={headerBorderColor}
                pageSizeOptions={pageSizeOptions}
                style={{ marginTop: "10px" }}
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={handlePageChange}
                totalItem={totalItem}
              />
            )}
          </Card>
        </div>
      </div>
    </div>
  );
};

export default AdminMahasiswa;
