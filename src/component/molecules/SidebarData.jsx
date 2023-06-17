import React from "react";
import { datas } from "./Data";

const SidebarData = ({ toggle }) => {
  return (
    <div className="">
      {datas.map((data) => {
        return (
          <div
            className={`${
              toggle ? "last:w-[3.6rem]" : "last:w-[12.5rem]"
            } sidebar last:absolute left-3 bottom-10`}
            key={data.id}
          >
            <div className="mr-4 text-[1.7rem] text-brown">{data.icon}</div>
            <div
              className={`${
                toggle ? "opacity-0 delay-200" : ""
              } text-[1rem] text-white whitespace-pre`}
            >
              {data.text}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default SidebarData;
