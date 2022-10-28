// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
// import About from './components/About';
import { useState } from 'react';
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Routes,
//   Link
// } from "react-router-dom";

function App() {
  
  const [mode , setMode] = useState('light');

  const toggleMode =() => {
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#505458';
      document.body.style.color = 'white';
    } 

    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      document.body.style.color = 'black';
    }
    
  }

  return (
    <>
    
    <Navbar title = "TextUtils" aboutText ='About TextUtils' mode ={mode} toggleMode ={toggleMode}/>
    <div className="container my-3">
            
            <TextForm heading = "Enter the text below" mode = {mode}/>
    
    

    </div>
    
    </>
  
      
  );
}

export default App;
