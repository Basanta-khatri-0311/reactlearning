import React from "react";
import { Top, Bottom } from "./components/index";
import { useState } from "react";

function App() {
  const [selected, setSelected] = useState("");
  const [valuesA, setValuesA] = useState("");
  const [valuesB, setValuesB] = useState("");

  const selectedTeam = (value) => {
    value === "A" ? setSelected("A") : setSelected("B");
    console.log(value);
  };

  return (
    <>
      <div className="container">
        <h1>Team Picker</h1>
        <Top
          selectedTeam={selectedTeam}
          setValuesA={setValuesA}
          setValuesB={setValuesB}
        />
        <Bottom
          selected={selected}
          valuesA={valuesA}
          setValuesA={setValuesA}
          valuesB={valuesB}
          setValuesB={setValuesB}
        />
      </div>
    </>
  );
}

export default App;
