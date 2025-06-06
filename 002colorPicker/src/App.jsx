// import React, { useEffect, useState } from 'react'

// function App() {
//   const [color, setColor] = useState("white")
//   useEffect(() => {

//   }, [color])

//   return (
//     <>
//     <input className='inputfield' type="color" value={color} onChange={(e) => setColor(e.target.value)}/>
//     <div className='bacGround' style={{backgroundColor:color}}>

//     </div>
//     </>
//   )
// }

// export default App

import React, { useState } from "react";
import {
  Selector,
  SelectionDisplayArea,
  DisplayArea,
} from "./components/index";

function App() {
  const [color, setColor] = useState("white")
  
 

  return (
    <>
      <div className="container">
        <h1>COLOR PICKER</h1>
        <Selector setColor={setColor}/>
        <DisplayArea color={color}/>
        <SelectionDisplayArea color={color}/>
      </div>
    </>
  );
}

export default App;
