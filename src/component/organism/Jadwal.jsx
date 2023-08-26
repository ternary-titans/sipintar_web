import React, { useState, useEffect } from "react";
import Card from "../atoms/Card";
import Text from "../atoms/Text";
import InputDropdown from "../atoms/InputDropdown";
import Button from "../atoms/Button";
import Table from "../molecules/Tabel";
import { Link } from "react-router-dom";
import axios from "../../api/axios";
import { FaEdit, FaTrash } from "react-icons/fa";
import TambahJadwal from "./TambahJadwal";

export const Jadwal = () => {
  const [isActive, setIsActive] = useState(false);
  const [selectedJurusan, setSelectedJurusan] = useState("");
  const [selectedProdi, setSelectedProdi] = useState("");
  const [selectedKls, setSelectedKelas] = useState("");
  const [selectedTahunAjaran, setSelectedTahunAjaran] = useState("");

  const [prodiOptions, setProdiOptions] = useState([]);
  const [kelasOptions, setKelasOptions] = useState([]);
  const [tahunAjaranOptions, settahunAjaranOptions] = useState([]);
  const [jadwalOptions, setJadwalOptions] = useState([]);

  const [filteredJadwalData, setFilteredJadwalData] = useState([]);

  const handleOKClick = () => {
    setIsActive(true);
  };

  const handleJurusanChange = (event) => {
    setSelectedJurusan(event.target.value);
  };
  const handleProdiChange = (event) => {
    setSelectedProdi(event.target.value);
  };
  const handleKelasChange = (event) => {
    setSelectedKelas(event.target.value);
  };
  const handleTahunAjaranChange = (event) => {
    setSelectedTahunAjaran(event.target.value);
  };
  const jurusanOptions = [
    { id: "", label: "Pilih Jurusan" },
    { id: 1, label: "Teknik Elektro" },
    { id: 2, label: "Teknik Sipil" },
    { id: 3, label: "Teknik Mesin" },
    { id: 4, label: "Akuntansi" },
    { id: 5, label: "Administrasi Bisnis" },
  ];

  useEffect(() => {
    async function fetchData() {
      try {
        const token = localStorage.getItem("userData")
          ? JSON.parse(localStorage.getItem("userData")).token
          : null;

        const response = await axios.get(
          `/prodi?jurusan_id=${selectedJurusan}`,
          {
            headers: {
              Authorization: token,
            },
          }
        );
        const prodiOptions = response.data;
        setProdiOptions(prodiOptions.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchData();
  }, [selectedJurusan]);

  useEffect(() => {
    async function fetchData() {
      try {
        const token = localStorage.getItem("userData")
          ? JSON.parse(localStorage.getItem("userData")).token
          : null;

        const response = await axios.get(`/kelas?prodi_id=${selectedProdi}`, {
          headers: {
            Authorization: token,
          },
        });
        const kelasOptions = response.data;
        setKelasOptions(kelasOptions.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchData();
  }, [selectedProdi]);

  useEffect(() => {
    async function fetchData() {
      try {
        const token = localStorage.getItem("userData")
          ? JSON.parse(localStorage.getItem("userData")).token
          : null;

        const response = await axios.get(`/tahunAjaran`, {
          headers: {
            Authorization: token,
          },
        });
        const tahunAjaranOptions = response.data;
        settahunAjaranOptions(tahunAjaranOptions.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    fetchData();
  }, []);

  const columns = [
    "No",
    "Hari",
    "Waktu",
    "Mata Kuliah",
    "Total Jam",
    "Dosen",
    "Ruangan",
    "Aksi",
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
  ];
  const headerBackgroundColor = "white";
  const headerBorderColor = "#2563eb";
  const pageSizeOptions = [5];

  const [jadwalData, setJadwalData] = useState([]);
  const [loading, setLoading] = useState(true);

  const handleSearch = async () => {
    setLoading(true);
    try {
      const token = localStorage.getItem("userData")
        ? JSON.parse(localStorage.getItem("userData")).token
        : null;

      const queryParameters = new URLSearchParams();
      queryParameters.append("nama_kelas", selectedKls);
      queryParameters.append("tahunAjaran", selectedTahunAjaran);

      const response = await axios.get(
        `/jadwal?${queryParameters.toString()}`,
        {
          headers: {
            Authorization: token,
          },
        }
      );

      setFilteredJadwalData(response.data.data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching filtered data:", error);
      setLoading(false);
    }
  };
  useEffect(() => {
    async function fetchData() {
      try {
        const token = localStorage.getItem("userData")
          ? JSON.parse(localStorage.getItem("userData")).token
          : null;

        const response = await axios.get(`/jadwal?kelas=nama_kelas`, {
          headers: {
            Authorization: token,
          },
        });
        const jadwalData = response.data;
        setJadwalData(jadwalData.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    fetchData();
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`/jadwal/${id}`);
      const updatedData = jadwalData.filter((item) => item.id !== id);
      setJadwalData(updatedData);
    } catch (error) {
      console.error("Error deleting data:", error);
    }
  };

  return (
    <div className="p-0">
      <Card size={{ height: "31rem", width: "78%" }}>
        <div className="flex flex-col gap-4">
          <div className="flex flex-row justify-between">
            <Text type="title3" text="Jadwal Kuliah"></Text>
            <Button variant="biru" onClick={handleOKClick}>
              Buat Jadwal
            </Button>
          </div>

          <div className="mt-2">
            <div className="grid grid-cols-3 gap-10 w-[100%]">
              <div>
                <InputDropdown
                  label="Jurusan"
                  uniqueKeys="label"
                  value={selectedJurusan}
                  options={jurusanOptions}
                  onChange={handleJurusanChange}
                />
                <InputDropdown
                  isDisabled={selectedJurusan === "" ? true : false}
                  label="Program Studi"
                  uniqueKeys="nama_prodi"
                  value={selectedProdi}
                  options={selectedJurusan === "" ? null : prodiOptions}
                  onChange={handleProdiChange}
                />
              </div>
              <div>
                <InputDropdown
                  isDisabled={selectedJurusan === "" ? true : false}
                  label="Kelas"
                  uniqueKeys="nama_kelas"
                  value={selectedKls}
                  options={selectedJurusan === "" ? null : kelasOptions}
                  onChange={handleKelasChange}
                />
                <div className="flex flex-row justify-between gap-10 w-[100%]">
                  <InputDropdown
                    label="Tahun Ajaran"
                    uniqueKeys="nama"
                    value={selectedTahunAjaran}
                    options={tahunAjaranOptions}
                    onChange={handleTahunAjaranChange}
                  />
                  <Button
                    variant="kuning"
                    style={{
                      display: "flex",
                      justifyContent: "flex-end",
                      marginTop: "1.2rem",
                      height: "28px",
                      marginRight: "6px",
                    }}
                    onClick={handleSearch}
                  >
                    Cari
                  </Button>
                </div>
              </div>
              <div></div>
            </div>

            <div className="flex justify-end mt-6"></div>
            <div>
              <Text type="title3" text=" Tabel Jadwal Kuliah"></Text>
              <div className="mr-2 overflow-y-scroll">
                {loading ? (
                  <p>Loading...</p>
                ) : (
                  <Table
                    columns={columns}
                    data={jadwalData.map((item, index) => ({
                      No: index + 1,
                      Hari: item.hari,
                      Waktu: `${item.jam_mulai} - ${item.jam_akhir}`,
                      "Mata Kuliah": item.nama_mk,
                      "Total Jam": item.total_jam,
                      Dosen: item.dosen,
                      Ruangan: item.ruangan,
                      Aksi: (
                        <div className="flex flex-row justify-center">
                          <Link to={`/admin/editjadwal/${item.id}`}>
                            <div className="  text-center text-blue-500 hover:text-blue-700">
                              <FaEdit />
                            </div>
                          </Link>

                          <div
                            className=" text-red-500 pointer hover:text-red-700 underline"
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
            </div>
          </div>
        </div>
      </Card>

      <TambahJadwal isActive={isActive} setIsActive={setIsActive} />
    </div>
  );
};

export default Jadwal;
