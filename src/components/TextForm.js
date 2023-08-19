import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("converted to uppercase","success")
  };
  const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("converted to lowercase","success")
  };

  const handleCopy = () => {
    let text=document.getElementById('myBox');
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Text copied","success")

  };
 
  const handleClearClick = () => {
    let newText ="";
    setText(newText);
    props.showAlert("Text cleared","danger")


  };



  const handleOnChange = (event) => {
    console.log("On chqanged ");
    setText(event.target.value);
  };

  const [text, setText] = useState("");

  return (
    <>
      <div className="container" style={{color:props.mode==='dark' ? 'white' : 'black'}}>
        <h2>{props.heading}</h2>
        <div className="mb-3 ">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            id="myBox"
            rows="8"

            style={{backgroundColor:props.mode==='dark' ? '#213555' : 'white', color:props.mode==='dark' ? 'white' :'black'}}
          ></textarea>
         </div>

          <div>
            <button className="btn btn-info mx-2" onClick={handleUpClick}>
              Convert to Uppercase
            </button>

            <button className="btn btn-success mx-2" onClick={handleLoClick}>
              Convert to Lowercase
            </button>
            <button className="btn btn-secondary mx-2" onClick={handleCopy}>
              Copy text
            </button>

       
           

            <button className="btn btn-danger mx-2" onClick={handleClearClick}>
              Clear text
            </button>
          </div>
       
       <div className="container my-2" style={{color:props.mode==='dark' ? 'white' :'black'}}>

        <h2>Your text summary</h2>



    
        <p><b>{text.split(" ").length}</b> words and <b>{text.length}</b> characters</p>
        <p>{0.08 * text.split(" ").length}min -Average time  taken to read </p>
        <p>{text.split(".").length-1} Total sentences</p>
        <h2>Preview</h2>
        <p>{text.length>0? text:"enter something in the text box above to preview it."}</p>


       </div>

      </div>
    </>
  );
}
