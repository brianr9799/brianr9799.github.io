import logo from './Brian.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          My name is Brian and I'm going to master React!
          {/*
          Edit <code>src/App.js</code> and save to reload.
          */}
        </p>
        <a
          className="App-link"
          href="https://github.com/brianr9799"
          target="_blank"
          rel="noopener noreferrer"
        >
          Check Me Out!
        </a>
      </header>
    </div>
  );
}

export default App;
