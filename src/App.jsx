import { useState, Component } from "react";

import { Button, Input } from "./components/atoms";
import { Header, Tasks } from "./components/organisms";
import { Task } from "./components/molecules";

import "./App.css";
class AppComponent extends Component {
  constructor() {
    super();
    this.state = {
      tasks: [],
      input: "",
    };

    this.addTask = this.addTask.bind(this);
  }

  addTask(e) {
    e.preventDefault();

    const newTask = {
      id: new Date().getTime(),
      title: this.state.input,
      checked: false,
    };

    this.setState(({ tasks }) => ({ tasks: [newTask, ...tasks], input: "" }));
  }

  findTaskId = (id) => this.state.tasks.findIndex((task) => task.id === id);
  isEmpty = () => this.state.tasks?.length === 0;

  onDelete = (id) => {
    const newTasks = [...this.state.tasks];
    const idx = this.findTaskId(id);
    newTasks.splice(idx, 1);
    this.setState({ tasks: newTasks });
  };

  onComplete = (id) => {
    const newTasks = [...this.state.tasks];
    const idx = this.findTaskId(id);

    newTasks[idx].checked = !newTasks[idx].checked;
    this.setState({ tasks: newTasks });
  };

  render() {
    return (
      <main>
        <Header />
        <section className="container">
          <h1 className="title">TODO List</h1>
          <form onSubmit={this.addTask} className="form">
            <Input
              value={this.state.input}
              onChange={(e) => this.setState({ input: e.target.value })}
            />
            <Button disabled={this.state.input?.length === 0} type="submit">
              Agregar
            </Button>
          </form>
          {!this.isEmpty() ? (
            <Tasks>
              {this.state.tasks.map((task) => (
                <Task
                  onDelete={this.onDelete}
                  onComplete={this.onComplete}
                  task={task}
                  key={task.id}
                />
              ))}
            </Tasks>
          ) : (
            <p>No hay tareas pendientes</p>
          )}
        </section>
      </main>
    );
  }
}

function App() {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState("");

  const addTask = (e) => {
    e.preventDefault();

    const newTask = {
      id: new Date().getTime(),
      title: input,
      checked: false,
    };

    setTasks((oldTasks) => [newTask, ...oldTasks]);
    setInput("");
  };

  const findTaskId = (id) => tasks.findIndex((task) => task.id === id);
  // const isEmpty = tasks.length === 0;

  const onDelete = (id) => {
    const newTasks = [...tasks];
    const idx = findTaskId(id);
    newTasks.splice(idx, 1);
    setTasks(newTasks);
  };

  const onComplete = (id) => {
    const newTasks = [...tasks];
    const idx = findTaskId(id);

    newTasks[idx].checked = !newTasks[idx].checked;
    setTasks(newTasks);
  };

  return (
    <main>
      <Header />
      <section className="container">
        <h1 className="title">TODO List</h1>
        <form onSubmit={addTask} className="form">
          <Input value={input} onChange={(e) => setInput(e.target.value)} />
          <Button disabled={input.length === 0} type="submit">
            Agregar
          </Button>
        </form>
        <Tasks>
          {tasks.map((task) => (
            <Task
              onDelete={onDelete}
              onComplete={onComplete}
              task={task}
              key={task.id}
            />
          ))}
        </Tasks>
      </section>
    </main>
  );
}

export default AppComponent;
