import Admin from "./Admin";
import Button from "../atoms/Button";
import EditJadwal from "../organism/FormEditJadwal";

export const AdminJadwalEdit = () => {
  return (
    <div className="bg-gray-300 h-screen">
      <Admin />
      <div className="flex flex-col justify-start">
        <div className="flex justify-end mt-12 mr-4">
          <Button variant="biru">Simpan</Button>
        </div>
        <div>
          <EditJadwal />
        </div>
      </div>
    </div>
  );
};

export default AdminJadwalEdit;
