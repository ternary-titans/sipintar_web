import React, { useEffect, useState } from "react";
import Dosen from "./Dosen";
import CardUser from "../atoms/CardUser";
import Text from "../atoms/Text";
import TableData from "../molecules/TabelData";
import { BsTrash } from "react-icons/bs";
import axios from "axios";

export const DosenQR = () => {
  const columns = ["No", "Nama", "NIM", "Presensi", "Validasi"];

  const columnWidths = ["30px", "150px", "100px", "100px", "100px"];
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

  const [listRekapData, setListRekapData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(
          `http://localhost:3000/api/listPresensi/1`
        );
        setListRekapData(response.data.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    }
    fetchData();
  }, [listRekapData, setListRekapData]);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:3000/api/listPresensi/${id}`);
      const updatedData = listRekapData.filter((item) => item.id !== id);
      setListRekapData(updatedData);
    } catch (error) {
      console.error("Error deleting data:", error);
    }
  };

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
              {loading ? (
                <p>Loading...</p>
              ) : (
                <TableData
                  colomsData={columns}
                  dataData={listRekapData.map((item, index) => ({
                    No: index + 1,
                    Nama: item.nama_mahasiswa,
                    NIM: item.nim,
                    Presensi: item.waktu_presensi,
                    Validasi: (
                      <div className="flex items-center justify-center">
                        <button
                          onClick={() => handleDelete(item.id)}
                          className="text-red-500"
                        >
                          <BsTrash className="" />
                        </button>
                      </div>
                    ),
                  }))}
                  layout="horizontal"
                  columnWidths={columnWidths}
                  fontSize={fontSize}
                  textAlign={textAlign}
                />
              )}
            </div>
          </CardUser>
        </div>
      </div>
    </div>
  );
};
export default DosenQR;
