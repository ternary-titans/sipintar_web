import React, { useState } from "react";
import Admin from "./Admin";
import Button from "../atoms/Button";
import TambahDosen from "../organism/FormTambahDosen";

export const AdminDosenTambah = () => {
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
          <Button variant="biru" style={{ marginRight: "10px" }}>
            Simpan
          </Button>
        </div>
        <div style={{ marginTop: "10px" }}>
          <TambahDosen />
        </div>
      </div>
    </div>
  );
};

export default AdminDosenTambah;
