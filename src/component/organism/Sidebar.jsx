import React from "react";
import SidebarData from "../molecules/SidebarData";
import UserProfile from "../molecules/UserProfile";

const Sidebar = () => {
  return (
    <div className="sidebar-container">
      <UserProfile />
      <SidebarData />
    </div>
  );
};

export default Sidebar;
