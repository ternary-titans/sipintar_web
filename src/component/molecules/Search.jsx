import React, { useState } from "react";
import Input from "../atoms/Input";

const Search = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = () => {
    onSearch(searchTerm);
  };

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div className="flex gap-4">
      <Input
        type="text"
        value={searchTerm}
        onChange={handleChange}
        placeholder="Search..."
        className="mr-2"
      />
      <button
        className="px-4 py-0 bg-blue-700 text-white rounded"
        onClick={handleSearch}
      >
        Search
      </button>
    </div>
  );
};

export default Search;
