import { createContext, useState } from "react";
import dataJson from "../db.json";

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState({});

  const authUser = (email, password) => {
    const userData = dataJson["login-api"].find(
      (user) => user.email === email && user.password === password
    );

    if (userData) {
      setAuth({ user: userData, roles: [userData.role] });
      return true;
    } else {
      return false;
    }
  };

  const logout = () => {
    setAuth({});
  };

  return (
    <AuthContext.Provider value={{ auth, authUser, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
