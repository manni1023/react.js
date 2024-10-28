import React, { useState } from 'react';


export default function TextForm(props) {
  const handleUpClick=()=>{
    // console.log("upper case was clicked" + text);
    let newText = text.toUpperCase();
    setText(newText)
    props.showAlert("Converted to uppercase","success");
  }

  const handleOnChange=(event)=>{
    
    setText(event.target.value);
  }
  const handleLowClick=()=>{
    let newText= text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to lowercase","success");
  }

  const handleClear=()=>{
    setText('');
    props.showAlert("Text removed","success");
  }

  const [text, setText] = useState('');
  //setText("new text")
  return (
    <>
    <div className='conrainer' style={{color: props.mode==='dark' ? 'white' : '#042743'}}>   

      <h1>{props.heading}</h1>
      <div className="mb-3">  
        <textarea className="form-control" value ={text} onChange={handleOnChange} style={{backgroundColor:props.mode==='dark' ? 'grey' : 'white',
          color: props.mode==='dark' ? 'white' : '#042743'}}
        id="mybox" rows="8"></textarea>
      </div>
      <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to uppercase</button>
      <button className="btn btn-primary mx-2" onClick={handleLowClick}>Convert to lowercase</button>
      <button className="btn btn-primary mx-2" onClick={handleClear}>Clear text</button>
    </div>
    <div className="container my-2 "style={{color: props.mode==='dark' ? 'white' : '#042743'}}>
      <h1>your text summary</h1>

      <p>{text.split(" ").length} words,{text.length} characters</p>
      <p>{0.008 * text.split(" ").length} Minutes read</p>
      <h2>Preview</h2>
      <p>{text.length>0?text:"Enter text to preview"}</p>
      </div>
    </>
  );
}
