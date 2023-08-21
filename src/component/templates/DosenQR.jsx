import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Dosen from "./Dosen";
import Text from "../atoms/Text";
import CardUser from "../atoms/CardUser";
import { FaTrash } from "react-icons/fa";

export const DosenQR = () => {
  const { id } = useParams();

  const [qrCodeData, setQrCodeData] = useState([]);
  const [dataPresensi, setDataPresensi] = useState([]);

  useEffect(() => {
    fetchQRCodeData(id);
  }, [id]);

  useEffect(() => {
    if (qrCodeData.id) {
      fetchPresensi(qrCodeData.id);
    }
  }, [qrCodeData]);

  async function fetchQRCodeData(id) {
    try {
      const token = localStorage.getItem("userData")
        ? JSON.parse(localStorage.getItem("userData")).token
        : null;

      const response = await axios.get(
        `http://localhost:3000/api/aktivasiPerkuliahan/${id}`,
        {
          headers: {
            Authorization: token,
          },
        }
      );
      setQrCodeData(response.data.data);
    } catch (error) {
      console.error("Error fetching QR Code data:", error);
    }
  }

  async function fetchPresensi(qrId) {
    try {
      const token = localStorage.getItem("userData")
        ? JSON.parse(localStorage.getItem("userData")).token
        : null;

      const response = await axios.get(
        `http://localhost:3000/api/listPresensi/${qrId}`,
        {
          headers: {
            Authorization: token,
          },
        }
      );
      setDataPresensi(response.data.data);
    } catch (error) {
      console.error("Error fetching List Presensi:", error);
    }
  }

  function formatJamMenitDetik(datetimeString) {
    const dateTime = new Date(datetimeString);

    const jam = String(dateTime.getHours()).padStart(2, "0");
    const menit = String(dateTime.getMinutes()).padStart(2, "0");
    const detik = String(dateTime.getSeconds()).padStart(2, "0");

    return `${jam}:${menit}:${detik}`;
  }

  const handleDelete = async (id) => {
    try {
      const token = localStorage.getItem("userData")
        ? JSON.parse(localStorage.getItem("userData")).token
        : null;

      await axios.delete(`http://localhost:3000/api/presensi/${id}`, {
        headers: {
          Authorization: token,
        },
      });
      const updatedData = dataPresensi.filter((item) => item.id !== id);
      setDataPresensi(updatedData);
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
              <table>
                <thead>
                  <tr>
                    <th className="py-1 px-2">No</th>
                    <th className="py-1 px-2">Nama</th>
                    <th className="py-1 px-2">NIM</th>
                    <th className="py-1 px-2">Waktu Presensi</th>
                    <th className="py-1 px-2">Aksi</th>
                  </tr>
                </thead>
                <tbody>
                  {dataPresensi.map((data, index) => (
                    <tr key={index}>
                      <td className="py-1 px-2">{index + 1}</td>
                      <td className="py-1 px-2">{data.nama_mahasiswa}</td>
                      <td className="py-1 px-2">{data.nim}</td>
                      <td className="py-1 px-2">
                        {formatJamMenitDetik(data.waktu_presensi)}
                      </td>
                      <td className="py-1 px-2">
                        <div
                          className="text-center text-red-500 pointer hover:text-red-700 underline"
                          onClick={() => handleDelete(data.id)}
                        >
                          <FaTrash />
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardUser>
        </div>
      </div>
    </div>
  );
};
export default DosenQR;
