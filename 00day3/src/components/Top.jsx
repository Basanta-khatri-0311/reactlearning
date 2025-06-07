import React from "react";

function Top({ selectedTeam, setValuesA, setValuesB }) {
  const clearFieldA = () => {
    setValuesA("")
  }
  const clearFieldB = () => {
    setValuesB("")
  }

  const clearFieldAll = () => {
    setValuesA("")
    setValuesB("")
    selectedTeam('')
  }
  return (
    <>
      <div className="top">
        <div className="top-Left">
          <h3>Select a team for a member:</h3>
        </div>
        <div className="top-Right">
          <button onClick={() => selectedTeam("A")} className="btn">
            Team A
          </button>
          <button onClick={() => selectedTeam("B")} className="btn">
            Team B
          </button>
          <button onClick={clearFieldA}  className="btn">
            Reset A
          </button>
          <button onClick={clearFieldB}  className="btn">
            Reset B
          </button>
          <button onClick={clearFieldAll}  className="btn">
            Reset All
          </button>
        </div>
      </div>
    </>
  );
}

export default Top;
