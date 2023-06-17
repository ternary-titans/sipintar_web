import React from "react";
import Admin from "../templates/Admin";
import CardManage from "../molecules/CardManage";
import { BsFillPersonFill } from "react-icons/bs";

export const AdminManageAlpa = () => {
  const TbAlpa = [
    {
      No: "1",
      Nama: "Rifka",
      NIM: "3.34.20.0.21",
      Hari: "Senin",
      Tanggal: "6 Mei 2023",
      "Mata Kuliah": "Pemrograman Basis Data",
      Dosen: "Amran Yobioktabera",
      Presensi: "-",
      "Validasi Kehadiran": "-",
    },
  ];
  return (
    <div style={{ position: "relative" }}>
      <Admin />
      <div
        style={{
          display: "flex",
          alignItems: "center",
          marginTop: "5px",
          justifyContent: "space-between",
          gap: "20px",
          position: "absolute",
          top: "200%",
          left: "20%",
        }}
      >
        <CardManage
          width="985px"
          height="490px"
          icon={<BsFillPersonFill />}
          iconColor="#FF0000"
          text1="000"
          text2="Alpa"
          columns={[
            "No",
            "Nama",
            "NIM",
            "Hari",
            "Tanggal",
            "Mata Kuliah",
            "Dosen",
            "Presensi",
            "Validasi Kehadiran",
          ]}
          data={TbAlpa}
        />
      </div>
    </div>
  );
};

export default AdminManageAlpa;
