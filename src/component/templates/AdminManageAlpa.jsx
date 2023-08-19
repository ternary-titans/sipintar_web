import React from "react";
import Admin from "../templates/Admin";
import CardManage from "../molecules/CardManage";
import { BsFillPersonFill, BsCheck } from "react-icons/bs";

export const AdminManageAlpa = () => {
  const columns = [
    "No",
    "Nama",
    "NIM",
    "Tanggal Realisasi",
    "Mata Kuliah",
    "Dosen",
    "Presensi",
    "Simpan",
  ];
  const data = [
    {
      No: 1,
      Nama: "Rifka",
      NIM: "33420021",
      "Tanggal Realisasi": "21 Jan 2023",
      "Mata Kuliah": "Jaringan",
      Dosen: "Amran Yobioktabera",
      Presensi: (
        <select>
          <option value="Alpa">Alpa</option>
          <option value="Sakit">Sakit</option>
          <option value="Izin">Izin</option>
        </select>
      ),
      Simpan: (
        <button className="text-green-500">
          <BsCheck size={20} />
        </button>
      ),
    },
  ];
  return (
    <div className="bg-gray-300 h-screen">
      <div className="relative">
        <Admin />
        <div className="flex items-center mt-5 justify-between gap-20 absolute top-[180%] left-[21%]">
          <CardManage
            width="985px"
            height="490px"
            icon={<BsFillPersonFill />}
            iconColor="#FF0000"
            text1="000"
            text2="Alpa"
            columns={columns}
            data={data}
          />
        </div>
      </div>
    </div>
  );
};

export default AdminManageAlpa;
