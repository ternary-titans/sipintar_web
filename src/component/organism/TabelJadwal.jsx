// import React, { useState, useEffect } from "react";
// import { BsTrash } from "react-icons/bs";
// import axios from "../../api/axios";

// const TabelJadwal = () => {
//   const [selectedmataKuliah, setSelectedMataKuliah] = useState("");
//   const [mataKuliahOptions, setMataKuliahOptions] = useState([]);

//   const [rows, setRows] = useState([
//     {
//       no: 1,
//       hari: "",
//       waktuMulai: "",
//       waktuSelesai: "",
//       mataKuliah: "",
//       totalMK: 0,
//       dosen: "",
//       ruang: "",
//     },
//   ]);

//   const calculateTotalJam = (waktuMulai, waktuSelesai) => {
//     const timeStart = new Date(`01/01/2022 ${waktuMulai}`);
//     const timeEnd = new Date(`01/01/2022 ${waktuSelesai}`);
//     const diffMinutes = Math.abs(timeEnd - timeStart) / 60000;

//     const totalJam = Math.ceil(diffMinutes / 45);
//     return totalJam;
//   };

//   const handleChange = (index, field, value) => {
//     const updatedRows = [...rows];
//     updatedRows[index][field] = value;
//     setRows(updatedRows);

//     if (field === "waktuMulai" || field === "waktuSelesai") {
//       const waktuMulai = updatedRows[index].waktuMulai;
//       const waktuSelesai = updatedRows[index].waktuSelesai;
//       const totalMK = calculateTotalJam(waktuMulai, waktuSelesai);
//       updatedRows[index].totalMK = totalMK;
//       setRows(updatedRows);
//     }
//   };
//   useEffect(() => {
//     async function fetchData() {
//       try {
//         const token = localStorage.getItem("userData")
//           ? JSON.parse(localStorage.getItem("userData")).token
//           : null;

//         const response = await axios.get(`/mataKuliah`, {
//           // Use the correct endpoint
//           headers: {
//             Authorization: token,
//           },
//         });
//         const mataKuliahData = response.data.data; // Extract the "data" array from the response
//         setSelectedMataKuliah(mataKuliahData);
//       } catch (error) {
//         console.error("Error fetching data:", error);
//       }
//     }

//     fetchData();
//   }, []);

//   const handleSubmit = async (event) => {
//     event.preventDefault();

//     const newData = rows.map((row) => {
//       return {
//         hari: row.hari,
//         jam_mulai: row.waktuMulai,
//         jam_akhir: row.waktuSelesai,
//         mata_kuliah_id: row.mataKuliah,
//         total_jam: row.totalMK,
//         dosen_id: row.dosen,
//         ruangan: row.ruang,
//       };
//     });

//     try {
//       const response = await axios.post("/jadwal", newData);
//       console.log("Data berhasil disimpan:", response.data);
//     } catch (error) {
//       console.error("Terjadi kesalahan saat menyimpan data:", error);
//       alert("Terjadi kesalahan saat menyimpan data. Mohon coba lagi.");
//     }
//   };

//   return (
//     <div className="flex">
//       <div className="mt-4 w-full">
//         <table className="p-2 w-full">
//           <thead>
//             <tr>
//               <th className="py-2 px-2 text-sm text-white bg-blue-900">No</th>
//               <th className="py-2 px-3 text-sm text-white bg-blue-900">Hari</th>
//               <th className="py-2 px-3 text-sm  text-white bg-blue-900">
//                 Waktu
//               </th>
//               <th className="py-2 px-3 text-sm  text-white bg-blue-900">
//                 Mata Kuliah
//               </th>
//               <th className="py-2 px-3 text-sm  text-white bg-blue-900">
//                 Total Jam
//               </th>
//               <th className="py-2 px-3 text-sm  text-white bg-blue-900">
//                 Dosen
//               </th>
//               <th className="py-2 px-3 text-sm  text-white bg-blue-900">
//                 Ruangan
//               </th>
//             </tr>
//           </thead>
//           <tbody className="text-black bg-white ">
//             {rows.map((row, index) => (
//               <tr key={index} className="text-sm">
//                 <td className="py-2 px-3">{index + 1}</td>
//                 <td className="py-2 px-4 text-sm"></td>
//                 <td className="py-2 px-4 text-sm flex items-center"></td>
//                 <td className="py-2 px-4 text-sm"></td>

//                 <td className="py-2 px-4 text-sm">{row.totalMK}</td>
//                 <td className="py-2 px-4 text-sm"></td>
//                 <td className="py-2 px-4 text-sm"></td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default TabelJadwal;
