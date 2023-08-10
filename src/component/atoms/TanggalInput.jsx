import React, { useState } from "react";
import DatePicker from "react-datepicker";
import { FaCalendarAlt } from "react-icons/fa";
import "react-datepicker/dist/react-datepicker.css";

const TanggalInput = ({ onTanggalChange }) => {
  const [tanggal, setTanggal] = useState(null);

  const handleTanggalChange = (date) => {
    setTanggal(date);
    onTanggalChange(date);
  };

  return (
    <div className="mb-3 flex items-center gap-3">
      <DatePicker
        selected={tanggal}
        className="w-full bg-[#d1d5db] p-0.5 text-black placeholder-gray-400"
        onChange={handleTanggalChange}
        dateFormat="dd/MM/yyyy"
        placeholderText="Pilih Tanggal"
        isClearable
        showPopperArrow={false}
        popperPlacement="bottom-start"
      />
      <FaCalendarAlt />
    </div>
  );
};

export default TanggalInput;
