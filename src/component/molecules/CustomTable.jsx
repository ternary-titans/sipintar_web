import React from "react";

const CustomTable = ({ columns, data }) => {
  // Menghitung jumlah baris maksimum dari semua kolom
  const maxRows = Math.max(...data.map((row) => row.length));

  return (
    <table
      style={{
        color: "black",
        borderCollapse: "collapse",
        border: "1px solid black",
        width: "100%",
        marginTop: "20px",
        borderRadius: "4px",
      }}
    >
      <thead>
        <tr>
          {columns.map((column) => (
            <th key={column} style={{ border: "1px solid black" }}>
              {column}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {Array.from({ length: maxRows }, (_, rowIndex) => (
          <tr key={rowIndex}>
            {columns.map((column, columnIndex) => (
              <td
                key={`${rowIndex}-${columnIndex}`}
                style={{ border: "1px solid black" }}
              >
                {data[columnIndex]?.[rowIndex]}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default CustomTable;
