import React from "react";

const Input = ({ label, value, onChange, placeholder }) => {
  return (
    <div className="flex flex-col">
      <label className="text-black font-bold text-sm">{label}</label>
      <input
        type="text"
        value={value}
        placeholder={placeholder}
        className="bg-gray-300 border border-gray-600 rounded px-2 py-1 text-black text-sm"
        onChange={onChange}
      />
    </div>
  );
};

export default Input;
