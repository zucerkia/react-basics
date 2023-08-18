import PropTypes from "prop-types";

import "./Tasks.css";
const Tasks = ({ children }) => {
  return <section className="tasks">{children}</section>;
};

Tasks.propTypes = {
  children: PropTypes.node.isRequired,
};
export default Tasks;
