import { createContext, useContext, useState, useEffect } from "react";
import axios from "../api/axios";

const DosenContext = createContext();

export const DosenProvider = ({ children }) => {
  const [dosenData, setDosenData] = useState({
    userName: "Amran Yobioktabera S.Kom., M.Kom.",
  });

  useEffect(() => {
    axios
      .get("/users/current")
      .then((response) => response.json())
      .then((data) => {
        setDosenData({
          userName: data.data.nama, // Set the username using the "nama" field from the API response
        });
      })
      .catch((error) => {
        console.error("Error fetching current user data:", error);
      });
  }, []);

  return (
    <DosenContext.Provider value={{ dosenData, setDosenData }}>
      {children}
    </DosenContext.Provider>
  );
};

export const useDosenContext = () => useContext(DosenContext);
