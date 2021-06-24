import './App.css';
import Todos from "./components/Todos";

const items = ["hey", "there"]

function App() {
  return (
    <div>

        <Todos items={items}/>

    </div>
  );
}

export default App;
