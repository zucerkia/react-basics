import PropTypes from "prop-types";

import "./Button.css";

const Button = ({ children, typeButton, ...props }) => {
  return (
    <button className={`button ${typeButton}`} {...props}>
      {children}
    </button>
  );
};

export default Button;

Button.propTypes = {
  children: PropTypes.node,
  typeButton: PropTypes.oneOf(["primary", "secondary", "tertiary"]),
};

Button.defaultProps = {
  typeButton: "primary",
  type: "button",
};
