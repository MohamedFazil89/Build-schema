import React from "react";
import "./styles//button.css"
import NavBar from "./NavBar";


export default function Button(props){
    return (
        <div className="Button" >
        <div className="nav">
        <NavBar Title="View Audience" />
        </div>

           <div className="button-container">
           <button onClick={props.handelClick}>Save Segment</button>
 

           </div>
        </div>
    )
}