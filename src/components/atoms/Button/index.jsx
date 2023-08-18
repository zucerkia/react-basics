import PropTypes from "prop-types";

import styles from "./Button.module.scss";

const { button } = styles;
const Button = ({ typeButton, children, ...rest }) => {
  console.log(styles["button--secondary"]);
  return (
    <button
      {...rest}
      className={`${button} ${styles[`button--${typeButton}`]}`}
    >
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
