import { useState, createContext ,useContext } from "react";

const languageContext = createContext()


//provider

const LanguageProvider = ({children}) => {
    const [language, setLanguage] = useState("en")

    return(
        <languageContext.Provider value={{language, setLanguage}}>
            {children}
        </languageContext.Provider>
    )
}

//consumer
const useLanguage = () => useContext(languageContext)

export {LanguageProvider, useLanguage}