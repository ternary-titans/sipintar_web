import Admin from "./Admin";
import TambahMhs from "../organism/FormTambahMhs";

export const AdminMahasiswaTambah = () => {
  return (
    <div className="bg-gray-300 h-screen">
      <Admin />
      <div className="flex flex-col justify-start">
        <div className="mt-10">
          <TambahMhs />
        </div>
      </div>
    </div>
  );
};

export default AdminMahasiswaTambah;
