import React, { useState, useEffect} from "react";

const Theme = () => {

    // DARK/LIGHT THEME 
    const [theme, setTheme] = useState("dark");
    const toggleTheme = () => {
        if (theme === 'light') {
          setTheme('dark');
        } else {
          setTheme('light');
        }
      };
      useEffect(() => {
        document.body.className = theme;
      }, [theme])
          
    return (
     
            <button className="toggleTheme" onClick={toggleTheme}>Theme</button>
    )
}

export default Theme;