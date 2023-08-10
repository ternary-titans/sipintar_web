import React from "react";
import Mahasiswa from "./Mahasiswa";
import { Link } from "react-router-dom";
import CardManage from "../molecules/CardManage";
import CardMk from "../molecules/CardMk";
import Text from "../atoms/Text";
import { BsFillPersonFill } from "react-icons/bs";
const data = [
  {
    id: 1,
    nama: "pbo",
    kelas: "IKA",
  },
  {
    id: 2,
    nama: "pbi",
    kelas: "IKA",
  },
  {
    id: 3,
    nama: "pba",
    kelas: "IKA",
  },
  {
    id: 4,
    nama: "pbu",
    kelas: "IKC",
  },
  {
    id: 5,
    nama: "pbe",
    kelas: "IKD",
  },
];

export const MahasiswaDashboard = () => {
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
            {data.map((rifka) => (
              <Link
                to={`/mahasiswa/mk/${rifka.id}`}
                className="w-[calc(25%_-_1rem)]"
              >
                <CardMk height={180} text1={rifka.nama} text2={rifka.kelas} />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default MahasiswaDashboard;
