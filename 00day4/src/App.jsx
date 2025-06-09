import React, { useState } from "react";
import { Count, EmojisItem } from "./components/index";

function App() {
  const [countHappy, setCountHappy] = useState(0);
  const [countModerate, setCountModerate] = useState(0);
  const [countAngry, setCountAngry] = useState(0);

  const emojisArray = ["🙂", "😐", "😡"];

  const handleEmojiClick = (emoji) => {
    if (emoji === "🙂") {
      setCountHappy(countHappy + 1);
    } else if (emoji === "😐") {
      setCountModerate(countModerate + 1);
    } else if (emoji === "😡") {
      setCountAngry(countAngry + 1);
    }
  };

  return (
    <>
      <div className="container">
        <h1>How Was Your Experience?</h1>
        <div className="emojis">
          <EmojisItem emojisArray={emojisArray} handleEmojiClick={handleEmojiClick} counts={{ countHappy, countModerate, countAngry }} />
        </div>
        <h3>Thank You For Your Feedback</h3> 
        <Count countHappy={countHappy} countModerate={countModerate} countAngry={countAngry} />
      </div>
    </>
  );
}

export default App;
