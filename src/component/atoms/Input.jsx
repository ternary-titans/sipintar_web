import React from "react";

const Input = ({ label, value, onChange, placeholder }) => {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <label style={{ color: "black", fontWeight: "bold", fontSize: "0.8rem" }}>
        {label}
      </label>
      <input
        type="text"
        value={value}
        placeholder={placeholder}
        style={{
          backgroundColor: "rgb(209 213 219)",
          border: "0.2px rgb(156 163 175)",
          borderRadius: "2px",
          padding: "0.1rem",
          color: "black",
          fontSize: "0.8rem",
        }}
        onChange={onChange}
      />
    </div>
  );
};

export default Input;
