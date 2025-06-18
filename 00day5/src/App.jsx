import React, { useState } from "react";
import Form from "./components/Form";
import Thankyou from "./components/Thankyou";

function App() {
  const [savedName, setSavedName] = useState("");
  return (
    <>
      <div className="container">
        <h1>Feedback Form</h1>
        <Form setSavedName={setSavedName} />
        {savedName && (setInterval(() => {
          <Thankyou savedName={savedName} />
        }, 2000))}
      </div>
    </>
  );
}

export default App;
