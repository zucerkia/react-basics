import React, { useState } from "react";

import { Header, Tasks } from "./components/organisms";
import { Input, Button } from "./components/atoms";
import Task from "./components/molecules/Task";

// class AppClass extends React.Component {
//   constructor() {
//     super();
//     this.state = {
//       input: "",
//       tasks: [],
//     };

//     // this.handleInput = this.handleInput.bind(this);
//   }

//   addToTodo = () => {
//     const newTodo = {
//       id: new Date().getTime(),
//       name: this.state.input,
//       checked: false,
//     };

//     // this.setState({tasks: [...this.state.tasks, newTodo]})
//     this.setState((oldState) => {
//       return { tasks: [...oldState.tasks, newTodo] };
//     });
//   };

//   findIndex = (id) => this.state.tasks.findIndex((task) => task.id === id);

//   onCheck = (id) => {
//     const idx = this.findIndex(id);
//     let newTask = [...this.state.tasks];
//     newTask[idx].checked = !newTask[idx].checked;

//     this.setState({ tasks: newTask });
//   };

//   onDelete = (id) => {
//     const idx = this.findIndex(id);
//     let newTask = [...this.state.tasks];
//     newTask.splice(idx, 1);

//     this.setState({ tasks: newTask });
//   };

//   handleInput = (event) => {
//     this.setState({ input: event.target.value });
//   };

//   render() {
//     return (
//       <div>
//         <Header />
//         <main className="container">
//           <h1 className="title">TODO List</h1>
//           <div className="form">
//             <Input handleInput={this.handleInput} />
//             <Button
//               disabled={this.state.input.length === 0}
//               onClick={this.addToTodo}
//             >
//               Agregar
//             </Button>
//           </div>
//           <Tasks>
//             {this.state.tasks.length > 0 ? (
//               this.state.tasks.map((task) => (
//                 <Task
//                   onCheck={this.onCheck}
//                   onDelete={this.onDelete}
//                   task={task}
//                   key={task.id}
//                 />
//               ))
//             ) : (
//               <p>No hay elementos agregados aun</p>
//             )}
//           </Tasks>
//         </main>
//       </div>
//     );
//   }
// }

const App = () => {
  let [tasks, setTasks] = useState([]);
  const [input, setInput] = useState("");

  // useEffect(() => {
  //   console.log("se esta escribiendo");
  // }, [input]);

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
        <h1 className="title">TODO List</h1>
        <div className="form">
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
