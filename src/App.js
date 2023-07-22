
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

function App() {
  return (
    <>
   <Navbar title="Textutils" AboutText="About"/>
   <div className="container">
    <TextForm heading="Enter the Text"/> 
   {/* <About></About> */}

   </div>
    </>
 

  );
}

export default App;
