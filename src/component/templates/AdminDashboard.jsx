import React from "react";
import Admin from "../templates/Admin";
import CardManage from "../molecules/CardManage";
import { BsFillPersonFill } from "react-icons/bs";
import { SiGoogleclassroom } from "react-icons/si";

export const AdminDashboard = () => {
  const TbPeringatan = [
    {
      No: "1",
      Nama: "Rifka",
      NIM: "3.34.20.0.21",
      Jurusan: "Teknik Elektro",
      Kompen: "00",
      Aksi: "-",
    },
  ];
  const TbSP = [
    {
      No: "1",
      Nama: "Rifka",
      NIM: "3.34.20.0.21",
      Jurusan: "Teknik Elektro",
      Kompen: "00",
      Aksi: "-",
    },
  ];
  return (
    <div style={{ position: "relative" }}>
      <Admin />
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          gap: "20px",
          position: "absolute",
          top: "20%",
          left: "20%",
        }}
      >
        <CardManage
          width="300px"
          height="100px"
          icon={<BsFillPersonFill />}
          iconColor="#FFD700"
          text1="000"
          text2="Izin"
        />
        <CardManage
          width="300px"
          height="100px"
          icon={<BsFillPersonFill />}
          iconColor="#FF0000"
          text1="000"
          text2="Alpa"
        />
        <CardManage
          width="350px"
          height="100px"
          icon={<SiGoogleclassroom />}
          iconColor="32CD32"
          text1="000"
          text2="Kelas Aktif"
        />
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          marginTop: "5px",
          justifyContent: "space-between",
          gap: "20px",
          position: "absolute",
          top: "400%",
          left: "20%",
        }}
      >
        <CardManage
          width="485px"
          height="400px"
          icon={<BsFillPersonFill />}
          iconColor="gray"
          text1="000"
          text2="Peringatan"
          columns={["No", "Nama", "NIM", "Jurusan", "Kompen", "Aksi"]}
          data={TbPeringatan}
        />{" "}
        <CardManage
          width="485px"
          height="400px"
          icon={<BsFillPersonFill />}
          iconColor="black"
          text1="000"
          text2="SP"
          columns={["No", "Nama", "NIM", "Jurusan", "Kompen", "Aksi"]}
          data={TbSP}
        />
      </div>
    </div>
  );
};

export default AdminDashboard;
