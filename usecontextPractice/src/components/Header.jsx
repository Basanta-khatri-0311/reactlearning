import React from "react";
import { useTheme } from "../ThemeContext";
import { useLanguage } from "../LanguageContext";

const Header = () => {
  const { isDark } = useTheme();
  const { language } = useLanguage();
  return (
    <>
      <div className={`w-full ${isDark ? "bg-black" : "bg-white"} `}>
        <p>Theme is {isDark ? "Dark" : "Light"}</p>
      </div>
      <div>
        <p>Language is {language === "en" ? "English":"अंग्रेजी"}</p>
      </div>
    </>
  );
};

export default Header;
