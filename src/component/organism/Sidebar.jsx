import React from "react";
import { useState } from "react";
import { HiOutlineViewList } from "react-icons/hi";
import SidebarData from "../molecules/SidebarData";
import UserProfile from "../molecules/UserProfile";

const Sidebar = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <div className={`${toggle ? "w-[5rem]" : ""} sidebar-container h-screen`}>
      <UserProfile toggle={toggle} />
      <SidebarData toggle={toggle} />
      <div
        className={`${
          !toggle ? "-left-14" : "left-20"
        } absolute top-[1.5rem] flex justify-center items-center w-10 h-0 bg-glass rounded-full cursor-pointer transition-all duration-300`}
        onClick={() => {
          setToggle(!toggle);
        }}
      >
        <HiOutlineViewList
          className={`${
            toggle
              ? "rotate-0 "
              : " absolute flex justify-center items-center cursor-pointer left-80 "
          } text-3xl transition-all duration-300`}
        />
      </div>
    </div>
  );
};

export default Sidebar;
