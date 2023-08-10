import React from "react";
import Admin from "./Admin";
import Form from "../organism/FormRekapMhs";

export const AdminMahasiswaRekap = () => {
  return (
    <div className="bg-gray-300 h-screen">
      <Admin />
      <div>
        <Form />
      </div>
    </div>
  );
};

export default AdminMahasiswaRekap;
