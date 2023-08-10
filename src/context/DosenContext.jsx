import { createContext, useContext, useState } from "react";

const DosenContext = createContext();

export const DosenProvider = ({ children }) => {
  const [dosenData, setDosenData] = useState({
    userName: "Amran Yobioktabera", //
  });

  return (
    <DosenContext.Provider value={{ dosenData, setDosenData }}>
      {children}
    </DosenContext.Provider>
  );
};

export const useDosenContext = () => useContext(DosenContext);
