import React, { useState, useEffect } from "react";
import Dosen from "./Dosen";
import CardUser from "../atoms/CardUser";
import Text from "../atoms/Text";
import Input2 from "../atoms/InputDropdown";
import Table from "../molecules/Tabel";
import axios from "axios";

export const DosenRekapBulan = () => {
  const [selectedBulan, setSelectedBulan] = useState("");

  const handleBulanChange = (event) => {
    setSelectedBulan(event.target.value);
  };

  const BulanOptions = [
    { id: "", label: "Pilih Bulan" },
    { id: 1, label: "Januari" },
    { id: 2, label: "Februari" },
    { id: 3, label: "Maret" },
    { id: 4, label: "April" },
    { id: 5, label: "Mei" },
    { id: 6, label: "Juni" },
    { id: 7, label: "Juli" },
    { id: 8, label: "Agustus" },
    { id: 9, label: "September" },
    { id: 10, label: "Oktober" },
    { id: 11, label: "November" },
    { id: 12, label: "Desember" },
  ];

  const columns = [
    "No",
    "Mata Kuliah",
    "Kelas",
    "Waktu Realisasi",
    "Total Jam Mengajar",
  ];
  const columnAlignments = [
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

  const [rekapDosenBlnData, setRekapDosenBlnData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const token = localStorage.getItem("userData")
          ? JSON.parse(localStorage.getItem("userData")).token
          : null;

        const id = localStorage.getItem("userData")
          ? JSON.parse(localStorage.getItem("userData")).id
          : null;

        const response = await axios.get(
          `http://localhost:3000/api/dosen/${id}/rekapitulasiMengajar`,
          {
            headers: {
              Authorization: token,
            },
          }
        );

        setRekapDosenBlnData(response.data.data.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchData();
  }, [selectedBulan]);

  function formatDate(dateString) {
    const dateObject = new Date(dateString);

    const months = [
      "Januari",
      "Februari",
      "Maret",
      "April",
      "Mei",
      "Juni",
      "Juli",
      "Agustus",
      "September",
      "Oktober",
      "November",
      "Desember",
    ];

    const day = dateObject.getDate();
    const month = dateObject.getMonth();
    const year = dateObject.getFullYear();

    const formattedDate = `${day} ${months[month]} ${year}`;
    return formattedDate;
  }

  const getTotalJamMengajar = (data) => {
    const totalJamSum = data?.reduce((accumulator, currentValue) => {
      return accumulator + currentValue.total_jam;
    }, 0);

    return totalJamSum;
  };

  const getKelebihanJamMengajar = (data) => {
    const result = data - 36;
    if (result <= 0) {
      return 0;
    }
    return result;
  };

  const getHonorKelebihanJamMengajar = (data) => {
    const result = (data - 36) * 30000;

    if (result <= 0) {
      return 0;
    }
    return result;
  };

  return (
    <div>
      <Dosen />
      <div style={{ margin: "20px" }}>
        <CardUser width={1220} borderColor="#9ca3af" borderWidth={2}>
          <div>
            <Text type="title3" text="Rekapitulasi Mengajar Dosen" />
            <div className="flex gap-8 mt-5 w-80">
              <Input2
                label="Bulan"
                uniqueKeys="label"
                value={selectedBulan}
                options={BulanOptions}
                onChange={handleBulanChange}
              />
            </div>
            <div style={{ marginTop: "30px" }}>
              <Table
                columns={columns}
                data={rekapDosenBlnData?.map((item, index) => ({
                  No: index + 1,
                  "Mata Kuliah": item.mataKuliah,
                  Kelas: item.kelas,
                  "Waktu Realisasi": formatDate(item.waktu_realisasi),
                  "Total Jam Mengajar": item.total_jam,
                }))}
                columnAlignments={columnAlignments}
                headerBackgroundColor={headerBackgroundColor}
                headerBorderColor={headerBorderColor}
                pageSizeOptions={pageSizeOptions}
                style={{ marginTop: "10px" }}
              />
            </div>
            <div style={{ marginTop: "10px" }}>
              <div className="flex gap-5">
                <h2>Total Jam Mengajar :</h2>
                <span>{getTotalJamMengajar(rekapDosenBlnData)} Jam</span>
              </div>
              <div className="flex gap-5">
                <h2>Kewajiban Jam Mengajar :</h2>
                <span>36 Jam</span>
              </div>
              <div className="flex gap-5">
                <h2>Kelebihan Jam Mengajar :</h2>
                <span>
                  {getKelebihanJamMengajar(
                    getTotalJamMengajar(rekapDosenBlnData)
                  )}{" "}
                  Jam
                </span>
              </div>
              <div className="flex gap-5">
                <h2>Honor Kelebihan Jam Mengajar :</h2>
                <span>
                  {getHonorKelebihanJamMengajar(
                    getTotalJamMengajar(rekapDosenBlnData)
                  )}{" "}
                  Jam
                </span>
              </div>
            </div>
          </div>
        </CardUser>
      </div>
    </div>
  );
};
export default DosenRekapBulan;
