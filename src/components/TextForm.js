import React, { useState } from "react";




export default function TextForm(props) {
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
  };
  const handleLowClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
  };
  const handleOnChange = (event) => {
    setText(event.target.value);
  };
  const handleClrChange = (event) => {
    let newText = "";
    setText(newText);
  };
 
  const [text, setText] = useState("");
 
  return (
    <div className="container" style={{color: props.mode==='dark'?'white':'#042743' }}>
        <h1>{props.heading}</h1>
        
      <div className="mb-3 my-4">
      
        <textarea className="form-control"  value={text}  onChange={handleOnChange} id="myBox"  rows="6" style={{backgroundColor: props.mode==='dark'?'grey':'white', color: props.mode==='dark'?'white':'#042743' }}></textarea>
      </div>
      <button className="btn btn-primary mx-2" onClick={handleUpClick}>  Convert to Uppercase </button>
      <button className="btn btn-primary mx-2" onClick={handleLowClick}>Convert to Lowercase </button>
      <button className="btn btn-primary mx-2" onClick={handleClrChange}> Clear </button>
      <b>
      <h2>Your text summary</h2></b>
      <b>
        <p>
          {text.split(" ").length} words and {text.length} characters
        </p>
        <p>{0.008 * text.split(" ").length}Minutes to Read</p>
      </b>
      <h2>Preview</h2>
      <p>{text.length>0?text:"Enter something to preview"}</p>
    </div>
  );
}
