import React, { useState } from 'react'


export default function TextForm(props) {
  const [text,SetText]=useState('Enter text here');
  const handleUpClick=()=>{
    
    let newText=text.toUpperCase();
    SetText(newText);
  }
  const handleLoClick=()=>{
    
    let newText=text.toLowerCase();
    SetText(newText);
  }
  const handleClearClick=()=>{
    
    let newText='';
    SetText(newText);
  }
  const handleOnChange=(event)=>{
   
    SetText(event.target.value);//text=value
  }
  return (
    <>
     <div className="container">
     <h2>{props.heading}</h2>
    <div className="mb-3">
    <textarea class="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
    </div>
    <button type="button" class="btn btn-light mx-1" onClick={handleUpClick} >Uppercase</button>
    <button type="button" class="btn btn-light mx-1" onClick={handleLoClick} >Lowercase</button>
    <button type="button" class="btn btn-light mx-1" onClick={handleClearClick} >Clear text</button>
     </div>
     <div className="container">
      <h1>Your text summary</h1>
      <p>{text.split(" ").length} words and {text.length} characters.</p>
      <p>{0.08*text.split(" ").length} Minutes read</p>
      <h1>Preview</h1>
      <p>{text}</p>
     </div>
    </>
  )
}
