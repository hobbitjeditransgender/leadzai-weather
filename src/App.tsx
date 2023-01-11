import logo from './logo.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <a
          target="_blank"
          className="App-link"
          rel="noopener noreferrer"
          href="https://www.leadzai.com/"
        >
          Weather App
        </a>
      </header>
    </div>
  );
}

export default App;
