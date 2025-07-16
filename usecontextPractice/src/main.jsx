import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { ThemeProvider } from "./ThemeContext.jsx";
import { LanguageProvider } from "./LanguageContext.jsx";
import { LoginProvider } from "./LoginContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <LanguageProvider>
      <ThemeProvider>
      
      </ThemeProvider>
    </LanguageProvider> */}
    <LoginProvider>
      <App />
    </LoginProvider>
  </StrictMode>
);
