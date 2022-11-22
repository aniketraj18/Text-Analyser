import './App.css';
import Navbar from './Component/Navbar.js';
import Textform from'./Component/Textform.js';
import React, {useState} from 'react';
// import About from './Component/About.js';

function App() {
 const[mode,setMode]=useState('light');//Whether dark mode is enabled or not
 const toggleMode=()=>{
  if(mode==='dark'){
  setMode('light');
  document.body.style.backgroundColor='white';}
  else{
  setMode('dark');
  document.body.style.backgroundColor='#3b506e';}

 }
  return (
    <><Navbar title="Word Analyser" mode={mode} toggleMode={toggleMode}/>
    <div className="container"><Textform heading="Enter Your Text"  mode={mode}/></div>
    <div>
    </div>
    
    </>
  );
}

export default App;

