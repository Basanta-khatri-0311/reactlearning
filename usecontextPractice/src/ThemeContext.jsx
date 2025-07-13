import { createContext, useContext, useState } from "react";

const themeContext = createContext();

//this is our provider
const ThemeProvider = ({ children }) => {
  const [isDark, setIsDark] = useState(false);

  return (
    <themeContext.Provider value={{ isDark, setIsDark }}>
      {children}
    </themeContext.Provider>
  );
};

//this is our consumer
const useTheme = () => useContext(themeContext);

export { useTheme, ThemeProvider };
