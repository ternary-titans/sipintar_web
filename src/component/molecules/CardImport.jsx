import React, { useState } from "react";
import PropTypes from "prop-types";
import { BiImport } from "react-icons/bi";
import Button from "../atoms/Button";
import Text from "../atoms/Text";

const CardImport = ({ width, height, text, onImport }) => {
  const [fileName, setFileName] = useState("");
  const [dragging, setDragging] = useState(false);

  const handleDragOver = (event) => {
    event.preventDefault();
    setDragging(true);
  };

  const handleDragLeave = () => {
    setDragging(false);
  };

  const handleDrop = (event) => {
    event.preventDefault();
    setDragging(false);

    const file = event.dataTransfer.files[0];
    setFileName(file.name);
    onImport(file);
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setFileName(file.name);
    onImport(file);
  };

  return (
    <div
      style={{
        width,
        height,
        backgroundColor: dragging ? "#d2d8de" : "#e5e7eb",
        border: dragging ? "1.5px dashed #2563eb" : "1.5px dashed #1e40af",
        borderRadius: "8px",
        padding: "20px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
    >
      <Text type="text3" text="Drop file or"></Text>
      <Button
        style={{
          backgroundColor: "#fcd34d",
          borderRadius: "20px",
          padding: "10px 20px",
          display: "flex",
          alignItems: "center",
          text,
        }}
      >
        <BiImport style={{ marginRight: "10px", color: "#1e40af" }} />
        <label
          htmlFor="file-upload"
          style={{ cursor: "pointer", color: "black" }}
        >
          {text}
        </label>
        <input
          id="file-upload"
          type="file"
          style={{ display: "none" }}
          onChange={handleFileChange}
        />
      </Button>
      {fileName && (
        <div style={{ marginTop: "10px", color: "black" }}>
          Nama File: {fileName}
        </div>
      )}
    </div>
  );
};

CardImport.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
  text: PropTypes.string,
  onImport: PropTypes.func,
};

export default CardImport;
