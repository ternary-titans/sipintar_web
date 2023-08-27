import React, { useState, useEffect } from "react";
import { BsFillPersonFill } from "react-icons/bs";
import Mahasiswa from "./Mahasiswa";
import CardManage from "../molecules/CardManage";
import CardMk from "../molecules/CardMk";
import Text from "../atoms/Text";
import { useNavigate } from "react-router-dom";
import axios from "../../api/axios";

export const MahasiswaDashboard = () => {
  const navigate = useNavigate();
  const [mkData, setMkData] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem("userData")
      ? JSON.parse(localStorage.getItem("userData")).token
      : null;

    const id = localStorage.getItem("userData")
      ? JSON.parse(localStorage.getItem("userData")).id
      : null;

    axios
      .get(`/mahasiswa/${id}/mataKuliah`, {
        headers: {
          Authorization: token,
        },
      })
      .then((response) => {
        setMkData(response.data.data);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const handleClick = (id) => {
    localStorage.setItem("kelas_mk_dosen_id", id);
    navigate(`/mahasiswa/mk/${id}`);
  };

  const [rekapMHSData, setRekapMHsData] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("userData")
      ? JSON.parse(localStorage.getItem("userData")).token
      : null;

    const id = localStorage.getItem("userData")
      ? JSON.parse(localStorage.getItem("userData")).id
      : null;

    async function fetchData() {
      try {
        const response = await axios.get(`/mahasiswa/${id}/rekapitulasi`, {
          headers: {
            Authorization: token,
          },
        });
        setRekapMHsData(response.data.data.rekapitulasi);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    if (!rekapMHSData) {
      fetchData();
    }
  }, [rekapMHSData]);

  return (
    <div className="min-h-screen">
      <Mahasiswa />
      <div>
        <div>
          <div style={{ marginTop: "20px", marginLeft: "30px" }}>
            <Text
              type="warning"
              text="*PERINGATAN: 16 Jam Alpa SP1, 24 Jam Alpa SP2, 32 Jam Alpa SP3 !"
            ></Text>
          </div>

          <div>
            {rekapMHSData && (
              <div className="flex justify-between gap-10 absolute mt-4 ml-8">
                <CardManage
                  width="375px"
                  height="100px"
                  icon={<BsFillPersonFill />}
                  iconColor="#fde047"
                  text1={`${rekapMHSData[0]?.total_izin || "000"} Jam`}
                  text2="Izin"
                />
                <CardManage
                  width="375px"
                  height="100px"
                  icon={<BsFillPersonFill />}
                  iconColor="32CD32"
                  text1={`${rekapMHSData[0]?.total_sakit || "000"} Jam`}
                  text2="Sakit"
                />
                <CardManage
                  width="375px"
                  height="100px"
                  icon={<BsFillPersonFill />}
                  iconColor="#dc2626"
                  text1={`${rekapMHSData[0]?.total_alpa || "000"} Jam`}
                  text2="Alpa"
                />
              </div>
            )}
          </div>
          <div className="ml-8 mt-40">
            <Text type="title" text="DAFTAR MATA KULIAH"></Text>
          </div>
          <div className="flex flex-wrap mt-4 gap-5 px-8 pb-8">
            {mkData.map((rifka) => (
              <button
                onClick={() => handleClick(rifka.kelas_mk_id)}
                className="w-[calc(25%_-_1rem)]"
                key={rifka.kelas_mk_id}
              >
                <CardMk
                  height={180}
                  text1={rifka.nama_mk}
                  text2={rifka.kelas}
                />
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default MahasiswaDashboard;
