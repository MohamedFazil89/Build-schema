import React, { useState } from "react";
import "./styles/right.css";
import NavBar from "./NavBar";

export default function Right(props) {
    const [value, setValue] = useState([]);
    const [segmentName, setSegmentName] = useState(""); 
    const [selectedValue, setSelectedValue] = useState("");

    const handleSelectChange = (e) => {
        setSelectedValue(e.target.value);
    };

    const handleAddSegment = (e) => {
        e.preventDefault();
        if (selectedValue && selectedValue !== "Add-schema") {
            setValue([...value, selectedValue]);
        }
    };

    const handleRemoveSegment = (indexToRemove) => {
        setValue(value.filter((_, index) => index !== indexToRemove));
    };

    return (
        <div className="right-elements" style={{ width: `${props.widths}%` }}>
            <NavBar Title="Save Segment" />
            <div className="right-content">
                <h2>Enter the Name of the Segment</h2>
                <input 
                    type="text" 
                    placeholder="Name of the Segment" 
                    name="segment" 
                    value={segmentName} 
                    onChange={(e) => setSegmentName(e.target.value)} 
                />
                <p>To save your segment, you need to add the schemas to build the query</p>
                <ul>
                    {value.map((item, index) => (
                        <div className="loop-view" key={`${item}-${index}`}>
                            <select className={`Datas${index}`}>
                                <option value={item}>{item}</option>
                            </select>
                            <svg onClick={() => handleRemoveSegment(index)} xmlns="http://www.w3.org/2000/svg" height="50px" viewBox="0 -960 960 960" width="50px" fill="#5f6368">
                                <path d="M200-440v-80h560v80H200Z" />
                            </svg>
                        </div>
                    ))}
                </ul>
                <div className="option-container">
                    <span className="dot"></span>
                    <select name="Add-schema" id="Add" onChange={handleSelectChange}>
                        <option value="Add-schema">Add Schema</option>
                        <option value="First Name">First Name</option>
                        <option value="Last Name">Last Name</option>
                        <option value="Gender">Gender</option>
                        <option value="Age">Age</option>
                        <option value="Account Name">Account Name</option>
                        <option value="City">City</option>
                    </select>
                </div>
                <div>
                    <button onClick={handleAddSegment} className="add-segment">+ Add Segment</button>
                </div>
                <div className="save-div">
                    <button>Save the Segment</button>
                    <button>Cancel</button>
                </div>
            </div>
        </div>
    );
}
