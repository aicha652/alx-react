import logo from './holberton_logo.jpg';
import './App.css';
import {getFullYear, getFooterCopy} from './utils.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>
          School dashboard
        </h1>
      </header>
      <hr color="pink"></hr>
      <body className="App-body">
        <p>Login to access the full dashboard</p>
        <label>email</label>
        <input type="text"></input>
        <label>password</label>
        <input type="text"></input>
        <button>OK</button>
        <hr color="pink"></hr>
      </body>
      <footer>
        <p>Copyright {getFullYear()}- {getFooterCopy()}</p>
      </footer>
    </div>
  );
}

export default App;