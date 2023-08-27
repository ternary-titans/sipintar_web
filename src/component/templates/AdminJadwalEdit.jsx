import Admin from "./Admin";
import EditJadwal from "../organism/FormEditJadwal";
import { useParams } from "react-router-dom";

export const AdminJadwalEdit = () => {
  const { id } = useParams();
  return (
    <div className="bg-gray-300 h-screen">
      <Admin />
      <div className="flex flex-col justify-start">
        <div className="mt-10">
          <EditJadwal id={id} />
        </div>
      </div>
    </div>
  );
};

export default AdminJadwalEdit;
