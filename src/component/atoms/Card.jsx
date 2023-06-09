import React from "react";

const Card = ({ children }) => {
  return (
    <div
      style={{
        backgroundColor: "white",
        color: "white",
        borderRadius: "8px",
        borderColor: "black",
        height: "calc(100vh - 164px)",
        width: "80.5%",
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
