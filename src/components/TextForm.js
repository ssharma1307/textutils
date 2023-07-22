
import React, {useState} from 'react'


export default function TextForm(props) {
    const handleUpClick= ()=>{
    
        let newText = text.toUpperCase();
        setText(newText);
    }
    const handleLowClick= ()=>{
    
        let newText = text.toLowerCase();
        setText(newText);
    }
    const handleOnChange= (event)=>{
        
             setText(event.target.value);
        }
    const handleClrChange= (event)=>{
        let newText ="";
        setText(newText);
           
       }    
    
   const[text, setText] = useState('');
    return (
    <div>
    
  <div className="mb-3">
    <label for="myBox" class="form-label">{props.heading} </label>
    <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="3"></textarea>
   
  </div>
 <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Uppercase</button>
 <button className="btn btn-primary mx-2" onClick={handleLowClick}>Convert to Lowercase</button>
 <button className="btn btn-primary mx-2" onClick={handleClrChange}>Clear</button>
 
 <h1>Your text summary</h1>
 <b><p>{text.split(" ").length} words and {text.length} characters</p>
 <p>{0.008*text.split(" ").length}Minutes to Read</p>
 </b>
 <h2>Preview</h2>
 <p>{text}</p>
  </div>

  )
}
