import React, { useState } from 'react';

export default function TextForm(props) {
  const handleUpClick=()=>{
    // console.log("upper case was clicked" + text);
    let newText = text.toUpperCase();
    setText(newText)
  }

  const handleOnChange=(event)=>{
    
    setText(event.target.value);
  }
  const handleLowClick=()=>{
    let newText= text.toLowerCase();
    setText(newText);
  }

  const handleClear=()=>{
    setText('');
  }

  const [text, setText] = useState('');
  //setText("new text")
  return (
    <>
    <div className='conrainer'>   

      <h1>{props.heading}</h1>
      <div className="mb-3">  
        <textarea className="form-control" value ={text} onChange={handleOnChange} id="mybox" rows="8"></textarea>
      </div>
      <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to uppercase</button>
      <button className="btn btn-primary mx-2" onClick={handleLowClick}>Convert to lowercase</button>
      <button className="btn btn-primary mx-2" onClick={handleClear}>Clear text</button>
    </div>
    <div className="container my-2">
      <h1>your text summary</h1>

      <p>{text.split(" ").length} words,{text.length} characters</p>
      <p>{0.008 * text.split(" ").length} Minutes read</p>
      <h2>Preview</h2>
      <p>{text}</p>
      </div>
    </>
  );
}
