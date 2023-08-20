import React, { useState, useEffect } from "react";
import Mahasiswa from "./Mahasiswa";
import CardUser from "../atoms/CardUser";
import Text from "../atoms/Text";
import TableData from "../molecules/TabelData";
import axios from "axios";

export const MahasiswaQR = () => {
  const columns = ["No", "Nama", "NIM", "Waktu Presensi"];

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

  const [presensiData, setPresensiData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    try {
      const response = await axios.get(
        `http://localhost:3000/api/listPresensi/1`
      );
      console.log("API response:", response.data);
      setPresensiData(response.data.data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching data:", error);
      setLoading(false);
    }
  }

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
              {!loading && presensiData.length > 0 ? (
                <TableData
                  columns={columns}
                  data={presensiData.map((item, index) => ({
                    No: index + 1,
                    Nama: item.nama_mahasiswa,
                    NIM: item.nim,
                    "Waktu Presensi": item.waktu_presensi,
                  }))}
                  layout="horizontal"
                  columnWidths={columnWidths}
                  fontSize={fontSize}
                  textAlign={textAlign}
                />
              ) : (
                <p>No data available.</p>
              )}
            </div>
          </CardUser>
        </div>
      </div>
    </div>
  );
};
export default MahasiswaQR;
