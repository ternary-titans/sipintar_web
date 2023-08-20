import React, { useState, useEffect } from "react";
import { BsFillPersonFill } from "react-icons/bs";
import Mahasiswa from "./Mahasiswa";
import CardManage from "../molecules/CardManage";
import CardMk from "../molecules/CardMk";
import Text from "../atoms/Text";
import { useNavigate } from "react-router-dom";

export const MahasiswaDashboard = () => {
  const [mkData, setMkData] = useState([]);
  const navigate = useNavigate();

  const handleClick = (id) => {
    localStorage.setItem("kelas_mk_dosen_id", id);
    navigate(`/mahasiswa/mk/${id}`);
  };

  useEffect(() => {
    fetch("http://localhost:3000/api/mahasiswa/1/mataKuliah")
      .then((response) => response.json())
      .then((data) => setMkData(data.data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div className="min-h-screen">
      <Mahasiswa />
      <div>
        <div>
          <div style={{ marginTop: "20px", marginLeft: "30px" }}>
            <Text
              type="warning"
              text="*PERINGATAN: Sudah 15 Jam Anda Alpa, "
            ></Text>
            <Text type="warning" text="1 Jam lagi Anda terkena SP1"></Text>
          </div>

          <div className="flex justify-between gap-10 absolute mt-4 ml-8">
            <CardManage
              width="380px"
              height="100px"
              icon={<BsFillPersonFill />}
              iconColor="#fde047"
              text1="000 Jam"
              text2="Izin"
            />
            <CardManage
              width="380px"
              height="100px"
              icon={<BsFillPersonFill />}
              iconColor="32CD32"
              text1="000 Jam"
              text2="Sakit"
            />
            <CardManage
              width="380px"
              height="100px"
              icon={<BsFillPersonFill />}
              iconColor="#dc2626"
              text1="000 Jam"
              text2="Alpa"
            />
          </div>
          <div className="flex flex-wrap mt-36 gap-5 px-8 pb-8">
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
