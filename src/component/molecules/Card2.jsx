import React from "react";
import PropTypes from "prop-types";
import { IconContext } from "react-icons";
import { FiAlertCircle } from "react-icons/fi";
import Text from "./Text";

const Card2 = ({ text, icon, iconColor, width, height }) => {
  const Icon = icon || FiAlertCircle;

  return (
    <div
      style={{
        backgroundColor: "#FFFFFF",
        borderRadius: "8px",
        boxShadow: "0px 2px 6px rgba(0, 0, 0, 0.1)",
        width: width,
        height: height,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <IconContext.Provider value={{ color: iconColor }}>
          <Icon size={32} />
        </IconContext.Provider>
        <Text text={text} />
      </div>
    </div>
  );
};

Card.propTypes = {
  text: PropTypes.string.isRequired,
  icon: PropTypes.object,
  iconColor: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
};

Card.defaultProps = {
  iconColor: "#000000",
  width: "200px",
  height: "200px",
};

export default Card2;
