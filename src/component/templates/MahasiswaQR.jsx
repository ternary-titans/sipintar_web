import React from "react";
import Mahasiswa from "./Mahasiswa";
import CardUser from "../atoms/CardUser";
import Text from "../atoms/Text";
import TableData from "../molecules/TabelData";

export const MahasiswaQR = () => {
  const columns = ["No", "Nama", "NIM"];
  const data = [
    {
      No: "1",
      Nama: "Rifka Anggun",
      NIM: "3.34.20.0.21",
    },
  ];

  const columnWidths = ["30px", "150px", "20px"];
  const fontSize = "12px";
  const textAlign = "start";
  return (
    <div>
      <Mahasiswa />
      <div className="flex">
        <div className="m-8">
          <CardUser
            width={900}
            height={420}
            borderColor="#1e40af"
            borderWidth={2}
          >
            {/*<div>
              <QRCode1 />
            </div>*/}
          </CardUser>
        </div>
        <div className="m-8">
          <CardUser
            width={300}
            height={420}
            borderColor="#9ca3af"
            borderWidth={2}
          >
            <div>
              <Text type="text1" text="Rekap Presensi" />
            </div>
            <hr className="w-full h-0.5 bg-black" />
            <div>
              <TableData
                colomsData={columns}
                dataData={data}
                layout="horizontal"
                columnWidths={columnWidths}
                fontSize={fontSize}
                textAlign={textAlign}
              />
            </div>
          </CardUser>
        </div>
      </div>
    </div>
  );
};
export default MahasiswaQR;
