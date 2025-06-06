import React from "react";
import { useState } from "react";
import { AddBtn, SubBtn, ResetBtn } from "./components/index";

function App() {
  const [count, setCount] = useState(0);

  const handelAdd = () => {
    setCount(count + 1);
  };

  const handelSub = () => {
    setCount(count - 1);
  };

  const handelReset = () => {
    setCount(0);
  };
  return (
    <>
      <h1>This is a Counter Application</h1>
      <div className="countValue">
        Count Value:<span className="value">{count}</span>{" "}
      </div>
      <div className="btns">
        <AddBtn onclicked={handelAdd} />
        <SubBtn onclicked={handelSub} count={count} />
        <ResetBtn onclicked={handelReset} />
      </div>
    </>
  );
}

export default App;
