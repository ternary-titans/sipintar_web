import React from "react";

const TabelData = ({
  colomsData,
  dataData,
  layout,
  columnWidths,
  fontSize,
  textAlign,
}) => {
  return (
    <div>
      {layout === "horizontal" ? (
        <table>
          <thead>
            <tr>
              {colomsData.map((colom, index) => (
                <th
                  key={colom}
                  style={{
                    width: columnWidths[index],
                    textAlign,
                    fontSize,
                  }}
                >
                  {colom}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {dataData.map((row, index) => (
              <tr key={index}>
                {colomsData.map((colom, colIndex) => (
                  <td
                    key={colom}
                    style={{
                      width: columnWidths[colIndex],
                      textAlign,
                      fontSize,
                    }}
                  >
                    {row[colom]}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <table>
          <tbody>
            {colomsData.map((colom, index) => (
              <tr key={colom}>
                <th
                  style={{
                    width: columnWidths[index],
                    color: "black",
                    fontWeight: "normal",
                    fontSize,
                    textAlign,
                  }}
                >
                  {colom}
                </th>
                {dataData.map((row, rowIndex) => (
                  <td
                    key={rowIndex}
                    style={{
                      width: columnWidths[index],
                      color: "black",
                      textAlign,
                      fontSize,
                    }}
                  >
                    {row[colom]}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default TabelData;
