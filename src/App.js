import logo from './Jerry.Fitzner2.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>
          Welcome!
        </h1>
        <p>
          My portfolio is currently under construction.
          <br/>
          Please feel free to use the links below:  
        </p>
        <a
          className="App-link"
          href="https://blogs.jerryfitzner.dev"
          target="_blank"
          rel="noopener noreferrer"
        >
          Blog
        </a>
        <a
          className="App-link"
          href="https://www.linkedin.com/in/jerryfitzner/"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>
      </header>
    </div>
  );
}

export default App;
