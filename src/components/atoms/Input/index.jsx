import PropTypes from "prop-types";

const Input = ({ handleInput }) => {
  return <input onChange={handleInput} className="input" type="text" />;
};

export default Input;

Input.propTypes = {
  handleInput: PropTypes.func.isRequired,
};
