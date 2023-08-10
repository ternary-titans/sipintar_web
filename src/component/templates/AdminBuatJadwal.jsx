import Admin from "./Admin";
import BuatJadwal from "../organism/BuatJadwal";

export const AdminBuatJadwal = () => {
  return (
    <div className="bg-gray-300 h-screen">
      <Admin />
      <div className="mt-12 ml-40">
        <BuatJadwal />
      </div>
    </div>
  );
};

export default AdminBuatJadwal;
