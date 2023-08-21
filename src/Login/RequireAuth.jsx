// RequireAuth.js
import { Navigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const RequireAuth = ({ allowedRoles, children }) => {
  const { auth } = useAuth();

  if (!auth) {
    // Pengguna belum login, arahkan ke halaman login
    return <Navigate to="/login" />;
  }

  if (!allowedRoles.includes(auth.role)) {
    // Pengguna tidak memiliki peran yang diizinkan
    return <Navigate to="/unauthorized" />;
  }

  // Pengguna memiliki peran yang diizinkan, tampilkan konten
  return children;
};

export default RequireAuth;
