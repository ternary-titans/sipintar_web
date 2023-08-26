import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Dosen from "./Dosen";
import CardMk from "../molecules/CardMk";
import CardUser from "../atoms/CardUser";
import Text from "../atoms/Text";
import TabelData from "../molecules/TabelData";
import axios from "../../api/axios";

export const DosenDashboard = () => {
  const columns = ["Waktu", "Kelas", "Ruangan", "Mata Kuliah"];
  const columnWidths = ["100px", "50px", "100px", "200px", "20px"];
  const fontSize = "12px";
  const textAlign = "start";

  const [mkData, setMkData] = useState([]);
  const [jadwalData, setJadwalData] = useState([]);
  const [hari, setHari] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("userData")
      ? JSON.parse(localStorage.getItem("userData")).token
      : null;

    const id = localStorage.getItem("userData")
      ? JSON.parse(localStorage.getItem("userData")).id
      : null;

    axios
      .get(`/dosen/${id}/mataKuliah`, {
        headers: {
          Authorization: token,
        },
      })
      .then((response) => {
        setMkData(response.data.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        console.log("Error response:", error.response);
      });
  }, []);

  useEffect(() => {
    const token = localStorage.getItem("userData")
      ? JSON.parse(localStorage.getItem("userData")).token
      : null;

    const id = localStorage.getItem("userData")
      ? JSON.parse(localStorage.getItem("userData")).id
      : null;

    getNamaHari();

    if (hari !== "") {
      axios
        .get(`/dosen/${id}/jadwal?hari=${hari}`, {
          headers: {
            Authorization: token,
          },
        })
        .then((response) => {
          setJadwalData(response.data.data);
        })
        .catch((error) => console.error("Error fetching data:", error));
    }
  }, [hari]);

  const getNamaHari = () => {
    const hariIni = new Date();
    const kodeHari = hariIni.getDay();

    let namaHari;
    switch (kodeHari) {
      case 0:
        namaHari = "Minggu";
        break;
      case 1:
        namaHari = "Senin";
        break;
      case 2:
        namaHari = "Selasa";
        break;
      case 3:
        namaHari = "Rabu";
        break;
      case 4:
        namaHari = "Kamis";
        break;
      case 5:
        namaHari = "Jumat";
        break;
      case 6:
        namaHari = "Sabtu";
        break;
      default:
        namaHari = "Tidak diketahui";
    }

    setHari(namaHari);
  };

  return (
    <div>
      <Dosen />
      <div className="flex">
        <div className="w-2/3 ml-8 mt-5">
          <div className="flex flex-wrap gap-6 px-1 pb-8">
            {mkData &&
              mkData?.map((rifka) => (
                <Link
                  to={`/dosen/mk/${rifka.kelas_mk_id}`}
                  className="w-[calc(30%_-_1rem)]"
                  key={rifka.kelas_mk_id}
                >
                  <CardMk
                    height={180}
                    text1={rifka.nama_mk}
                    text2={rifka.kelas}
                  />
                </Link>
              ))}
          </div>
        </div>
        <div className="w-1/3 mt-4 mr-8">
          <CardUser
            width={100}
            height={420}
            borderColor="#1e40af"
            borderWidth={2}
          >
            <div className="flex justify-start items-center flex-col h-full">
              <div className="text-center">
                <Text type="title2" text="Jadwal Mengajar Harian" />
                <br />
                <Text type="title2" text={`${hari}`} />
              </div>
              <hr className="w-full h-0.5 bg-black mb-2" />
              <div>
                {jadwalData && (
                  <TabelData
                    colomsData={columns}
                    dataData={jadwalData?.map((item) => ({
                      Waktu: `${item.jam_mulai} - ${item.jam_akhir}`,
                      Kelas: item.kelas,
                      Ruangan: item.ruangan,
                      "Mata Kuliah": item.nama_mk,
                    }))}
                    layout="horizontal"
                    columnWidths={columnWidths}
                    fontSize={fontSize}
                    textAlign={textAlign}
                  />
                )}
                <hr className="w-full h-0.5 bg-gray-400" />
              </div>
            </div>
          </CardUser>
        </div>
      </div>
    </div>
  );
};
export default DosenDashboard;
