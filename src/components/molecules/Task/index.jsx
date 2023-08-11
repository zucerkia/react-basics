import PropTypes from "prop-types";
import { Button } from "../../atoms";

import "./Task.css";

const Task = ({ task, onComplete, onDelete }) => {
  return (
    <div className="task">
      <input
        type="checkbox"
        onChange={() => onComplete(task.id)}
        checked={task.checked}
      />
      <span>{task.title}</span>
      <Button onClick={() => onDelete(task.id)} typeButton="tertiary">
        Eliminar
      </Button>
    </div>
  );
};

export default Task;

Task.propTypes = {
  task: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    checked: PropTypes.bool,
  }),
  onComplete: PropTypes.func,
  onDelete: PropTypes.func,
};
