import React, { useState } from "react";
import "./styles/right.css"
import NavBar from "./NavBar";


export default function Right(props){
    // const [value, setValue] = useState([]);
    
    return (
        <div className="Right-elements" style={{ width: `${props.widths}%`}}>
            <NavBar Title="Save Segment" />
            <div className="Right-content">
                <h2>Enter the Name of the Segment</h2>
                <input type="text" placeholder="Name of the Segment" name="segment" />
                <p>To save your segment. you need to add the schemas to build the query</p>
                <section>
                    <select name="Add-schema" id="Add">
                        <option value="Add-schema">Add Schema</option>
                        <option value="First Name">First Name</option>
                        <option value="Lase Name">Last Name</option>
                        <option value="Gender">Gender</option>
                        <option value="Age">Age</option>
                        <option value="Account Name">Account Name</option>
                        <option value="City">City</option>
                    </select>
                </section>
            </div>
        </div>
    )
}