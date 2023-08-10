import Admin from "./Admin";
import TambahDosen from "../organism/FormTambahDosen";

export const AdminDosenTambah = () => {
  return (
    <div className="bg-gray-300 h-screen">
      <Admin />
      <div className="flex flex-col justify-start">
        <div className="mt-10">
          <TambahDosen />
        </div>
      </div>
    </div>
  );
};

export default AdminDosenTambah;
