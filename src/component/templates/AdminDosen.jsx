import React, { useState, useEffect } from "react";
import Admin from "./Admin";
import { Link } from "react-router-dom";
import Button from "../atoms/Button";
import Card from "../atoms/Card";
import Table from "../molecules/Tabel";
import Text from "../atoms/Text";
import Search from "../molecules/Search";
import { FaEdit, FaTrash } from "react-icons/fa";
import axios from "../../api/axios";

export const AdminDosen = () => {
  const [dosenData, setdosenData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [totalItem, setTotalItem] = useState(0);

  useEffect(() => {
    fetchData();
  }, [currentPage]);

  async function fetchData(query = "") {
    try {
      const token = localStorage.getItem("userData")
        ? JSON.parse(localStorage.getItem("userData")).token
        : null;

      const response = await axios.get(`/dosen`, {
        headers: {
          Authorization: token,
        },
        params: {
          nama: query,
          page: currentPage,
        },
      });
      setdosenData(response.data.data);
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

      await axios.delete(`/dosen/${id}`, {
        headers: {
          Authorization: token,
        },
      });
      const updatedData = dosenData.filter((item) => item.id !== id);
      setdosenData(updatedData);
    } catch (error) {
      console.error("Error deleting data:", error);
    }
  };

  const handleSearch = async (searchTerm) => {
    fetchData(searchTerm);
  };

  const columns = ["No", "Nama", "NIP", "Aksi"];
  const columnAlignments = ["center", "left", "center", "center"];
  const headerBackgroundColor = "white";
  const headerBorderColor = "#1e3a8a";
  const pageSizeOptions = [10];

  const formatted = dosenData?.map((item, index) => ({
    No: index + 1,
    Nama: item.nama_dosen,
    NIP: item.nip,
    Jurusan: item.jurusan_id,
    Aksi: (
      <div className="flex flex-row gap-2 justify-center">
        <div className="text-center">
          <Link
            to={`/admin/dosen/edit/${item.id}`}
            className="text-blue-500 hover:text-blue-700 underline"
          >
            <FaEdit />
          </Link>
        </div>
        <div
          className="text-center text-red-500 pointer pointer hover:text-red-700 underline"
          onClick={() => handleDelete(item.id)}
        >
          <FaTrash />
        </div>
      </div>
    ),
  }));

  return (
    <div className="bg-gray-300 h-screen">
      <Admin />
      <div className="flex flex-col justify-start">
        <div className="flex justify-end mt-12 mr-2">
          <Link to="/admin/dosen/tambah">
            <Button
              variant="biru"
              style={{ width: "200px", marginRight: "10px" }}
            >
              Masukkan Dosen Baru
            </Button>
          </Link>
          <Link to="/admin/dosen/rekap">
            <Button variant="kuning">Rekap Presensi</Button>
          </Link>
        </div>
        <div style={{ marginTop: "10px" }}>
          <Card size={{ height: "28rem", width: "78%" }}>
            <div className="flex flex-row justify-between">
              <Text type="title" text="TABEL DATA DOSEN"></Text>
              <Search onSearch={handleSearch} />
            </div>

            <div className="mt-4">
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
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default AdminDosen;
