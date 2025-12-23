import {createContext, useContext, useState, useEffect } from "react";
import type { ReactNode } from "react";

export const ThemeContext = createContext <themeContextType | null>(null)

interface themeContextType{
    theme: "light" | "dark";
    toggleTheme: () => void
}


export function ThemeProvider ({children}: {children: ReactNode}){
    const [theme, setTheme] = useState<"light" | "dark">(() =>{
        const stored = localStorage.getItem("theme");
        return stored === "dark"? "dark" : "light"
    })

    const toggleTheme = () => {
        setTheme((prev) => {
            const newTheme = prev === "light" ? "dark" : "light";
            localStorage.setItem("theme", newTheme); // ← Save
            return newTheme;
        });
    }

    useEffect(() => {
        const root = document.documentElement;
        root.classList.toggle("dark", theme === "dark");

        localStorage.setItem(theme, "theme")
    }, [theme]);

    return(
        <ThemeContext.Provider value={{theme, toggleTheme}}>
            {children}
        </ThemeContext.Provider>
    );
}

export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error("useTheme must be inside ThemeProvider");
  return ctx;
}