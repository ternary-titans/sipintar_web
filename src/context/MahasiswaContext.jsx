import { createContext, useContext, useState } from "react";

const MahasiswaContext = createContext();

export const MahasiswaProvider = ({ children }) => {
  const [mahasiswaData, setMahasiswaData] = useState({
    userName: "Rifka Anggun Puspitaningrum",
    nim: "3.34.20.0.21",
  });

  return (
    <MahasiswaContext.Provider value={{ mahasiswaData, setMahasiswaData }}>
      {children}
    </MahasiswaContext.Provider>
  );
};

export const useMahasiswaContext = () => useContext(MahasiswaContext);
