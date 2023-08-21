import { Routes, Route } from "react-router-dom";
import "./App.css";
import Login from "./Login/LoginAdmin.jsx";
import DashboardAdmin from "./component/templates/AdminDashboard.jsx";
import AdminAlpa from "./component/templates/AdminManageAlpa";

import AdminDosen from "./component/templates/AdminDosen";
import AdminDosenTambah from "./component/templates/AdminDosenTambah";
import AdminDosenEdit from "./component/templates/AdminDosenEdit";
import AdminDosenRekp from "./component/templates/AdminRekapDosen";
import AdminDosenRekpDetail from "./component/templates/AdminRekapDetailDosen";

import AdminMhs from "./component/templates/AdminMahasiswa";
import AdminMhsTambah from "./component/templates/AdminMahasiswaTambah";
import AdminMhsEdit from "./component/templates/AdminMahasiswaEdit";
import AdminMhsRekp from "./component/templates/AdminMahasiswaRekap";
import AdminMhsRekpDetail from "./component/templates/AdminMahasiswaRekapDetail";
import AdminMhsRekpDetailMK from "./component/templates/AdminMahasiswaRekapDetailMK";
import AdminMhsRkpEdit from "./component/templates/AdminMahasiswaRekapEdit";

import AdminJadwal from "./component/templates/AdminJadwal";
import AdminBuatJadwal from "./component/templates/AdminBuatJadwal";
import AdminEditJadwal from "./component/templates/AdminJadwalEdit";
import AdminMK from "./component/templates/AdminKelolaMK";
import AdminKelas from "./component/templates/AdminKelas";
import AdminProdi from "./component/templates/AdminKelolaProdi";
import AdminJurusan from "./component/templates/AdminJurusan";
import AdminTA from "./component/templates/AdminTahunAjaran";

import Dosen from "./component/templates/DosenDashboard";
import DosenMK from "./component/templates/DosenMatkul";
import DosenQR from "./component/templates/DosenQR";
import DosenLihatRkp from "./component/templates/DosenLihatRekap";
import DosenRkp from "./component/templates/DosenRekap";
import DosenRkpMhs from "./component/templates/DosenRekapMhs";
import DosenRkpnBln from "./component/templates/DosenRekapBulan";

import Mahasiswa from "./component/templates/MahasiswaDashboard";
import MahasiswaAktivasi from "./component/templates/MahasiswaAktivasi";
import MahasiswaQR from "./component/templates/MahasiswaQR";
import MahasiswaRkp from "./component/templates/MahasiswaRekap";
import MahasiswaMK from "./component/templates/MahasiswaMatkul";

import Missing from "./Login/Missing";
import { DosenProvider } from "./context/DosenContext";
import { MahasiswaProvider } from "./context/MahasiswaContext";

function App() {
  return (
    <DosenProvider>
      <MahasiswaProvider>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          //Admin-A
          <Route path="/admin/dashboard" element={<DashboardAdmin />} />
          <Route path="/admin/dashboard/alpa" element={<AdminAlpa />} />
          //A-Dosen
          <Route path="/admin/dosen" element={<AdminDosen />} />
          <Route path="/admin/dosen/tambah" element={<AdminDosenTambah />} />
          <Route path="/admin/dosen/edit/:id" element={<AdminDosenEdit />} />
          <Route path="/admin/dosen/rekap" element={<AdminDosenRekp />} />
          <Route
            path="/admin/dosen/rekap/:id"
            element={<AdminDosenRekpDetail />}
          />
          //A-Mahasiswa
          <Route path="/admin/mahasiswa" element={<AdminMhs />} />
          <Route path="/admin/mahasiswa/tambah" element={<AdminMhsTambah />} />
          <Route path="/admin/mahasiswa/edit/:id" element={<AdminMhsEdit />} />
          <Route path="/admin/mahasiswa/rekap" element={<AdminMhsRekp />} />
          <Route
            path="/admin/mahasiswa/rekap/detail/:id"
            element={<AdminMhsRekpDetail />}
          />
          <Route
            path="/admin/mahasiswa/rekap/detailmk/:id"
            element={<AdminMhsRekpDetailMK />}
          />
          <Route
            path="/admin/mahasiswa/rekap/edit/:id"
            element={<AdminMhsRkpEdit />}
          />
          //A-Jadwal Kuliah
          <Route path="/admin/jadwal" element={<AdminJadwal />} />
          <Route path="/admin/buatjadwal" element={<AdminBuatJadwal />} />
          <Route path="/admin/editjadwal/:id" element={<AdminEditJadwal />} />
          //A-Kelola
          <Route path="/admin/matkul" element={<AdminMK />} />
          <Route path="/admin/kelas" element={<AdminKelas />} />
          <Route path="/admin/prodi" element={<AdminProdi />} />
          <Route path="/admin/jurusan" element={<AdminJurusan />} />
          <Route path="/admin/tahunajaran" element={<AdminTA />} />
          //Dosen
          <Route path="/dosen" element={<Dosen />} />
          <Route path="/dosen/mk/:id" element={<DosenMK />} />
          <Route path="/dosen/mk/lihat/:id" element={<DosenLihatRkp />} />
          <Route path="/dosen/mk/QR/:id" element={<DosenQR />} />
          <Route path="/dosen/rekap" element={<DosenRkp />} />
          <Route path="/dosen/rekapmhs" element={<DosenRkpMhs />} />
          <Route path="/dosen/rekapbln" element={<DosenRkpnBln />} />
          //Mahasiswa
          <Route path="/mahasiswa" element={<Mahasiswa />} />
          <Route path="/mahasiswa/aktivasi" element={<MahasiswaAktivasi />} />
          <Route path="/mahasiswa/qr/:id" element={<MahasiswaQR />} />
          <Route path="/mahasiswa/rekap" element={<MahasiswaRkp />} />
          <Route path="/mahasiswa/mk/:id" element={<MahasiswaMK />} />
          <Route path="*" element={<Missing />} />
        </Routes>
      </MahasiswaProvider>
    </DosenProvider>
  );
}

export default App;
