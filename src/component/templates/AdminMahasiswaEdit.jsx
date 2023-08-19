import Admin from "./Admin";
import EditMhs from "../organism/FormEditMhs";

export const AdminMahasiswaEdit = () => {
  return (
    <div className="bg-gray-300 h-screen">
      <Admin />
      <div className="flex flex-col justify-start ">
        <div className="mt-12">
          <EditMhs />
        </div>
      </div>
    </div>
  );
};

export default AdminMahasiswaEdit;
