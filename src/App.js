import logo from './logo.svg';
import './App.css';
import Main from './pages/Main.js'; // 현재 폴더에서: ./, pages/Main에서~

function App() {
  return (
    <div className="App">
      <header className="App-header"> 
      <Main></Main>
      <Main></Main>
      <Main></Main>
      
      

      
       
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
