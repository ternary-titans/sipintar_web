import React, { useState } from "react";
import Card from "../atoms/Card";
import Input from "../atoms/Input";
import InputDropdown from "../atoms/InputDropdown";

export const FormEditDosen = () => {
  const [namaValue, setNamaValue] = useState("");
  const [nipValue, setNIPValue] = useState("");
  const [selectedJurusan, setSelectedJurusan] = useState("");
  const [passwordValue, setPasswordValue] = useState("");

  const handleNamaChange = (event) => {
    setNamaValue(event.target.value);
  };

  const handleNIPChange = (event) => {
    setNIPValue(event.target.value);
  };

  const handleJurusanChange = (event) => {
    setSelectedJurusan(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPasswordValue(event.target.value);
  };

  const jurusanOptions = [
    { value: "option1", label: "Option 1" },
    { value: "option2", label: "Option 2" },
    { value: "option3", label: "Option 3" },
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
            label="NIP"
            type="varchar"
            value={nipValue}
            onChange={handleNIPChange}
          />

          <InputDropdown
            label="Jurusan"
            value={selectedJurusan}
            options={jurusanOptions}
            onChange={handleJurusanChange}
          />

          <Input
            label="Password"
            type="password"
            value={passwordValue}
            onChange={handlePasswordChange}
          />
        </div>
      </Card>
    </div>
  );
};

export default FormEditDosen;
