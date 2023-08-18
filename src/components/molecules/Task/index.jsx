import { useEffect } from "react";
import PropTypes from "prop-types";

import Button from "../../atoms/Button";

import "./Task.css";

const Task = ({ task, onDelete, onCheck }) => {
  useEffect(() => {
    console.log("primera ejecución");
    return () => {
      console.log("me destruí");
    };
  }, []);

  return (
    <div className="task">
      <input
        type="checkbox"
        onChange={() => onCheck(task.id)}
        name=""
        id={task.id}
        checked={task.checked}
      />
      <span className="task__name">{task.name}</span>
      <Button onClick={() => onDelete(task.id)} typeButton="tertiary">
        Eliminar
      </Button>
    </div>
  );
};

export default Task;

Task.propTypes = {
  task: PropTypes.shape({
    name: PropTypes.string,
    id: PropTypes.number,
    checked: PropTypes.bool,
  }),
  onDelete: PropTypes.func,
  onCheck: PropTypes.func,
};
