import Admin from "./Admin";
import EditMhs from "../organism/FormEditMhs";
import { useParams } from "react-router-dom";

export const AdminMahasiswaEdit = () => {
  const { id } = useParams();

  return (
    <div className="bg-gray-300 h-screen">
      <Admin />
      <div className="flex flex-col justify-start ">
        <div className="mt-12">
          <EditMhs id={id} />
        </div>
      </div>
    </div>
  );
};

export default AdminMahasiswaEdit;
