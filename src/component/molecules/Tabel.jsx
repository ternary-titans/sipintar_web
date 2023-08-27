import React, { useEffect } from "react";

const Tabel = ({
  columns,
  data,
  columnAlignments,
  headerBackgroundColor,
  headerBorderColor,
  pageSizeOptions,
  currentPage,
  totalPages,
  onPageChange,
  totalItem,
}) => {
  const pageSize = pageSizeOptions[0]; // Using the first option as default

  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = startIndex + pageSize;

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
          {data.map((row, index) => (
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
      <div className="flex justify-end items-center mt-5 gap-3">
        <button
          className="bg-yellow-500 p-1 text-gray-100 rounded-md"
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        <div className="entries">
          <span>Show: </span>
          <select value={pageSize}>
            {pageSizeOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
          <span>
            {startIndex + 1}-{endIndex > totalItem ? totalItem : endIndex} dari{" "}
            {totalItem}
          </span>
        </div>
        <button
          className="bg-yellow-500 p-1 text-gray-100 rounded-md w-14"
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Tabel;
