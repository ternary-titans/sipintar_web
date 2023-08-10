import Admin from "./Admin";
import EditDosen from "../organism/FormEditDosen";
import { useParams } from "react-router-dom";

export const AdminDosenEdit = () => {
  const { id } = useParams();
  return (
    <div className="bg-gray-300 h-screen">
      <Admin />
      <div className="flex flex-col justify-start">
        <div className="mt-10">
          <EditDosen id={id} />
        </div>
      </div>
    </div>
  );
};

export default AdminDosenEdit;
