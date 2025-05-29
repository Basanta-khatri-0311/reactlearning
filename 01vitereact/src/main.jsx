import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";

// function NewApp() {
//   return <h1>My custom App!!!</h1>
// }

const newElement = <a href="httsp://www.google.com">Google</a>;

const anotherElement = React.createElement(
  "a",
  { href: "https://google.com", target: "_blank" },
  "Ok Google!!!"
);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
    {/* <NewApp /> */}
   
  </StrictMode>
);
