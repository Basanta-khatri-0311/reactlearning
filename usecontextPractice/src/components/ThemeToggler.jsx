import React from "react";
import { useTheme } from "../ThemeContext";

const ThemeToggler = () => {
  const { isDark, setIsDark } = useTheme();

  const onButtonClicked = () => {
    setIsDark(!isDark);
  };
  return (
    <>
      <button
        className={`${
          isDark ? "bg-white text-blue-500" : "bg-amber-800 text-green-500"
        }`}
        onClick={onButtonClicked}
      >
        Change Theme
      </button>
    </>
  );
};

export default ThemeToggler;
