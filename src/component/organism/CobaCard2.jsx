import React from "react";
import Card from "./Card";
import { FiCheckCircle } from "react-icons/fi";

const CobaCard2 = () => {
  return (
    <div>
      <Card
        text="Example Text"
        icon={FiCheckCircle}
        iconColor="#FF0000"
        width="300px"
        height="200px"
      />
    </div>
  );
};

export default CobaCard2;
