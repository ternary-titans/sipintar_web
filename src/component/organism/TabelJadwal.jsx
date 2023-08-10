import React, { useState } from "react";
import { BsTrash } from "react-icons/bs";

const TabelJadwal = () => {
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

  return (
    <div className="flex">
      <div className="mt-4 w-full">
        <table className="p-2 w-full">
          {/* Tabel header */}
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
                    value={row.mataKuliah}
                    onChange={(e) =>
                      handleChange(index, "mataKuliah", e.target.value)
                    }
                  >
                    <option value="">Pilih Mata Kuliah</option>
                    <option value="Mata Kuliah 1">Mata Kuliah 1</option>
                    <option value="Mata Kuliah 2">Mata Kuliah 2</option>
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
        <div className="flex justify-center items-center gap-4 mt-4">
          <button
            className="px-4 py-1 bg-green-500 text-sm text-white w-26 h-8 rounded"
            onClick={addRow}
          >
            Tambah Baris
          </button>
        </div>
      </div>
    </div>
  );
};

export default TabelJadwal;
