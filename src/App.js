import React, { useState } from "react";
import './App.css';
import Button from './components/button';
import Right from "./components/RightElement";

function App() {
  const [width, setWidth] = useState(0);

  return (
    <div className="App">
      <Button handelClick={() => {width === 0 ? setWidth(100) : setWidth(0)}}/>
      <Right widths={width}/>
    </div>
  );
}

export default App;
