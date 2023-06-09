import React, { useState } from "react";
import Admin from "./Admin";
import Button from "../atoms/Button";
import Card from "../atoms/Card";
import Input from "../atoms/Input";
import Input2 from "../atoms/InputDropdown";

export const AdminDosen = () => {
  /*const [inputValue, setInputValue] = useState("");*/
  const [name, setName] = useState("");
  const [department, setDepartment] = useState("");

  /*const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };*/

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleDepartmentChange = (event) => {
    setDepartment(event.target.value);
  };

  return (
    <div className="bg-gray-300 w-screen h-screen">
      <Admin />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "start",
          height: "100vh",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            marginTop: "44px",
          }}
        >
          <Button
            variant="biru"
            style={{ width: "200px", marginRight: "10px" }}
          >
            Masukkan Dosen Baru
          </Button>
          <Button variant="kuning">Rekap Presensi</Button>
        </div>
        <div style={{ marginTop: "10px" }}>
          <Card>
            <Input
              label="Nama"
              value={name}
              onChange={handleNameChange}
              style={{ marginBottom: "10px" }}
            />

            <Input2
              label="Jurusan"
              value={department}
              onChange={handleDepartmentChange}
            />
          </Card>
        </div>
      </div>
    </div>
  );
};

export default AdminDosen;
