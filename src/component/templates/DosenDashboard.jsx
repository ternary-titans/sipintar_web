import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Dosen from "./Dosen";
import CardMk from "../molecules/CardMk";
import CardUser from "../atoms/CardUser";
import Text from "../atoms/Text";
import TabelData from "../molecules/TabelData";

export const DosenDashboard = () => {
  const columns = ["Waktu", "Kelas", "Ruangan", "Mata Kuliah"];
  const data = [
    {
      Waktu: "07.00 - 08.00",
      Kelas: "IK3A",
      Ruangan: "SBII/07",
      "Mata Kuliah": "Pemrograman Basis Data",
    },
    {
      Waktu: "07.00 - 08.00",
      Kelas: "IK3A",
      Ruangan: "SBII/07",
      "Mata Kuliah": "Pemrograman Basis Data",
    },
    {
      Waktu: "07.00 - 08.00",
      Kelas: "IK3A",
      Ruangan: "SBII/07",
      "Mata Kuliah": "Pemrograman Basis Data Jaringan",
    },
  ];

  const columnWidths = ["100px", "50px", "100px", "200px", "20px"];
  const fontSize = "12px";
  const textAlign = "start";

  const [mkData, setMkData] = useState([]);
  const dosenId = 1;

  useEffect(() => {
    fetch(`http://localhost:3000/api/dosen/${dosenId}/mataKuliah`)
      .then((response) => response.json())
      .then((data) => {
        setMkData(data.mkData);
      })
      .catch((error) =>
        console.error("Error fetching mata kuliah data:", error)
      );
  }, [dosenId]);

  return (
    <div>
      <Dosen />
      <div className="flex">
        <div className="flex-1 mr-2">
          <div className="flex flex-wrap ml-8 mt-5 gap-6 px-1 pb-8">
            {mkData &&
              mkData.map((rifka) => (
                <Link
                  to={`/dosen/mk/${rifka.id}`}
                  className="w-[calc(30%_-_1rem)]"
                  key={rifka.id}
                >
                  <CardMk
                    height={180}
                    text1={rifka.nama_mk + "" + rifka.kode_mk}
                    text2={rifka.kelas}
                  />
                </Link>
              ))}
          </div>
        </div>
        <div className="flex-1 mt-4 mr-8 overflow-y-auto justify-start">
          <div>
            <CardUser
              width={0}
              height={420}
              borderColor="#1e40af"
              borderWidth={2}
            >
              <div className="flex justify-start items-center flex-col h-full">
                <div className="text-center">
                  <Text type="title2" text="Jadwal Mengajar Harian" />
                  <br />
                  <Text type="title2" text="Senin, 10 Mei 2023" />
                </div>
                <hr className="w-full h-0.5 bg-black mb-2" />
                <div>
                  <TabelData
                    colomsData={columns}
                    dataData={data}
                    layout="horizontal"
                    columnWidths={columnWidths}
                    fontSize={fontSize}
                    textAlign={textAlign}
                  />
                  <hr className="w-full h-0.5 bg-gray-400" />
                </div>
              </div>
            </CardUser>
          </div>
        </div>
      </div>
    </div>
  );
};
export default DosenDashboard;
