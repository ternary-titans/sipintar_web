import { useLocation, Navigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const RequireAuth = () => {
  const { auth } = useAuth();
  const location = useLocation();

  // Jika pengguna belum login, arahkan ke halaman login
  if (!auth?.user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  // Ambil peran (role) pengguna dari state auth
  const userRole = auth?.roles?.[0];

  // Tentukan halaman tujuan berdasarkan peran pengguna
  let destination = "/";
  if (userRole === "Admin") {
    destination = "/admin/dashboard";
  } else if (userRole === "Dosen") {
    destination = "/dosen";
  } else if (userRole === "Mahasiswa") {
    destination = "/mahasiswa";
  }

  // Arahkan pengguna ke halaman tujuan sesuai perannya
  return <Navigate to={destination} />;
};

export default RequireAuth;
