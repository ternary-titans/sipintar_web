import React from "react";
import Mahasiswa from "./Mahasiswa";
import CardUser from "../atoms/CardUser";
import Aktivasi from "../organism/Aktivasi";
import Text from "../atoms/Text";
import { useParams } from "react-router-dom";

export const MahasiswaAktivasi = () => {
  const { id } = useParams();
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
          <Aktivasi id={id} />
        </CardUser>
      </div>
    </div>
  );
};
export default MahasiswaAktivasi;
