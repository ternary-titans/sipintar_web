import React, { useState } from "react";

const Table = ({
  columns,
  data,
  columnAlignments,
  headerBackgroundColor,
  headerBorderColor,
  pageSizeOptions,
}) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(pageSizeOptions[0]);

  // Menghitung total jumlah halaman
  const totalPages = Math.ceil(data.length / pageSize);

  // Menghitung index awal dan akhir data yang akan ditampilkan
  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = startIndex + pageSize;

  // Membatasi data yang ditampilkan sesuai dengan index
  const displayedData = data.slice(startIndex, endIndex);

  // Mengubah halaman
  const changePage = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div
      style={{
        overflowX: "auto",
        border: "#e5e7eb",
        margin: "10px 10px",
      }}
    >
      <table
        style={{
          width: "100%",
          borderCollapse: "collapse",
          borderRadius: "4px",
        }}
      >
        <thead>
          <tr>
            {columns.map((column, index) => (
              <th
                key={column}
                style={{
                  border: "1px solid",
                  borderRight: "none",
                  borderLeft: "none",
                  borderTop: "none",
                  borderBottomColor: "yellow",
                  padding: "4px",
                  backgroundColor: headerBackgroundColor,
                  borderBottom: `3px solid ${headerBorderColor}`,
                  color: "black",
                }}
              >
                {column}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {displayedData.map((row, index) => (
            <tr key={index}>
              {columns.map((column, columnIndex) => (
                <td
                  key={column}
                  style={{
                    border: "1px solid",
                    borderRight: "none",
                    borderLeft: "none",
                    padding: "4px",
                    color: "#1f2937",
                    textAlign: columnAlignments[columnIndex],
                    fontSize: "0.9rem",
                  }}
                >
                  {row[column]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <div style={{ textAlign: "right", marginTop: "10px" }}>
        <span>Show: </span>
        <select
          value={pageSize}
          onChange={(e) => setPageSize(parseInt(e.target.value))}
        >
          {pageSizeOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
        <span>
          {startIndex + 1}-{endIndex > data.length ? data.length : endIndex} of{" "}
          {data.length}
        </span>
        <button
          disabled={currentPage === 1}
          onClick={() => changePage(currentPage - 1)}
        >
          Previous
        </button>
        <button
          disabled={currentPage === totalPages}
          onClick={() => changePage(currentPage + 1)}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Table;
