import disco from './disco.gif';
import logo from './logo.png'
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={disco} className="App-logo" alt="logo" />
        <img src={logo} alt="fusion logo"></img>
        <h6 style={{marginTop: '-30px'}}>We're building something exciting for you soon!</h6>
      </header>
    </div>
  );
}

export default App;
