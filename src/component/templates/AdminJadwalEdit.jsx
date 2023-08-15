import Admin from "./Admin";
import EditJadwal from "../organism/FormEditJadwal";

export const AdminJadwalEdit = () => {
  return (
    <div className="bg-gray-300 h-screen">
      <Admin />
      <div className="flex flex-col justify-start">
        <div className="mt-10">
          <EditJadwal />
        </div>
      </div>
    </div>
  );
};

export default AdminJadwalEdit;
