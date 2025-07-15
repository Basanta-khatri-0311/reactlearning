import React from "react";
import { useLanguage } from "../LanguageContext";

const LanguageToggler = () => {
  const { language, setLanguage } = useLanguage();

  const translations = {
    en: {
      theme: "Theme is",
      toggleTheme: "Change Theme",
      toggleLang: "Switch to Nepali",
    },
    np: {
      theme: "थिम छ",
      toggleTheme: "थिम परिवर्तन गर्नुहोस्",
      toggleLang: "अंग्रेजीमा स्विच गर्नुहोस्",
    },
  };

  const handleLanguage = () => {
    setLanguage(language === "en" ? "np" : "en");
  };
  const text = translations[language];
  return <button onClick={handleLanguage}>{text.toggleLang}</button>;
};

export default LanguageToggler;
