import Admin from "./Admin";
import React, { useState, useEffect } from "react";
import Card from "../atoms/Card";
import Text from "../atoms/Text";
import Button from "../atoms/Button";
import Table from "../molecules/Tabel.jsx";
import KelolaJurusan from "../organism/KelolaJurusan";
import { FaTrash } from "react-icons/fa";
import axios from "../../api/axios";

export const AdminJurusan = () => {
  const [isActive, setIsActive] = useState(false);
  const [JurusanData, setJurusanData] = useState([]);
  const [loading, setLoading] = useState(true);

  const handleSubmit = () => {
    setIsActive(true);
  };

  useEffect(() => {
    async function fetchData() {
      try {
        const token = localStorage.getItem("userData")
          ? JSON.parse(localStorage.getItem("userData")).token
          : null;

        const response = await axios.get("/jurusan", {
          headers: {
            Authorization: token,
          },
        });
        setJurusanData(response.data.data);
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
      const token = localStorage.getItem("userData")
        ? JSON.parse(localStorage.getItem("userData")).token
        : null;

      await axios.delete(`/jurusan/${id}`, {
        headers: {
          Authorization: token,
        },
      });
      const updatedData = JurusanData.filter((item) => item.id !== id);
      setJurusanData(updatedData);
    } catch (error) {
      console.error("Error deleting data:", error);
    }
  };
  const columns = ["No", "Jurusan", "Aksi"];

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
              <Text type="title" text="JURUSAN"></Text>
              <div>
                <Button variant="biru" onClick={handleSubmit}>
                  Tambah Jurusan
                </Button>
              </div>
            </div>
            <div>
              {loading ? (
                <p>Loading...</p>
              ) : (
                <Table
                  columns={columns}
                  data={JurusanData.map((item, index) => ({
                    No: index + 1,
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
      <KelolaJurusan isActive={isActive} setIsActive={setIsActive} />
    </div>
  );
};

export default AdminJurusan;
