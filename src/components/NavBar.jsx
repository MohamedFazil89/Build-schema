import React from "react";
import "./styles/NavBar.css"


export default function NavBar(props){
    return (
        <div className="Navbar-container">
            <p><svg xmlns="http://www.w3.org/2000/svg" height="30px" viewBox="0 -960 960 960" width="30px" fill="white"><path d="M400-80 0-480l400-400 71 71-329 329 329 329-71 71Z"/></svg> <span>{props.Title}</span></p>
        </div>
    )
}