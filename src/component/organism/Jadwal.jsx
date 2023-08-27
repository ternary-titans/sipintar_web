import Card from "../atoms/Card";
import Text from "../atoms/Text";
import axios from "../../api/axios";
import React, { useState, useEffect } from "react";
import InputDropdown from "../atoms/InputDropdown";
import Button from "../atoms/Button";
import Table from "../molecules/Tabel";
import { Link } from "react-router-dom";
import { FaEdit, FaTrash } from "react-icons/fa";
import TambahJadwal from "./TambahJadwal";

export const Jadwal = () => {
  const [selectedJurusan, setSelectedJurusan] = useState(0);
  const [selectedProdi, setSelectedProdi] = useState("0");
  const [selectedKls, setSelectedKelas] = useState("0");
  const [selectedTahunAjaran, setSelectedTahunAjaran] = useState("0");

  const [prodiOptions, setProdiOptions] = useState([
    {
      id: "",
      nama_prodi: "Pilih Prodi",
    },
  ]);
  const [kelasOptions, setKelasOptions] = useState([
    {
      id: "",
      nama_kelas: "Pilih Kelas",
    },
  ]);
  const [tahunAjaranOptions, settahunAjaranOptions] = useState([]);
  const [jadwalData, setJadwalData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [totalItem, setTotalItem] = useState(0);

  const [isActive, setIsActive] = useState(false);
  const [loading, setLoading] = useState(false);

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
    { id: 0, label: "Pilih Jurusan" },
    { id: 1, label: "Teknik Elektro" },
    { id: 2, label: "Teknik Sipil" },
    { id: 3, label: "Teknik Mesin" },
    { id: 4, label: "Akuntansi" },
    { id: 5, label: "Administrasi Bisnis" },
  ];

  useEffect(() => {
    if (selectedJurusan > 0) {
      setLoading(true);
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

          const dataProdi = [
            ...prodiOptions,
            ...response.data.data.map((prodi) => ({
              id: prodi.id,
              nama_prodi: prodi.nama_prodi,
            })),
          ];

          setProdiOptions(dataProdi);
          setLoading(false);
        } catch (error) {
          console.error("Error fetching data:", error);
          setLoading(false);
        }
      }

      fetchData();
    }
  }, [selectedJurusan]);

  useEffect(() => {
    if (selectedProdi > 0) {
      setLoading(true);
      async function fetchData() {
        try {
          const token = localStorage.getItem("userData")
            ? JSON.parse(localStorage.getItem("userData")).token
            : null;

          const response = await axios.get(`/kelas`, {
            headers: {
              Authorization: token,
            },
            params: {
              prodi_id: selectedProdi,
            },
          });

          const dataKelas = [
            ...kelasOptions,
            ...response.data.data.map((kelas) => ({
              id: kelas.id,
              nama_kelas: kelas.nama_kelas,
            })),
          ];

          setKelasOptions(dataKelas);
          setLoading(false);
        } catch (error) {
          console.error("Error fetching data:", error);
          setLoading(false);
        }
      }

      fetchData();
    }
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

  useEffect(() => {
    if (selectedKls > 0) {
      setLoading(true);
      async function fetchData() {
        try {
          const token = localStorage.getItem("userData")
            ? JSON.parse(localStorage.getItem("userData")).token
            : null;

          const response = await axios.get(`/jadwal`, {
            headers: {
              Authorization: token,
            },
            params: {
              kelas_id: selectedKls,
              page: currentPage,
            },
          });

          setJadwalData(response.data.data);
          setTotalPages(response.data.paging.total_page);
          setTotalItem(response.data.paging.total_item);
          setLoading(false);
        } catch (error) {
          console.error("Error fetching data:", error);
          setLoading(false);
        }
      }

      fetchData();
    }
  }, [selectedKls, currentPage]);

  const handleDelete = async (id) => {
    try {
      const token = localStorage.getItem("userData")
        ? JSON.parse(localStorage.getItem("userData")).token
        : null;

      await axios.delete(`/jadwal/${id}`, {
        headers: {
          Authorization: token,
        },
      });

      const updatedData = jadwalData.filter((item) => item.id !== id);
      setJadwalData(updatedData);
    } catch (error) {
      console.error("Error deleting data:", error);
    }
  };

  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setCurrentPage(newPage);
    }
  };

  const formatted = jadwalData?.map((item, index) => ({
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
          <div className=" text-center text-blue-500 hover:text-blue-700">
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
  }));

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
  const pageSizeOptions = [10];

  return (
    <div className="p-0">
      <Card size={{ height: "31rem", width: "78%" }}>
        <div className="flex flex-col gap-4">
          <div className="flex flex-row justify-between">
            <Text type="title3" text="Jadwal Kuliah" />
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
                </div>
              </div>
              <div></div>
            </div>
            <div className="mt-4">
              <Text type="title3" text=" Tabel Jadwal Kuliah"></Text>
              {selectedKls > 0 ? (
                <div className="mr-2 overflow-y-scroll">
                  {loading ? (
                    <span className="text-gray-800 animate-ping duration-75">
                      Loading...
                    </span>
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
              ) : null}
            </div>
          </div>
        </div>
      </Card>

      <TambahJadwal isActive={isActive} setIsActive={setIsActive} />
    </div>
  );
};

export default Jadwal;
