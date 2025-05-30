
import Card from "./components/Card";

function App() {
  let myObject = {
    userName:"Basanta",
    age:22
  }
  let newArry = [1,2,3,4]
  return (
    <>
      <div>
        <h1>TailwindCSS Test</h1>
      </div>
      <Card someObj = {myObject} somearr = {newArry} />
    </>
  );
}

export default App;
