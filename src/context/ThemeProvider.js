import React, { useState } from "react";
import ThemeContext from "./ThemeContext";

export const ThemeProvider = ({ Children }) => {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "light" : "dark"));
  };

  return (
    <ThemeProvider.Provider value={{ theme, toggleTheme }}>
      {Children}
    </ThemeProvider.Provider>
  );
};
