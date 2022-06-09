import ReactShareWidget from "./components/ReactShareWidget";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>Share the <a href="https://reactjs.org/" target='_blank' rel="noreferrer">reactjs site</a></p>
        <ReactShareWidget />
      </header>
    </div>
  );
}

export default App;
