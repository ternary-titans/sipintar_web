import React, { useState } from "react";
import { Link } from "react-router-dom";
import Card from "../atoms/Card";
import InputDropdown from "../atoms/InputDropdown";
import Text from "../atoms/Text";
import Button from "../atoms/Button";
import Table from "../molecules/Tabel";
import * as XLSX from "xlsx";

export const FormRekapMhs = () => {
  const handleExportToExcel = () => {
    const worksheet = XLSX.utils.json_to_sheet(data);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(
      workbook,
      worksheet,
      "Rekap Presensi Mahasiswa"
    );
    const fileName = `rekap_presensi_mahasiswa_${kelasDropdownValue}.xlsx`;
    XLSX.writeFile(workbook, fileName);
  };

  const [selectedJurusan, setSelectedJurusan] = useState("");
  const [selectedProdi, setSelectedProdi] = useState("");
  const [selectedKelas, setSelectedKelas] = useState("");
  const [kelasDropdownValue, setKelasDropdownValue] = useState("");

  const handleJurusanChange = (event) => {
    setSelectedJurusan(event.target.value);
  };

  const handleProdiChange = (event) => {
    setSelectedProdi(event.target.value);
  };

  const handleKelasChange = (event) => {
    setSelectedKelas(event.target.value);
    setKelasDropdownValue(event.target.value);
  };

  const jurusanOptions = [
    { value: "option1", label: "Option 1" },
    { value: "option2", label: "Option 2" },
    { value: "option3", label: "Option 3" },
  ];

  const ProdiOptions = [
    { value: "option4", label: "Option 4" },
    { value: "option5", label: "Option 5" },
    { value: "option6", label: "Option 6" },
  ];
  const KelasOptions = [
    { value: "option7", label: "Option 7" },
    { value: "option8", label: "Option 8" },
    { value: "option9", label: "Option 9" },
  ];

  const columns = ["No", "NIM", "Nama", "Sakit", "Izin", "Alpa", "Aksi"];
  const data = [
    {
      No: 1,
      NIM: "33420021",
      Nama: "Rifka Anggun",
      Sakit: 0,
      Izin: 0,
      Alpa: 0,
      Aksi: (
        <div className="text-center">
          <Link
            to="/admin/mahasiswa/rekap/detail/:id"
            className="text-blue-500 hover:text-red-700 underline"
          >
            Detail
          </Link>
        </div>
      ),
    },
  ];

  const columnAlignments = [
    "center",
    "center",
    "left",
    "center",
    "center",
    "center",
    "center",
  ];
  const headerBackgroundColor = "white";
  const headerBorderColor = "#2563eb";
  const pageSizeOptions = [50];

  return (
    <div className="mt-12">
      <Card size={{ height: "31rem", width: "78%" }}>
        <div className="mb-3">
          <Text type="title3" text="Rekap Presensi Mahasiswa"></Text>
        </div>
        <div className="overflow-y-scroll">
          <div className="flex flex-col gap-4">
            <InputDropdown
              label="Jurusan"
              value={selectedJurusan}
              options={jurusanOptions}
              onChange={handleJurusanChange}
            />
            <InputDropdown
              label="Program Studi"
              value={selectedProdi}
              options={ProdiOptions}
              onChange={handleProdiChange}
            />
            <InputDropdown
              label="Kelas"
              value={selectedKelas}
              options={KelasOptions}
              onChange={handleKelasChange}
            />
          </div>
          <div className="flex justify-end mt-4 mr-2 h-8">
            <Button variant="kuning">Cari</Button>
          </div>
          <div>
            <div className="mb-3">
              <Text
                type="title3"
                text="Tabel Rekap Presensi Mahasiswa Kelas A"
              ></Text>
            </div>
            <div className="flex justify-start mt-2 mb-2 h-8">
              <Button
                variant="yes"
                style={{
                  height: "32px",
                  width: "150px",
                }}
                onClick={handleExportToExcel} // Memanggil fungsi export to Excel saat tombol ditekan
              >
                Export to Excel
              </Button>
            </div>
            <div className="mr-2">
              <Table
                columns={columns}
                data={data}
                columnAlignments={columnAlignments}
                headerBackgroundColor={headerBackgroundColor}
                headerBorderColor={headerBorderColor}
                pageSizeOptions={pageSizeOptions}
                style={{ marginTop: "10px" }}
              />
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default FormRekapMhs;
