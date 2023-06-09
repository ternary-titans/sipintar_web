import React from "react";
import { FiChevronDown } from "react-icons/fi";

const InputDropdown = ({ label, value, onChange }) => {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <label style={{ color: "black", fontWeight: "bold", fontSize: "0.8rem" }}>
        {label}
      </label>
      <div style={{ display: "flex", alignItems: "center" }}>
        <input
          type="text"
          value={value}
          onChange={onChange}
          style={{
            backgroundColor: "rgb(209 213 219)",
            border: "0.2px rgb(156 163 175)",
            borderRadius: "4px",
            padding: "0.1rem",
            color: "black",
          }}
        />
        <FiChevronDown style={{ marginRight: "5px" }} />
      </div>
    </div>
  );
};

export default InputDropdown;
