import "./App.css";
import Info from "./components/Info";

function App() {
    return (
        <div className="App">
            <Info />
            <div className="info">
                <h1>Up component</h1>
                <button className="my-button">Up buttom</button>
            </div>
        </div>
    );
}

export default App;
