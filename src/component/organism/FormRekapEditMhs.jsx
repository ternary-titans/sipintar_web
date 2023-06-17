import React, { useState } from "react";
import Card from "../atoms/Card";
import Input from "../atoms/Input";
import Text from "../atoms/Text";

export const FormRekapEditMhs = () => {
  const [namaValue, setNamaValue] = useState("");
  const [nimValue, setNIMValue] = useState("");
  const [matkulValue, setMatkulValue] = useState("");
  const [sakitValue, setSakitValue] = useState("");
  const [izinValue, setIzinValue] = useState("");
  const [alpaValue, setAlpaValue] = useState("");
  const [kompenValue, setKompenValue] = useState("");

  const handleNamaChange = (event) => {
    setNamaValue(event.target.value);
  };
  const handleNIMChange = (event) => {
    setNIMValue(event.target.value);
  };
  const handleMatkulChange = (event) => {
    setMatkulValue(event.target.value);
  };
  const handleSakitChange = (event) => {
    setSakitValue(event.target.value);
  };
  const handleIzinChange = (event) => {
    setIzinValue(event.target.value);
  };
  const handleAlpaChange = (event) => {
    setAlpaValue(event.target.value);
  };
  const handleKompenChange = (event) => {
    setKompenValue(event.target.value);
  };

  return (
    <div className="p-2">
      <Card size={{ height: "calc(100vh - 72px)", width: "81.5%" }}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "20px",
            marginLeft: "10px",
            marginRight: "10px",
          }}
        >
          <Input
            label="Nama"
            type="text"
            value={namaValue}
            onChange={handleNamaChange}
          />
          <Input
            label="NIM"
            type="varchar"
            value={nimValue}
            onChange={handleNIMChange}
          />
          <Input
            label="Mata Kuliah"
            type="varchar"
            value={matkulValue}
            onChange={handleMatkulChange}
          />
          <div style={{ display: "flex", gap: "30px", alignItems: "center" }}>
            <Input
              label="Sakit"
              type="varchar"
              value={sakitValue}
              onChange={handleSakitChange}
            />
            <Input
              label="Izin"
              type="varchar"
              value={izinValue}
              onChange={handleIzinChange}
            />
            <Input
              label="Alpa"
              type="varchar"
              value={alpaValue}
              onChange={handleAlpaChange}
            />
            <Text type="text2" text="jam" style={{ margin: 0 }}></Text>
          </div>

          <Input
            label="Kompen"
            type="varchar"
            value={kompenValue}
            onChange={handleKompenChange}
          />
        </div>
      </Card>
    </div>
  );
};

export default FormRekapEditMhs;
