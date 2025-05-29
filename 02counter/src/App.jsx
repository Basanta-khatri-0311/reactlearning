import { useState } from "react";

function App() {
  let [counter, setCounter] = useState(0);
  const addValue = () => {
    setCounter(counter + 1);
    // console.log("Value added", counter);
  };
  return (
    <>
      <h1>Hello From react learning | Counter</h1>
      <h2>Counter Value: {counter}</h2>
      <button onClick={addValue}>Add value {counter}</button>
      <br />
      <button>Remove value</button>
    </>
  );
}

export default App;
