import React, { useState } from 'react'

export default function TextForm(props) {

    const handleUpClick = () => {
        const newText = text.toUpperCase();
        setText(newText);
    };

    const handleLowClick = () => {
        const newText = text.toLowerCase();
        setText(newText);
    };

    const clearText = () =>{
        setText('');
    }

    const handleOnChange = (event) => {
        setText(event.target.value);
    };




    const [text, setText] = useState("");




  return (
    <>
    <div className='container'>
        <h4>{props.heading}</h4>
<div className="mb-3">
  <textarea className="form-control" value={text} onChange={handleOnChange} rows="6" id="myBox" placeholder='Enter the Text here...'></textarea>
</div>
    <button className="btn btn-primary" onClick={handleUpClick}>Convert to Uppercase</button>
    <button className="btn btn-primary mx-2" onClick={handleLowClick}>Convert to Lowercase</button>
    <button className="btn btn-primary mx-2" onClick={clearText}>Clear</button>
    </div>
    <div className="container my-2">
        <h3>Your Text Summary</h3>
        <p>Your sentence has {text.length} letters and {text.split(" ").length} words.</p>
    </div>
    <div className="cotainer">
        <h3>Preview</h3>
        <p>{text}</p>
    </div>
    </>
  )
}
