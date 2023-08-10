import React from "react";

const CardMk = ({ height, text1, text2 }) => {
  const randomImage = `https://source.unsplash.com/random/230x${height}`;

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
        backgroundColor: "#d1d5db",
      }}
    >
      <img src={randomImage} alt="Random" />
      <div style={{ padding: "6px" }}>
        <div>{text1}</div>
        <div>{text2}</div>
      </div>
    </div>
  );
};

export default CardMk;
