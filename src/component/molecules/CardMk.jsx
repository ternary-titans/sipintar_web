import React from "react";
import Text from "../atoms/Text";

const CardMk = ({ width, height, text1, text2 }) => {
  const randomImage = `https://source.unsplash.com/random/${width}x${height}`;

  return (
    <div
      style={{
        width: `${width}px`,
        height: `${height}px`,
        borderRadius: "8px",
        overflow: "hidden",
      }}
    >
      <img
        src={randomImage}
        alt="Random"
        style={{ width: "100%", height: "100%", objectFit: "cover" }}
      />
      <Text type="text2" text={text1} />
      <Text type="text2" text={text2} />
    </div>
  );
};

export default CardMk;
