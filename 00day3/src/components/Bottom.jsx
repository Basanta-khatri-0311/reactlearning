import React from "react";
import { useEffect } from "react";
import { useState } from "react";

function Bottom({ selected, valuesA, setValuesA, valuesB, setValuesB }) {
  const [isA, setIsA] = useState(true);
  const [isB, setIsB] = useState(true);

  useEffect(() => {
    if (selected === "A") {
      setIsA(false);
      setIsB(true);
    } else if (selected === "B") {
      setIsA(true);
      setIsB(false);
    }
  }, [selected]);

  return (
    <>
      <div className="bottom">
        <div className="right">
          <h4>Team A</h4>
          <textarea
            name="input"
            id="input"
            rows={20}
            cols={60}
            readOnly={isA}
            value={valuesA}
            onChange={(e) => setValuesA(e.target.value)}
          ></textarea>
        </div>
        <div className="left">
          <h4>Team B</h4>
          <textarea
            name="input"
            id="input"
            rows={20}
            cols={60}
            readOnly={isB}
            value={valuesB}
            onChange={(e) => setValuesB(e.target.value)}
          ></textarea>
        </div>
      </div>
    </>
  );
}

export default Bottom;
