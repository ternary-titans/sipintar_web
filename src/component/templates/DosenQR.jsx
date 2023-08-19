import React, { useEffect, useState } from "react";
import Dosen from "./Dosen";
import CardUser from "../atoms/CardUser";
import Text from "../atoms/Text";
import TableData from "../molecules/TabelData";
import axios from "axios";

export const DosenQR = () => {
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

  const [qrCodeData, setQrCodeData] = useState("");

  useEffect(() => {
    fetchQRCodeData();
  }, []);

  async function fetchQRCodeData() {
    try {
      const response = await axios.get(
        `http://localhost:3000/api/mahasiswa/1/listPertemuan/1`
      );
      // setQrCodeData(response.data.data);
      const qrCodeArray = response.data.data;
      if (qrCodeArray.length > 0) {
        const qrCodeData = qrCodeArray[0].qr_code;
        setQrCodeData(qrCodeData);
      }
    } catch (error) {
      console.error("Error fetching QR Code data:", error);
    }
  }

  return (
    <div>
      <Dosen />
      <div className="flex">
        <div className="m-8">
          <CardUser
            width={900}
            height={420}
            borderColor="#1e40af"
            borderWidth={2}
          >
            <img src={qrCodeData} alt="" />
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
export default DosenQR;
