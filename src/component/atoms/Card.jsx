import React from "react";

const Card = ({ children, size }) => {
  return (
    <div
      style={{
        backgroundColor: "white",
        color: "white",
        borderRadius: "4px",
        borderColor: "black",
        height: size.height,
        width: size.width,
        padding: "16px",
        float: "right",
        marginRight: "8px",
      }}
      className="card"
    >
      {children}
    </div>
  );
};

export default Card;
