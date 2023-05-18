import "./App.css";
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Weather defaultCity="Los Angeles" />
        <p id="contact">
          <small>
            <a
              href="https://github.com/bcross2425/brittany-weather-app-react"
              target="blank"
            >
              Open-source code
            </a>
            &nbsp; by Brittany Cross
          </small>
        </p>
      </header>
    </div>
  );
}

export default App;
