import { createContext, useState } from "react";
export const themeContex = createContext();

export default function ThemeContext(props) {
  const [theme, setTheme] = useState(false);

  
  return (
    <themeContex.Provider value={{ theme, setTheme }}>
      {props.children}
    </themeContex.Provider>
  );
}
