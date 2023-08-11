import PropTypes from "prop-types";

import "./Tasks.css";

const Tasks = ({ children }) => {
  if (children.length === 0) {
    return <p className="empty">No hay tareas pendientes</p>;
  }
  return <div className="tasks">{children}</div>;
};

export default Tasks;

Tasks.propTypes = {
  children: PropTypes.node,
};
