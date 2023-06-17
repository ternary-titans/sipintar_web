import React from "react";
import Admin from "./Admin";
import Form from "../organism/FormRekapMhs";

export const AdminMahasiswaRekap = () => {
  return (
    <div className="bg-gray-300 w-screen h-screen">
      <Admin />
      <div style={{ marginTop: "10px" }}>
        <Form />
      </div>
    </div>
  );
};

export default AdminMahasiswaRekap;
