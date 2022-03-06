import logo from './logo.svg';
import './App.css';
import Tree from "./components/Tree";

function App() {



  return (
    <div className="App">
      <header className="App-header">
          <div className='TreeContainer' id='TreeDom'>
            <Tree/>
          </div>
      </header>
    </div>
  );
}

export default App;
