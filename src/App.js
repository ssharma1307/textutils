
import React, { useState } from 'react';
import './App.css';
//import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

function App() {
  const[mode, setMode] = useState('light'); //state tells wheather dark mopde is enabled or not

  const toggleMode = ()=>{
    if(mode ==='light'){
      setMode('dark');
      document.body.style.backgroundColor="#042743";
    }
    else{
      setMode('light');
      document.body.style.backgroundColor="white";
    }
  }
  return (
    <>
   <Navbar title="Textutils" AboutText="About" mode={mode} toggleMode={toggleMode}/>
   <div className="container">
    <TextForm heading="Enter the Text" mode={mode} toggleMode={toggleMode}/> 
   {/* <About></About> */}

   </div>
    </>
 

  );
}

export default App;
