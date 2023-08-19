import React, {useState} from "react";

export default function About() {
    const [myStyle,setMyStyle]=useState({

        color:"black",
        backgroundColor:"white",
       
    });

    const [btnText,setBtnText]=useState("Enable Dark mode");

    let toggleStyle=()=>{
        if(myStyle.color==="black"){
            setMyStyle({
                color:"red",
                backgroundColor:"#B8DBD9",
                border:"1px solid white"

            });
            setBtnText("Enable Light Mode");
        }

        else{
            setMyStyle({
                color:"black",
                backgroundColor:"white"

            });
            setBtnText("Enable Dark  Mode");

        }

    }


  return (

    <div className="container" style={myStyle}>
        <h2 className="my-2">Quiz game</h2>
      <div className="accordion" id="accordionExample" style={myStyle}>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button"
              type="button"
              style={myStyle}
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
             <strong>Question #1 (Highest Mountain in world) </strong> 
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle}>
              Answer:<strong> Mount Everest</strong> 
              
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              style={myStyle}
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
             <strong> Question #2 (Capital of South Korea) </strong>
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle}>
              Answer: <strong>Seoul</strong> 
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              style={myStyle}
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
            <strong> Question #3 (Prime minsiter of India) </strong> 
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle}>
             Answer: <strong>Modi</strong> 
            </div>
          </div>
        </div>
      </div>
    <div className="container my-3">

    <button onClick={toggleStyle} type="button" className="btn btn-primary " >{btnText}</button>

    </div>
      
    </div>
  );
}
