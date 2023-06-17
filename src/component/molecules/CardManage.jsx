import React from "react";
import PropTypes from "prop-types";
import { IconContext } from "react-icons";
import Text from "../atoms/Text";

const CardManage = ({
  width,
  height,
  icon,
  iconColor,
  text1,
  text2,
  columns,
  data,
}) => {
  return (
    <div
      style={{
        width,
        height,
        backgroundColor: "white",
        boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.5)",
        borderRadius: "8px",
        padding: "20px",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "flex-start",
        }}
      >
        <IconContext.Provider value={{ color: iconColor }}>
          <div style={{ marginRight: "30px", marginLeft: "20px" }}>
            {React.cloneElement(icon, { size: 50, color: iconColor })}
          </div>
        </IconContext.Provider>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            textAlign: "center",
          }}
        >
          <Text text={text1} type="title3" />
          <Text text={text2} type="text3" />
        </div>
      </div>

      <div
        style={{
          width: "100%",
          marginTop: "10px",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
        }}
      >
        {columns && data && (
          <table
            style={{
              width: "100%",
            }}
          >
            <thead>
              <tr>
                {columns.map((column, index) => (
                  <th
                    key={index}
                    style={{
                      border: "1px solid",
                      borderRight: "none",
                      borderLeft: "none",
                      borderTop: "none",
                      borderBottomColor: "yellow",
                      padding: "4px",
                      backgroundColor: "white",
                      borderBottom: `3px solid #2563eb`,
                      color: "black",
                    }}
                  >
                    {column}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {data.map((row, rowIndex) => (
                <tr key={rowIndex}>
                  {columns.map((column, columnIndex) => (
                    <td
                      key={columnIndex}
                      style={{
                        border: "1px solid",
                        borderRight: "none",
                        borderLeft: "none",
                        padding: "4px",
                        color: "#1f2937",
                        textAlign: "center",
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
        )}
      </div>
    </div>
  );
};

CardManage.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
  icon: PropTypes.element.isRequired,
  iconColor: PropTypes.string,
  text1: PropTypes.string,
  text2: PropTypes.string,
  columns: PropTypes.arrayOf(PropTypes.string),
  data: PropTypes.arrayOf(PropTypes.object),
};

export default CardManage;
