import React from "react";
import { useState } from "react";
import { HiOutlineViewList } from "react-icons/hi";
import SidebarData from "../molecules/SidebarData";
import UserProfile from "../molecules/UserProfile";

const Sidebar = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <div
      className={`${toggle ? "w-[5rem]" : ""} sidebar-container min-h-screen`}
    >
      <UserProfile toggle={toggle} />
      <SidebarData toggle={toggle} />
      <div
        className={`${
          !toggle ? "-left-0" : "left-20"
        } absolute top-[1.55rem] flex justify-center items-center w-8 h-0 bg-glass rounded-full cursor-pointer transition-all duration-300`}
        onClick={() => {
          setToggle(!toggle);
        }}
      >
        <HiOutlineViewList
          className={`${
            toggle
              ? "rotate-0"
              : "absolute flex justify-center items-center cursor-pointer left-80"
          } text-4xl transition-all duration-300`}
          style={{
            transformOrigin: "center",
            border: "2px solid transparent",
            borderColor: toggle ? "#facc15" : "transparent",
            transition: "border-color 300ms",
            backgroundColor: "#facc15",
            transform: toggle ? "translateX(0%)" : "translateX(-275%)",
          }}
        />
      </div>
    </div>
  );
};

export default Sidebar;
