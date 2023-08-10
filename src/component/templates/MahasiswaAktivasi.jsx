import React from "react";
import Mahasiswa from "./Mahasiswa";
import CardUser from "../atoms/CardUser";
import Aktivasi from "../organism/Aktivasi";
import Text from "../atoms/Text";

export const MahasiswaAktivasi = () => {
  return (
    <div>
      <Mahasiswa />
      <div style={{ marginTop: "10px", marginLeft: "20px" }}>
        <CardUser
          width={1240}
          height={490}
          borderColor="#312e81"
          borderWidth={2}
        >
          <div>
            <Text type="title3" text="Aktivasi Perkuliahan" />
          </div>
          <Aktivasi />
          <div
            style={{
              marginTop: "20px",
              marginBottom: "10px",
              color: "red",
              fontWeight: "revert",
              fontSize: "14px",
              fontStyle: "italic",
            }}
          >
            <text>
              *Pilih tanggal dan jam perkuliahan sesuai realisasi prkuliahan.
            </text>
            <br />
            <text>
              *Aktivasi perkuliahan hanya bisa dilakukan satu kali oleh salah
              satu perwakilan kelas saja.
            </text>
            <br />
            <text>
              *Setelah klik button AKTIVASI PERKULIAHAN, diharap mahasiswa
              segera melakukan scan QR Code.
            </text>
            <br />
          </div>
          <button className="bg-yellow-400 text-blue-950 font-bold rounded-md py-1 px-4 hover:bg-yellow-600">
            Aktivasi Perkuliahan
          </button>
        </CardUser>
      </div>
    </div>
  );
};
export default MahasiswaAktivasi;
