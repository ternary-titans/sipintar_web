import React from "react";
import Admin from "../templates/Admin";
import { Link } from "react-router-dom";
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
    <div className="bg-gray-300 h-screen">
      <Admin />
      <div className="flex justify-between gap-8 absolute mt-12 ml-[17rem]">
        <Link to="/admin/dashboard/alpa">
          <CardManage
            width="470px"
            height="90px"
            icon={<BsFillPersonFill />}
            iconColor="#FF0000"
            text1="000"
            text2="Alpa"
          />
        </Link>

        <CardManage
          width="470px"
          height="90px"
          icon={<SiGoogleclassroom />}
          iconColor="32CD32"
          text1="000"
          text2="Kelas Aktif"
        />
      </div>
      <div className="flex justify-between gap-8 absolute mt-36 ml-[17rem] mb-2">
        <div className="overflow-y-hidden">
          <CardManage
            width="470px"
            height="390px"
            icon={<BsFillPersonFill />}
            iconColor="gray"
            text1="000"
            text2="Peringatan"
            columns={["No", "Nama", "NIM", "Jurusan", "Alpa", "Aksi"]}
            data={TbPeringatan}
          />
        </div>

        <div className="overflow-y-hidden">
          <CardManage
            width="470px"
            height="390px"
            icon={<BsFillPersonFill />}
            iconColor="black"
            text1="000"
            text2="SP"
            columns={["No", "Nama", "NIM", "Jurusan", "Alpa", "Aksi"]}
            data={TbSP}
          />
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
