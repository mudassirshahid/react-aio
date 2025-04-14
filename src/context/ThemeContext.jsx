import { createContext, useContext, useState } from "react";

const ThemeContext = createContext()

export const ThemeProvider = ({children}) => {
    const [theme,setTheme] = useState(true);

    const toggleTheme = () => {
        setTheme(!theme)
    }
    return (
        <ThemeContext.Provider value={{theme,toggleTheme}}>
            <div className={`${theme ? 'mainDarkTheme' : 'mainLightTheme'}`}>
        {children}
        </div>
        </ThemeContext.Provider>
    )
}

export const useThemeContext = () => {
    return useContext(ThemeContext)
}
