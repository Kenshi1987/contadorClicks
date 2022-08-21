import './App.css';
import {Contador} from "./Contador"

function App() {

  const onAdd = (contador) => {
    console.log ('Soy onAdd y el valor del contador es:', contador)
  }

  return (
    <div className="App">
      <Contador onAdd={onAdd}/>
    </div>
  );
}

export default App;
