import React, { useContext } from "react";
import ThemeContext from "../context/ThemeContext";

export default function ContentComponet() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <div>
      <div> The current theme is {theme} </div>
      <button onClick={toggleTheme}> Toggle Theme </button>
    </div>
  );
}
