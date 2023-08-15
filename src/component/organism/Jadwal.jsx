import React, { useState, useEffect } from "react";
import Card from "../atoms/Card";
import Text from "../atoms/Text";
import InputDropdown from "../atoms/InputDropdown";
import Button from "../atoms/Button";
import Table from "../molecules/Tabel";
import { Link } from "react-router-dom";
import axios from "axios";
import { FaEdit, FaTrash } from "react-icons/fa";

export const Jadwal = () => {
  const [selectedJurusan, setSelectedJurusan] = useState("");
  const [selectedProdi, setSelectedProdi] = useState("");
  const [selectedKls, setSelectedKelas] = useState("");
  const [selectedTahunAjaran, setSelectedTahunAjaran] = useState("");

  const [prodiOptions, setProdiOptions] = useState([]);
  const [kelasOptions, setKelasOptions] = useState([]);
  const [tahunAjaranOptions, settahunAjaranOptions] = useState([]);

  const [filteredJadwalData, setFilteredJadwalData] = useState([]);

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
    axios
      .get(`http://localhost:3000/api/prodi?jurusan_id=${selectedJurusan}`)
      .then((response) => {
        const prodiData = response.data;
        setProdiOptions(prodiData.data);
      })
      .catch((error) => {
        console.error("Error fetching Prodi data:", error);
      });
  }, [selectedJurusan]);

  useEffect(() => {
    if (selectedProdi) {
      axios
        .get(`http://localhost:3000/api/kelas?prodi_id=${selectedProdi}`)
        .then((response) => {
          const kelasData = response.data;
          setKelasOptions(kelasData.data);
        })
        .catch((error) => {
          setKelasOptions([]);
          console.error("Error fetching Kelas data:", error);
        });
    }
  }, [selectedProdi]);

  useEffect(() => {
    axios
      .get(`http://localhost:3000/api/tahunAjaran`)
      .then((response) => {
        const tahunAjaranData = response.data;
        settahunAjaranOptions(tahunAjaranData.data);
      })
      .catch((error) => {
        settahunAjaranOptions([]);
        console.error("Error fetching Tahun Ajaran data:", error);
      });
  }, [selectedTahunAjaran]);

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
  const pageSizeOptions = [10, 25, 50];

  const [jadwalData, setJadwalData] = useState([]);
  const [loading, setLoading] = useState(true);

  const handleSearch = async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        `http://localhost:3000/api/jadwal?kelas=`
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
        const response = await axios.get("http://localhost:3000/api/jadwal");
        setJadwalData(response.data.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    }

    fetchData();
  }, [jadwalData, setJadwalData]);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:3000/api/jadwal/${id}`);
      const updatedData = jadwalData.filter((item) => item.id !== id);
      setJadwalData(updatedData);
    } catch (error) {
      console.error("Error deleting data:", error);
    }
  };

  return (
    <div className="p-0">
      <Card size={{ height: "28rem", width: "78%" }}>
        <div className="flex flex-col gap-4">
          <Text type="title3" text="Jadwal Kuliah"></Text>
          <div className="overflow-y-scroll">
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
            <div className="flex justify-between mt-2">
              <div className="flex gap-4">
                <InputDropdown
                  isDisabled={selectedJurusan === "" ? true : false}
                  label="Kelas"
                  uniqueKeys="nama_kelas"
                  value={selectedKls}
                  options={selectedJurusan === "" ? null : kelasOptions}
                  onChange={handleKelasChange}
                />
                <InputDropdown
                  label="Tahun Ajaran"
                  uniqueKeys="nama"
                  value={selectedTahunAjaran}
                  options={tahunAjaranOptions}
                  onChange={handleTahunAjaranChange}
                />
              </div>
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
            <div className="flex justify-end mt-6"></div>
            <div>
              <Text type="title3" text=" Tabel Jadwal Kuliah"></Text>
              <div className="mr-2">
                {loading ? (
                  <p>Loading...</p>
                ) : (
                  <Table
                    columns={columns}
                    data={jadwalData.map((item, index) => ({
                      No: index + 1,
                      Hari: item.hari,
                      Waktu: item.jam_mulai - item.jam_akhir,
                      "Mata Kuliah": item.nama_mk,
                      "Total Jam": item.total_jam,
                      Dosen: item.nama_dosen,
                      Ruangan: item.label_ruang,
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
    </div>
  );
};

export default Jadwal;
