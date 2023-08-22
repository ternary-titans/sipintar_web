import React, { useState, useEffect } from "react";
import Card from "../atoms/Card";
import InputDropdown from "../atoms/InputDropdown";
import Text from "../atoms/Text";
import TabelJadwal from "../organism/TabelJadwal";
import axios from "../../api/axios";

export const BuatJadwal = () => {
  const [selectedJurusan, setSelectedJurusan] = useState("");
  const [selectedProdi, setSelectedProdi] = useState("");
  const [selectedKls, setSelectedKelas] = useState("");
  const [selectedTahunAjaran, setSelectedTahunAjaran] = useState("");

  const [prodiOptions, setProdiOptions] = useState([]);
  const [kelasOptions, setKelasOptions] = useState([]);
  const [tahunAjaranOptions, settahunAjaranOptions] = useState([]);

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
      .get(`/prodi?jurusan_id=${selectedJurusan}`)
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
        .get(`/kelas?prodi_id=${selectedProdi}`)
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
      .get(`/tahunAjaran`)
      .then((response) => {
        const tahunAjaranData = response.data;
        settahunAjaranOptions(tahunAjaranData.data);
      })
      .catch((error) => {
        settahunAjaranOptions([]);
        console.error("Error fetching Tahun Ajaran data:", error);
      });
  }, [selectedTahunAjaran]);

  return (
    <div className="">
      <Card size={{ height: "31rem", width: "90%" }}>
        <div className="text-center">
          <Text type="title3" text="FORM BUAT JADWAL" />
        </div>
        <div className="flex flex-col h-full">
          <div className="overflow-y-auto">
            <div className="grid grid-cols-2 gap-20 mt-8 w-[60%]">
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
                <InputDropdown
                  label="Tahun Ajaran"
                  uniqueKeys="nama"
                  value={selectedTahunAjaran}
                  options={tahunAjaranOptions}
                  onChange={handleTahunAjaranChange}
                />
              </div>
            </div>
            <div className="mt-4">
              <TabelJadwal />
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};
export default BuatJadwal;
