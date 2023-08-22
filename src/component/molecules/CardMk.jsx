import React from "react";

const getBackgroundColor = (id) => {
  return id % 2 === 0 ? "blue" : "yellow";
};

const CardMk = ({ height, text1, text2, id }) => {
  const backgroundColor = getBackgroundColor(id);

  return (
    <div
      className="w-full"
      style={{
        height: `${height}px`,
        borderRadius: "5px",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-end",
        backgroundColor: backgroundColor,
        border: "1px solid #ccc",
        boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
      }}
    >
      <div
        style={{
          padding: "6px",
          color: "black",
          backgroundColor: "white",
        }}
      >
        <div>{text1}</div>
        <div>{text2}</div>
      </div>
    </div>
  );
};

export default CardMk;
