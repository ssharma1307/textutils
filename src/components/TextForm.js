import React, { useState } from "react";




export default function TextForm(props) {
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to Upper case","success");
  };
  const handleLowClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to Lower case","success");
  };
  const handleOnChange = (event) => {
    setText(event.target.value);
  };
  const handleClrChange = (event) => {
    let newText = "";
    setText(newText);
    props.showAlert("Text cleared","success");
  };
 
  const [text, setText] = useState("");
 
  return (
    <div className="container" style={{color: props.mode==='dark'?'white':'#042743' }}>
        <h1>{props.heading}</h1>
        
      <div className="mb-3 my-4">
      
        <textarea className="form-control"  value={text}  onChange={handleOnChange} id="myBox"  rows="6" style={{backgroundColor: props.mode==='dark'?'#13466e':'white', color: props.mode==='dark'?'white':'#042743' }}></textarea>
      </div>
      <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleUpClick}>  Convert to Uppercase </button>
      <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleLowClick}>Convert to Lowercase </button>
      <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleClrChange}> Clear </button>
      <b>
      <h2>Your text summary</h2></b>
      <b>
        <p>
          {text.length>0?text.split(/\s+/).filter((element)=>{return element.length!==0}).length:0} words and {text.length} characters
        </p>
        <p>{text.length>0?0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length:0}Minutes to Read</p>
      </b>
      <h2>Preview</h2>
      <p>{text.length>0?text:"Enter something to preview"}</p>
    </div>
  );
}