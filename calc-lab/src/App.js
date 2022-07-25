import logo from './logo.svg';
import './App.css';
import Calulator from './components/Calculator'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* Why could this not go inot a p tag? */}
            <Calulator />
      </header>
    </div>
  );
}

export default App;
