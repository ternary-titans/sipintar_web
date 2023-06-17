import React, { useState } from "react";
import Card from "../atoms/Card";
import Input from "../atoms/Input";
import InputDropdown from "../atoms/InputDropdown";

export const FormEditMhs = () => {
  const [namaValue, setNamaValue] = useState("");
  const [nimValue, setNIMValue] = useState("");
  const [selectedJurusan, setSelectedJurusan] = useState("");
  const [selectedProdi, setSelectedProdi] = useState("");
  const [klsValue, setKlsValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");

  const handleNamaChange = (event) => {
    setNamaValue(event.target.value);
  };

  const handleNIMChange = (event) => {
    setNIMValue(event.target.value);
  };

  const handleJurusanChange = (event) => {
    setSelectedJurusan(event.target.value);
  };
  const handleProdiChange = (event) => {
    setSelectedProdi(event.target.value);
  };
  const handleKlsChange = (event) => {
    setKlsValue(event.target.value);
  };
  const handlePasswordChange = (event) => {
    setPasswordValue(event.target.value);
  };

  const jurusanOptions = [
    { value: "option1", label: "Option 1" },
    { value: "option2", label: "Option 2" },
    { value: "option3", label: "Option 3" },
  ];

  const prodiOptions = [
    { value: "option4", label: "Option 4" },
    { value: "option5", label: "Option 5" },
    { value: "option6", label: "Option 6" },
  ];

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
          <InputDropdown
            label="Jurusan"
            value={selectedJurusan}
            options={jurusanOptions}
            onChange={handleJurusanChange}
          />
          <InputDropdown
            label="Program Studi"
            value={selectedProdi}
            options={prodiOptions}
            onChange={handleProdiChange}
          />
          <Input
            label="Kelas"
            type="varchar"
            value={klsValue}
            onChange={handleKlsChange}
          />
          <Input
            label="Password"
            type="password"
            value={passwordValue}
            onChange={handlePasswordChange}
          />
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            marginTop: "1rem",
            height: "32px",
          }}
        ></div>
      </Card>
    </div>
  );
};

export default FormEditMhs;
