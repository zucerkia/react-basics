import { useState } from "react";

import { Header, Tasks } from "./components/organisms";
import { Input, Button } from "./components/atoms";
import Task from "./components/molecules/Task";

import "./App.css";

const App = () => {
  let [tasks, setTasks] = useState([]);
  const [input, setInput] = useState("");

  const addToTodo = () => {
    const newTodo = {
      id: new Date().getTime(),
      name: input,
      checked: false,
    };

    setTasks((oldState) => [newTodo, ...oldState]);
  };

  const findIndex = (id) => tasks.findIndex((task) => task.id === id);

  const onCheck = (id) => {
    const idx = findIndex(id);
    let newTask = [...tasks];
    newTask[idx].checked = !newTask[idx].checked;

    setTasks(newTask);
  };

  const onDelete = (id) => {
    const idx = findIndex(id);
    let newTask = [...tasks];
    newTask.splice(idx, 1);

    setTasks(newTask);
  };

  const handleInput = (event) => {
    setInput(event.target.value);
  };

  return (
    <div>
      <Header />
      <main className="container">
        <h1 className="container__todo-list">TODO List</h1>
        <div className="container__form">
          <Input handleInput={handleInput} />
          <Button disabled={input.length === 0} onClick={addToTodo}>
            Agregar
          </Button>
        </div>
        <Tasks>
          {tasks.length > 0 ? (
            tasks.map((task) => (
              <Task
                onCheck={onCheck}
                onDelete={onDelete}
                task={task}
                key={task.id}
              />
            ))
          ) : (
            <p>No hay elementos agregados aun</p>
          )}
        </Tasks>
      </main>
    </div>
  );
};

// export default AppClass;
export default App;
