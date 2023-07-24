
import React, { useState } from 'react';
import './App.css';
//import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';

function App() {
  const[mode, setMode] = useState('light'); //state tells wheather dark mopde is enabled or not
  const[alert, setAlert] = useState(null); 

const showAlert=(message,type)=>{
  setAlert({
    msg:message,
    type:type
  })
  setTimeout(()=>{
    setAlert(null)
  },1500)
}

  const toggleMode = ()=>{
    if(mode ==='light'){
      setMode('dark');
      document.body.style.backgroundColor="#042743";
      showAlert("Dark Mode has been enabled","success")
    }
    else{
      setMode('light');
      document.body.style.backgroundColor="white";
      showAlert("Light Mode has been enabled","success")
    }
  }
  return (
    <>
   <Navbar title="Textutils" AboutText="About" mode={mode} toggleMode={toggleMode}/>
    <Alert alert={alert} />
    <TextForm heading="Enter the Text" mode={mode} toggleMode={toggleMode} showAlert={showAlert}/> 
   {/* <About></About> */}

   
    </>
 

  );
}

export default App;
