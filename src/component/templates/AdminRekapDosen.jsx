import React from "react";
import Admin from "./Admin";
import Form from "../organism/FormRekapDosen";

export const AdminRekapDosen = () => {
  return (
    <div className="bg-gray-300 w-screen h-screen">
      <Admin />
      <div style={{ marginTop: "10px" }}>
        <Form />
      </div>
    </div>
  );
};

export default AdminRekapDosen;
