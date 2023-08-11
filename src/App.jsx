import { Button } from "./components/atoms/Button";

// class AppComponent extends React.Component {
//   constructor() {
//     super();
//     this.state = {
//       isActive: "hola",
//     };
//   }

//   render() {
//     return (
//       <>
//         <section className="styles">
//           <p>hola mundo {this.state.isActive}</p>
//           <Button />
//         </section>
//         <label htmlFor=""></label>
//         <h1>hola</h1>
//       </>
//     );
//   }
// }

function App() {
  // const [state, setState] = useState("");

  return (
    <>
      <section className="styles">
        {/* <p>hola mundo {state}</p> */}
        <Button />
      </section>
      <label htmlFor=""></label>
      <h1>hola</h1>
    </>
  );
}

export default App;
