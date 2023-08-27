import Admin from "./Admin";
import Jadwal from "../organism/Jadwal";

export const AdminJadwal = () => {
  return (
    <div className="bg-gray-300 h-screen">
      <Admin />
      <div className="flex flex-col justify-start mt-10">
        <div style={{ marginTop: "10px" }}>
          <Jadwal />
        </div>
      </div>
    </div>
  );
};

export default AdminJadwal;
