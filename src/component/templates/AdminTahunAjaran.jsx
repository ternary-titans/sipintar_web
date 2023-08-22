import Admin from "./Admin";
import React, { useState, useEffect } from "react";
import Card from "../atoms/Card";
import Text from "../atoms/Text";
import Button from "../atoms/Button";
import Table from "../molecules/Tabel.jsx";
import KelolaTA from "../organism/KelolaTA";
import axios from "../../api/axios";
import { FaTrash } from "react-icons/fa";

export const AdminTahunAjaran = () => {
  const [isActive, setIsActive] = useState(false);

  const handleSubmit = () => {
    setIsActive(true);
  };
  const columns = ["No", "Tahun Ajaran", "Aksi"];
  const [TahunAjaranData, setTahunAjaranData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      const token = localStorage.getItem("userData")
        ? JSON.parse(localStorage.getItem("userData")).token
        : null;

      try {
        const response = await axios.get("/tahunAjaran", {
          headers: {
            Authorization: token,
          },
        });
        setTahunAjaranData(response.data.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    }

    fetchData();
  }, [TahunAjaranData, setTahunAjaranData]);

  const handleDelete = async (id) => {
    try {
      const token = localStorage.getItem("userData")
        ? JSON.parse(localStorage.getItem("userData")).token
        : null;

      await axios.delete(`/tahunAjaran/${id}`, {
        headers: {
          Authorization: token,
        },
      });
      const updatedData = TahunAjaranData.filter((item) => item.id !== id);
      setTahunAjaranData(updatedData);
    } catch (error) {
      console.error("Error deleting data:", error);
    }
  };

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
              <Text type="title" text="TAHUN AJARAN"></Text>
              <div>
                <Button variant="biru" onClick={handleSubmit}>
                  Tambah Tahun Ajaran
                </Button>
              </div>
            </div>
            <div>
              {loading ? (
                <p>Loading...</p>
              ) : (
                <Table
                  columns={columns}
                  data={TahunAjaranData.map((item, index) => ({
                    No: index + 1,
                    "Tahun Ajaran": item.nama,
                    Aksi: (
                      <div className="flex flex-row gap-2 justify-center">
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
      <KelolaTA isActive={isActive} setIsActive={setIsActive} />
    </div>
  );
};

export default AdminTahunAjaran;
