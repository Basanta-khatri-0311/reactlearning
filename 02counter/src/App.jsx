import { useState } from "react";

function App() {
  let [counter, setCounter] = useState(0);
  const addValue = () => {
    setCounter(counter => counter + 1);
    // setCounter(counter => counter + 1);
    // setCounter(counter => counter + 1);
    // setCounter(counter => counter + 1);
  };
  const removeValue = () => {
    // if (counter <= 0 ) {
    //   return;
    // } else {
    // }
    setCounter(counter - 1);
  };
  return (
    <>
      <h1>Hello From react learning | Counter</h1>
      <h2>Counter Value: {counter}</h2>

      <button onClick={addValue} disabled = {counter===20}>Add value {counter}</button>

      <br />

      <button onClick={removeValue} disabled ={counter === 0}>Remove value {counter}</button>
    </>
  );
}

export default App;
