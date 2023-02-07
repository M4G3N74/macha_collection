import logo from './logo.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <div className="hero">Macha's Collection</div>
      <div className="hero2">
        Coming Soon
      </div>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Your Number one Apparel and Clothing store
        </p>
        <a
          className="App-link"
          href="https://givenmalambo.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Designed By Given Malambo
        </a>
      </header>
    </div>
  );
}

export default App;
