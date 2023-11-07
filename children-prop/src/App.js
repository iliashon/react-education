import "./App.css";
import Wrapper from "./components/Wrapper";

function App() {
  return (
    <div className="App">
      <Wrapper color="red">
        <h2>Text</h2>
        <button>Click me</button>
      </Wrapper>
      <Wrapper color="blue">
        <h2>Main text</h2>
        <button>Delete me</button>
      </Wrapper>
    </div>
  );
}

export default App;
