import React, { useState } from "react";
import Button from "../atoms/Button";
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
    <div style={{ display: "flex", alignItems: "center" }}>
      <Input
        type="text"
        value={searchTerm}
        onChange={handleChange}
        placeholder="  Search..."
      />
      <Button
        variant="kuning"
        onClick={handleSearch}
        style={{
          marginLeft: "8px",
          display: "flex",
          justifyContent: "flex-end",
          height: "24px",
        }}
      >
        Search
      </Button>
    </div>
  );
};

export default Search;
