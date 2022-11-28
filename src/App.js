// import logo from './logo.svg';
import './App.css';
import Navbar from './Component/Navbar.js';
import Textform from'./Component/Textform.js';
import Alert from'./Component/Alert.js';
import React, {useState} from 'react';



function App() {
 const[mode,setMode]=useState('light');//Whether dark mode is enabled or not
 const toggleMode=()=>{
  if(mode==='dark'){
  setMode('light');
  document.body.style.backgroundColor='white';
document.title='TextUtils-Light Mode';}
  else{
  setMode('dark');
  document.body.style.backgroundColor='#3b506e';
  document.title='TextUtils-Dark Mode';}

 }
  return (
    <><Navbar title="Word Analyser" mode={mode} toggleMode={toggleMode}/>
    <Alert alert="This is alert!"/>
    <div className="container"><Textform heading="Enter Your Text"  mode={mode}/></div>
    <div>
    </div>
    
    </>
  );
}

export default App;
