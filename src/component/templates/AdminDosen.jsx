import React, { useState, useEffect } from "react";
import Admin from "./Admin";
import { Link } from "react-router-dom";
import Button from "../atoms/Button";
import Card from "../atoms/Card";
import Table from "../molecules/Tabel";
import Text from "../atoms/Text";
import Search from "../molecules/Search";
import { FaEdit, FaTrash } from "react-icons/fa";
import axios from "axios";

export const AdminDosen = () => {
  const columns = ["No", "Nama", "NIP", "Password", "Aksi"];
  const columnAlignments = ["center", "left", "center", "center", "center"];
  const headerBackgroundColor = "white";
  const headerBorderColor = "#1e3a8a";
  const pageSizeOptions = [5, 10];

  const [dosenData, setdosenData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData(query = "") {
    try {
      const response = await axios.get(
        `http://localhost:3000/api/dosen?nama=${query}`
      );
      setdosenData(response.data.data);
      console.log(response.data.data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching data:", error);
      setLoading(false);
    }
  }

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:3000/api/dosen/${id}`);
      const updatedData = dosenData.filter((item) => item.id !== id);
      setdosenData(updatedData);
    } catch (error) {
      console.error("Error deleting data:", error);
    }
  };

  const handleSearch = async (searchTerm) => {
    fetchData(searchTerm);
  };

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
                  data={dosenData?.map((item, index) => ({
                    No: index + 1,
                    Nama: item.nama_dosen,
                    NIP: item.nip,
                    Jurusan: item.jurusan_id,
                    Password: item.password,
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
                          className="text-center text-red-500 pointer hover:text-red-700 underline"
                          onClick={() => handleDelete(item.id)}
                        >
                          <FaTrash />
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
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default AdminDosen;
