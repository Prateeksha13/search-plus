import React from "react";
import PropTypes from "prop-types";
import "./button.css";

const Button = ({ primary, size, label, onClick, ...props }) => {
  const mode = primary ? "button-primary" : "button-secondary";
  return (
    <button
      type="button"
      className={["custom-button", mode].join(" ")}
      onClick={onClick}
      {...props}
    >
      {label}
    </button>
  );
};

export default Button;

Button.propTypes = {
  primary: PropTypes.bool,
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

Button.defaultProps = {
  primary: true,
  onClick: undefined,
  label: "Search",
};
