
import React, {useState} from 'react'


export default function TextForm(props) {
    const handleUpClick= ()=>{
        console.log("Upper case was clicked"+text);
        let newText = text.toUpperCase();
        setText(newText);
    }
    const handleOnChange= (event)=>{
        console.log("On change");
        setText(event.target.value);
    }
    const[text, setText] = useState('Enter text here');
    return (
    <div>
    
  <div className="mb-3">
    <label for="myBox" class="form-label">{props.heading} </label>
    <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="3"></textarea>
   
  </div>
 <button className="btn btn-primary" onClick={handleUpClick}>Convert to Uppercase</button>
  </div>

  )
}
