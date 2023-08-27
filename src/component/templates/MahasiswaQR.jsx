import React, { useState, useEffect } from "react";
import Mahasiswa from "./Mahasiswa";
import CardUser from "../atoms/CardUser";
import Text from "../atoms/Text";
import axios from "../../api/axios";
import { useParams } from "react-router-dom";

export const MahasiswaQR = () => {
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
    const token = localStorage.getItem("userData")
      ? JSON.parse(localStorage.getItem("userData")).token
      : null;

    try {
      const response = await axios.get(`/aktivasiPerkuliahan/${id}`, {
        headers: {
          Authorization: token,
        },
      });
      setQrCodeData(response.data.data);
    } catch (error) {
      console.error("Error fetching QR Code data:", error);
    }
  }

  async function fetchPresensi(qrId) {
    const token = localStorage.getItem("userData")
      ? JSON.parse(localStorage.getItem("userData")).token
      : null;

    try {
      const response = await axios.get(`/listPresensi/${qrId}`, {
        headers: {
          Authorization: token,
        },
      });
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
              {dataPresensi.length > 0 ? (
                <table>
                  <thead>
                    <tr>
                      <th className="py-1 px-2">No</th>
                      <th className="py-1 px-2">Nama</th>
                      <th className="py-1 px-2">NIM</th>
                      <th className="py-1 px-2">Waktu Presensi</th>
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
                      </tr>
                    ))}
                  </tbody>
                </table>
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
