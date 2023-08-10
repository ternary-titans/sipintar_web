import React from "react";
import Admin from "./Admin";
import Form from "../organism/FormRekapDosen";

export const AdminRekapDosen = () => {
  return (
    <div className="bg-gray-300 h-screen">
      <Admin />
      <div className="mt-14">
        <Form />
      </div>
    </div>
  );
};

export default AdminRekapDosen;
