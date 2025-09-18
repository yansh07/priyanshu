
import { useState, createContext } from "react";
const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [theme, setTheme] = useState('dark');
  const [loading, setLoading] = useState(false);
  
  return (
    <AppContext.Provider value={{ theme, setTheme, loading, setLoading }}>
      {children}
    </AppContext.Provider>
  );
};