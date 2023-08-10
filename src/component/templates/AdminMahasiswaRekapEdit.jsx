import Admin from "./Admin";
import EditRekapMhs from "../organism/FormRekapEditMhs";

export const AdminMahasiswaRekapEdit = () => {
  return (
    <div className="bg-gray-300 h-screen">
      <Admin />
      <div className="flex flex-col justify-start mt-10">
        <div style={{ marginTop: "10px" }}>
          <EditRekapMhs />
        </div>
      </div>
    </div>
  );
};

export default AdminMahasiswaRekapEdit;
