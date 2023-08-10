import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Card from "../atoms/Card";
import Input from "../atoms/Input";
import InputDropdown from "../atoms/InputDropdown";
import Button from "../atoms/Button";

export const FormRekapEditMhs = ({ id }) => {
  const [mkValue, setMKValue] = useState("");
  const [realisasiValue, setREALISASIValue] = useState("");
  const [topikValue, setTOPIKValue] = useState("");
  const [selectedStatus, setSelectedStatus] = useState("");
  const [isDataChanged, setIsDataChanged] = useState(false);

  useEffect(() => {
    fetch(`URL_API/mahasiswa/${id}`)
      .then((response) => response.json())
      .then((data) => {
        // Mengatur state dengan data yang diambil dari database berdasarkan ID
        setMKValue(data.mkValue);
        setREALISASIValue(data.realisasiValue);
        setTOPIKValue(data.topikValue);
        setSelectedStatus(data.selectedStatus);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        // Tambahkan logika untuk memberikan notifikasi atau tindakan jika terjadi kesalahan saat mengambil data
      });
  }, [id]);

  const handleMkChange = (event) => {
    setMKValue(event.target.value);
    setIsDataChanged(true);
  };
  const handleRealisasiChange = (event) => {
    setREALISASIValue(event.target.value);
    setIsDataChanged(true);
  };
  const handleTopikChange = (event) => {
    setTOPIKValue(event.target.value);
    setIsDataChanged(true);
  };
  const handleStatusChange = (event) => {
    setSelectedStatus(event.target.value);
  };

  const statusOptions = [
    { value: "option1", label: "Hadir" },
    { value: "option2", label: "Sakit" },
    { value: "option3", label: "Izin" },
    { value: "option4", label: "Alpa" },
  ];

  const handleSave = () => {
    if (isDataChanged) {
      const dataToUpdate = {
        mkValue,
        realisasiValue,
        topikValue,
        selectedStatus,
      };

      // Ganti URL_API dengan URL sesuai dengan API Anda
      fetch(`URL_API/mahasiswa/${id}`, {
        method: "PUT", // Gunakan method PUT untuk edit data
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(dataToUpdate),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log("Data updated successfully:", data);
        })
        .catch((error) => {
          console.error("Error updating data:", error);
        });
    }
  };

  return (
    <div className="p-2">
      <Card size={{ height: "28rem", width: "78%" }}>
        <div className="flex flex-col gap-4">
          <Input
            label="Mata Kuliah"
            type="varchar"
            value={mkValue}
            onChange={handleMkChange}
            disabled
          />
          <Input
            label="Tanggal dan Jam Realisasi"
            type="varchar"
            value={realisasiValue}
            onChange={handleRealisasiChange}
            disabled
          />
          <Input
            label="Topik Perkuliahan"
            type="varchar"
            value={topikValue}
            onChange={handleTopikChange}
            disabled
          />
          <InputDropdown
            label="Status"
            value={selectedStatus}
            options={statusOptions}
            onChange={handleStatusChange}
          />
        </div>
        <div className="flex justify-end mt-12">
          <Link to={`/admin/mahasiswa/rekap/detail/${id}`}>
            <Button
              variant="biru"
              onClick={handleSave}
              disabled={!isDataChanged}
            >
              Simpan
            </Button>
          </Link>
        </div>
      </Card>
    </div>
  );
};

export default FormRekapEditMhs;
