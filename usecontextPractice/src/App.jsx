import React from "react";
import Header from "./components/Header";
import ThemeToggler from "./components/ThemeToggler";
import LanguageToggler from "./components/LanguageToggler";

const App = () => {
  return (
    <>
      <Header />
      <ThemeToggler/>
      <LanguageToggler/>
    </>
  );
};

export default App;
