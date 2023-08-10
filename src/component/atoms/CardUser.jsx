import React from "react";

const CardUser = ({ width, height, borderColor, borderWidth, children }) => {
  return (
    <div
      className={`w-${width} h-auto border-${borderWidth} border-${borderColor} rounded-md p-4`}
    >
      {children}
    </div>
  );
};

export default CardUser;
