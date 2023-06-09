import React from "react";
import Sidebar from "../organism/Sidebar";
import Navbar from "../organism/Navbar";

export const Admin = () => {
  return (
    <div className="flex bg-indigo-900 p-0 w-screen h-[3.125rem]">
      <Sidebar />
      <Navbar />
    </div>
  );
};

export default Admin;
