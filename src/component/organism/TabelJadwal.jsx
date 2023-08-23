import React, { useState, useEffect } from "react";
import { BsTrash } from "react-icons/bs";
import axios from "../../api/axios";

const TabelJadwal = () => {
  const [selectedmataKuliah, setSelectedMataKuliah] = useState("");
  const [mataKuliahOptions, setMataKuliahOptions] = useState([]);

  const [rows, setRows] = useState([
    {
      no: 1,
      hari: "",
      waktuMulai: "",
      waktuSelesai: "",
      mataKuliah: "",
      totalMK: 0,
      dosen: "",
      ruang: "",
    },
  ]);

  const addRow = () => {
    setRows((prevRows) => [...prevRows, {}]);
  };

  const deleteRow = (index) => {
    setRows((prevRows) => prevRows.filter((_, i) => i !== index));
  };

  const calculateTotalJam = (waktuMulai, waktuSelesai) => {
    const timeStart = new Date(`01/01/2022 ${waktuMulai}`);
    const timeEnd = new Date(`01/01/2022 ${waktuSelesai}`);
    const diffMinutes = Math.abs(timeEnd - timeStart) / 60000;

    const totalJam = Math.ceil(diffMinutes / 45);
    return totalJam;
  };

  const handleChange = (index, field, value) => {
    const updatedRows = [...rows];
    updatedRows[index][field] = value;
    setRows(updatedRows);

    if (field === "waktuMulai" || field === "waktuSelesai") {
      const waktuMulai = updatedRows[index].waktuMulai;
      const waktuSelesai = updatedRows[index].waktuSelesai;
      const totalMK = calculateTotalJam(waktuMulai, waktuSelesai);
      updatedRows[index].totalMK = totalMK;
      setRows(updatedRows);
    }
  };
  useEffect(() => {
    async function fetchData() {
      try {
        const token = localStorage.getItem("userData")
          ? JSON.parse(localStorage.getItem("userData")).token
          : null;

        const response = await axios.get(`/mataKuliah`, {
          // Use the correct endpoint
          headers: {
            Authorization: token,
          },
        });
        const mataKuliahData = response.data.data; // Extract the "data" array from the response
        setSelectedMataKuliah(mataKuliahData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchData();
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const newData = rows.map((row) => {
      return {
        hari: row.hari,
        jam_mulai: row.waktuMulai,
        jam_akhir: row.waktuSelesai,
        mata_kuliah_id: row.mataKuliah,
        total_jam: row.totalMK,
        dosen_id: row.dosen,
        ruangan: row.ruang,
        // Add other properties here as needed
      };
    });

    try {
      const response = await axios.post("/jadwal", newData);
      console.log("Data berhasil disimpan:", response.data);
    } catch (error) {
      console.error("Terjadi kesalahan saat menyimpan data:", error);
      alert("Terjadi kesalahan saat menyimpan data. Mohon coba lagi.");
    }
  };

  return (
    <div className="flex">
      <div className="mt-4 w-full">
        <table className="p-2 w-full">
          <thead>
            <tr>
              <th className="py-2 px-2 text-sm text-white bg-blue-900">No</th>
              <th className="py-2 px-3 text-sm text-white bg-blue-900">Hari</th>
              <th className="py-2 px-3 text-sm  text-white bg-blue-900">
                Waktu
              </th>
              <th className="py-2 px-3 text-sm  text-white bg-blue-900">
                Mata Kuliah
              </th>
              <th className="py-2 px-3 text-sm  text-white bg-blue-900">
                Total Jam
              </th>
              <th className="py-2 px-3 text-sm  text-white bg-blue-900">
                Dosen
              </th>
              <th className="py-2 px-3 text-sm  text-white bg-blue-900">
                Ruangan
              </th>
              <th className="py-2 px-2 text-sm  text-white bg-blue-900">
                Hapus
              </th>
            </tr>
          </thead>
          <tbody className="text-black bg-white ">
            {rows.map((row, index) => (
              <tr key={index} className="text-sm">
                <td className="py-2 px-3">{index + 1}</td>
                <td className="py-2 px-4 text-sm">
                  <select
                    className="border rounded px-2 py-1"
                    value={row.hari}
                    onChange={(e) =>
                      handleChange(index, "hari", e.target.value)
                    }
                  >
                    <option value="">Pilih Hari</option>
                    <option value="Senin">Senin</option>
                    <option value="Selasa">Selasa</option>
                    <option value="Rabu">Rabu</option>
                    <option value="Kamis">Kamis</option>
                    <option value="Jumat">Jumat</option>
                  </select>
                </td>
                <td className="py-2 px-4 text-sm flex items-center">
                  <input
                    type="text"
                    className="py-1 px-2 border border-gray-300 rounded mr-1 w-16"
                    value={row.waktuMulai}
                    onChange={(e) =>
                      handleChange(index, "waktuMulai", e.target.value)
                    }
                    placeholder="jj:mm"
                  />
                  <span>-</span>
                  <input
                    type="text"
                    className="py-1 px-2 border border-gray-300 rounded ml-1 w-16"
                    value={row.waktuSelesai}
                    onChange={(e) =>
                      handleChange(index, "waktuSelesai", e.target.value)
                    }
                    placeholder="jj:mm"
                  />
                </td>
                <td className="py-2 px-4 text-sm">
                  <select
                    className="border rounded px-2 py-1"
                    onChange={(e) =>
                      handleChange(index, "mataKuliah", e.target.value)
                    }
                  >
                    <option value="">Pilih Mata Kuliah</option>
                    {mataKuliahOptions.map((mk) => (
                      <option
                        key={mk.id}
                        value={selectedmataKuliah}
                        selected={row.mataKuliah === mk.nama_mk}
                      >
                        {mk.nama_mk}
                      </option>
                    ))}
                  </select>
                </td>

                <td className="py-2 px-4 text-sm">{row.totalMK}</td>
                <td className="py-2 px-4 text-sm">
                  <select
                    className="border rounded px-2 py-1"
                    value={row.dosen}
                    onChange={(e) =>
                      handleChange(index, "dosen", e.target.value)
                    }
                  >
                    <option value="">Pilih Dosen</option>
                    <option value="Dosen 1">Dosen 1</option>
                    <option value="Dosen 2">Dosen 2</option>
                  </select>
                </td>
                <td className="py-2 px-4 text-sm">
                  <select
                    className="border rounded px-2 py-1"
                    value={row.ruang}
                    onChange={(e) =>
                      handleChange(index, "ruang", e.target.value)
                    }
                  >
                    <option value="">Pilih Ruangan</option>
                    <option value="Ruangan 1">Ruangan 1</option>
                    <option value="Ruangan 2">Ruangan 2</option>
                  </select>
                </td>
                <td className="py-2 px-3 text-sm">
                  <button
                    onClick={() => deleteRow(index)}
                    className="flex items-center text-red-500"
                  >
                    <BsTrash className="mr-1" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="flex flex-row justify-center items-center gap-4 mt-4">
          <button
            className="px-4 py-1 bg-green-500 text-sm text-white w-26 h-8 rounded"
            onClick={addRow}
          >
            Tambah Baris
          </button>
          <button
            className="px-4 py-2 bg-blue-500 text-white rounded"
            onClick={handleSubmit}
          >
            Simpan
          </button>
        </div>
      </div>
    </div>
  );
};

export default TabelJadwal;
