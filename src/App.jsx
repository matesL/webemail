// import logo from './logo.svg';
import './style/App.css';
import NewRouter from './routers/index.jsx'
import { HashRouter } from "react-router-dom";


function App() {

  return (
    <div className="App">
      <header className="App-header">
    <HashRouter >
        <NewRouter/>
    </HashRouter>
      </header>
    </div>
  );
}

export default App;
