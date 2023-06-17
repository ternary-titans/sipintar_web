import React from "react";
import { FiChevronDown } from "react-icons/fi";

const InputDropdown = ({ label, value, options, onChange }) => {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <label style={{ color: "black", fontWeight: "bold", fontSize: "0.8rem" }}>
        {label}
      </label>
      <div
        style={{
          color: "black",
          fontWeight: "bold",
          fontSize: "0.8rem",
          display: "flex",
          alignItems: "center",
        }}
      >
        <select
          value={value}
          onChange={onChange}
          style={{
            backgroundColor: "rgb(209 213 219)",
            border: "0.2px rgb(156 163 175)",
            borderRadius: "2px",
            padding: "0.1rem",
            fontSize: "0.8rem",
            appearance: "none",
            marginRight: "5px",
            color: "black",
            width: "100%",
            fontWeight: "normal",
          }}
        >
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        <FiChevronDown style={{ marginRight: "5px" }} />
      </div>
    </div>
  );
};

export default InputDropdown;
