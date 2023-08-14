import PropTypes from "prop-types";

const Button = ({ typeButton, children, ...rest }) => {
  return (
    <button {...rest} className={`button ${typeButton}`}>
      {children}
    </button>
  );
};

Button.propTypes = {
  typeButton: PropTypes.string,
  children: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

Button.defaultProps = {
  typeButton: "primary",
};

export default Button;
