import React, { useState } from "react";

const Tabel = ({
  columns,
  data,
  columnAlignments,
  headerBackgroundColor,
  headerBorderColor,
  pageSizeOptions,
}) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(pageSizeOptions[0]);

  const totalPages = Math.ceil(data.length / pageSize);

  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = startIndex + pageSize;

  const displayedData = data.slice(startIndex, endIndex);

  const changePage = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="overflow-x-auto border border-gray-300 rounded-md p-2 mt-4">
      <table className="w-full border-collapse">
        <thead>
          <tr>
            {columns.map((column, index) => (
              <th
                key={column}
                className={`border border-solid border-r-0 border-l-0 border-t-0 border-b-${headerBorderColor} p-1 bg-${headerBackgroundColor} border-b-3 border-${headerBorderColor} text-black`}
                style={{ textAlign: columnAlignments[index] }}
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
                  className={`border border-solid border-t-0 border-r-0 border-l-0 border-b-yellow-400 p-1 bg-${headerBackgroundColor} border-b-3 border-${headerBorderColor} text-black`}
                  style={{ textAlign: columnAlignments[columnIndex] }}
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

export default Tabel;
