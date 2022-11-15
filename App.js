// import logo from './logo.svg';
import './App.css';
import Navbar from'./Component/Navbar.js';
import Textform from'./Component/Textform.js';

function App() {
  return (
    <><Navbar title="Word Analyser"/>
    <div className="container"><Textform heading="Enter Your Text "/></div>
    
    </>
  );
}

export default App;
