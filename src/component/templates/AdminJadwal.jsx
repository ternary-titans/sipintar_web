import Admin from "./Admin";
import { Link } from "react-router-dom";
import Button from "../atoms/Button";
import Jadwal from "../organism/Jadwal";

export const AdminJadwal = () => {
  return (
    <div className="bg-gray-300 h-screen">
      <Admin />
      <div className="flex flex-col justify-start">
        <div className="flex justify-end mt-12 mr-4">
          <Link to="/admin/buatjadwal">
            <Button variant="biru">Buat Jadwal</Button>
          </Link>
        </div>
        <div style={{ marginTop: "10px" }}>
          <Jadwal />
        </div>
      </div>
    </div>
  );
};

export default AdminJadwal;
