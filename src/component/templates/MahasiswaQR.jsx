import React, { useState, useEffect } from "react";
import Mahasiswa from "./Mahasiswa";
import CardUser from "../atoms/CardUser";
import Text from "../atoms/Text";
import TableData from "../molecules/TabelData";
import axios from "axios";
import { useParams } from "react-router-dom";

export const MahasiswaQR = () => {
  const { id } = useParams();
  const columns = ["id", "nama_mahasiswa", "nim"];
  const columnWidths = ["30px", "150px", "20px"];
  const fontSize = "12px";
  const textAlign = "start";

  const [qrCodeData, setQrCodeData] = useState([]);
  const [dataPresensi, setDataPresensi] = useState([]);

  useEffect(() => {
    fetchQRCodeData(id);
  }, [id]);

  useEffect(() => {
    if (qrCodeData.id) {
      // Menambahkan pengecekan qrCodeData.id sebelum memanggil fetchPresensi
      fetchPresensi(qrCodeData.id);
    }
  }, [qrCodeData]);

  async function fetchQRCodeData(id) {
    try {
      const response = await axios.get(
        `http://localhost:3000/api/aktivasiPerkuliahan/${id}`
      );
      setQrCodeData(response.data.data);
    } catch (error) {
      console.error("Error fetching QR Code data:", error);
    }
  }

  async function fetchPresensi(qrId) {
    try {
      const response = await axios.get(
        `http://localhost:3000/api/listPresensi/${qrId}`
      );
      setDataPresensi(response.data.data);
    } catch (error) {
      console.error("Error fetching List Presensi:", error);
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
            <img src={qrCodeData?.qr_code} alt="qr code presensi" />
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
                dataData={dataPresensi}
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
