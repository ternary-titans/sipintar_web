import React, { useState } from "react";

const JamInput = ({ onJamChange }) => {
  const [jam, setJam] = useState("");

  const handleInputChange = (event) => {
    const inputValue = event.target.value;
    setJam(inputValue); // Perbarui nilai state jam
  };

  const handleInputBlur = () => {
    const regex = /^(0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$/;
    if (regex.test(jam)) {
      onJamChange(jam);
    }
  };

  return (
    <div style={{ marginBottom: "4px" }}>
      <input
        type="text"
        value={jam}
        style={{
          backgroundColor: "rgb(209 213 219)",
          border: "0.2px rgb(156 163 175)",
          borderRadius: "2px",
          padding: "0.1rem",
          fontSize: "0.8rem",
          marginRight: "5px",
          color: "black",
          width: "100%",
          fontWeight: "normal",
        }}
        onChange={handleInputChange}
        onBlur={handleInputBlur}
        placeholder="HH:mm"
      />
    </div>
  );
};
export default JamInput;
