import React, { useState } from "react";
import Card from "../atoms/Card";
import InputDropdown from "../atoms/InputDropdown";
import Text from "../atoms/Text";
import TabelJadwal from "../organism/TabelJadwal";

export const BuatJadwal = () => {
  const [selectedJurusan, setSelectedJurusan] = useState("");
  const [selectedProdi, setSelectedProdi] = useState("");
  const [selectedKelas, setSelectedKelas] = useState("");
  const [selectedTahunAjaran, setSelectedTahunAjaran] = useState("");

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
    { value: "option1", label: "Option 1" },
    { value: "option2", label: "Option 2" },
    { value: "option3", label: "Option 3" },
  ];
  const prodiOptions = [
    { value: "option1", label: "Option 1" },
    { value: "option2", label: "Option 2" },
    { value: "option3", label: "Option 3" },
  ];
  const kelasOptions = [
    { value: "option1", label: "Option 1" },
    { value: "option2", label: "Option 2" },
    { value: "option3", label: "Option 3" },
  ];
  const tahunajaranOptions = [
    { value: "option1", label: "Option 1" },
    { value: "option2", label: "Option 2" },
    { value: "option3", label: "Option 3" },
  ];

  const handleSave = () => {
    // Logika untuk menyimpan data jadwal ke database
    console.log("Data jadwal disimpan:");
  };

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
                  value={selectedJurusan}
                  options={jurusanOptions}
                  onChange={handleJurusanChange}
                />
                <InputDropdown
                  label="Program Studi"
                  value={selectedProdi}
                  options={prodiOptions}
                  onChange={handleProdiChange}
                />
              </div>
              <div>
                <InputDropdown
                  label="Kelas"
                  value={selectedKelas}
                  options={kelasOptions}
                  onChange={handleKelasChange}
                />
                <InputDropdown
                  label="Tahun Ajaran"
                  value={selectedTahunAjaran}
                  options={tahunajaranOptions}
                  onChange={handleTahunAjaranChange}
                />
              </div>
            </div>
            <div className="mt-4">
              <TabelJadwal />
            </div>
          </div>
          <div className="mt-2 mb-8">
            <button
              className="px-4 py-2 bg-blue-500 text-white rounded"
              onClick={handleSave}
            >
              Simpan
            </button>
          </div>
        </div>
      </Card>
    </div>
  );
};
export default BuatJadwal;
