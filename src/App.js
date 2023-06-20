import './App.css';
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <div className="container">
    
      <Weather />
      <footer>
        This project is created by Maryna Frolova and {" "}
      <a href="https://github.com/Marian-Fr/react-app" rel="noreferrer"  target="_blank">is open-sourced on GitHub</a>
      </footer>
      </div>
    </div>
  );
}

export default App;
