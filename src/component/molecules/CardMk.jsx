import React from "react";

const getRandomColor = () => {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

const CardMk = ({ height, text1, text2 }) => {
  const randomColor = getRandomColor();

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
        backgroundColor: randomColor,
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
