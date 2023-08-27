import React, { useState, useEffect } from "react";
import Dosen from "./Dosen";
import CardUser from "../atoms/CardUser";
import Text from "../atoms/Text";
import Input2 from "../atoms/InputDropdown";
import Table from "../molecules/Tabel";
import axios from "../../api/axios";

export const DosenRekapBulan = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [selectedBulan, setSelectedBulan] = useState("");
  const [rekapDosenBlnData, setRekapDosenBlnData] = useState([]);
  const [rekapitulasi, setRekapitulasi] = useState();
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [totalItem, setTotalItem] = useState(0);

  useEffect(() => {
    async function fetchData() {
      try {
        setIsLoading(true);
        const token = localStorage.getItem("userData")
          ? JSON.parse(localStorage.getItem("userData")).token
          : null;

        const id = localStorage.getItem("userData")
          ? JSON.parse(localStorage.getItem("userData")).id
          : null;

        const response = await axios.get(`/dosen/${id}/rekapitulasiMengajar`, {
          headers: {
            Authorization: token,
          },
          params: {
            bulan: selectedBulan,
            page: currentPage,
          },
        });

        setRekapDosenBlnData(response.data.data);
        setRekapitulasi(response.data.rekapitulasi);
        setTotalPages(response.data.paging.total_page);
        setTotalItem(response.data.paging.total_item);
        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
        console.error("Error fetching data:", error);
      }
    }

    if (selectedBulan) {
      fetchData();
    }
  }, [selectedBulan, currentPage]);

  useEffect(() => {}, [rekapDosenBlnData]);

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
  const pageSizeOptions = [10];

  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setCurrentPage(newPage);
    }
  };

  const handleBulanChange = (event) => {
    setSelectedBulan(event.target.value);
  };

  const formatDate = (dateString) => {
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
  };

  const getHonorKelebihanJamMengajar = (data) => {
    const result = data * 30000;

    if (result <= 0) {
      return 0;
    }

    return result;
  };

  const formattedData = rekapDosenBlnData?.map((item, index) => ({
    No: (currentPage - 1) * pageSizeOptions[0] + index + 1,
    "Mata Kuliah": item.mataKuliah,
    Kelas: item.kelas,
    "Waktu Realisasi": formatDate(item.waktu_realisasi),
    "Total Jam Mengajar": item.total_jam + " Jam",
  }));

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
              {isLoading ? (
                <p>loading...</p>
              ) : (
                <Table
                  columns={columns}
                  data={formattedData}
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
            {!isLoading && (
              <div className="mt-10">
                <div className="flex gap-5">
                  <h2 className="w-60">Total Jam Mengajar </h2>
                  <span>: {rekapitulasi?.total_jam_mengajar} Jam</span>
                </div>
                <div className="flex gap-5">
                  <h2 className="w-60">Kewajiban Jam Mengajar </h2>
                  <span>: {rekapitulasi?.total_kewajiban_mengajar} Jam</span>
                </div>
                <div className="flex gap-5">
                  <h2 className="w-60">Kelebihan Jam Mengajar </h2>
                  <span>: {rekapitulasi?.total_kelebihan_mengajar} Jam</span>
                </div>
                <div className="flex gap-5">
                  <h2 className="w-60">Honor Kelebihan Jam Mengajar </h2>
                  <span>
                    : Rp{" "}
                    {getHonorKelebihanJamMengajar(
                      rekapitulasi?.total_jam_mengajar
                    )}
                  </span>
                </div>
              </div>
            )}
          </div>
        </CardUser>
      </div>
    </div>
  );
};
export default DosenRekapBulan;
