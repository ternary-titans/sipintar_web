import React from "react";

const InputDropdown = ({
  label,
  value,
  uniqueKeys,
  options,
  onChange,
  isDisabled,
}) => {
  return (
    <div className="flex flex-col">
      <label className="text-black font-bold text-sm">{label}</label>
      <div className="flex items-center">
        <select
          disabled={isDisabled}
          value={value}
          onChange={onChange}
          className="bg-gray-300 border border-gray-600 rounded px-2 py-1 text-black text-sm mr-2 w-full"
        >
          {options?.map((option, key) => (
            <option key={key} value={option.id}>
              {option[uniqueKeys]}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default InputDropdown;
