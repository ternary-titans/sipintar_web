import React from "react";
import { Link } from "react-router-dom";
import { datas } from "./Data";

const SidebarData = () => {
  return (
    <div className="">
      {datas.map((data) => {
        let routePath = "";
        switch (data.id) {
          case 1:
            routePath = "/admin/dashboard";
            break;
          case 2:
            routePath = "/admin/dosen";
            break;
          case 3:
            routePath = "/admin/mahasiswa";
            break;
          case 4:
            routePath = "/admin/jadwal";
            break;
          case 5:
            routePath = "/admin/matkul";
            break;
          case 6:
            routePath = "/admin/kelas";
            break;
          case 7:
            routePath = "/admin/prodi";
            break;
          case 8:
            routePath = "/admin/jurusan";
            break;
          case 9:
            routePath = "/admin/tahunajaran";
            break;
          default:
            break;
        }

        return (
          <div
            className="w-[14rem] sidebar last:absolute left-3 flex items-center"
            key={data.id}
          >
            <Link to={routePath} className="flex items-center">
              <div className="mr-2 text-[1.7rem] text-brown">{data.icon}</div>
              <div className="text-[1rem] text-white whitespace-pre">
                {data.text}
              </div>
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default SidebarData;
