import React, { useState, useEffect } from "react";
import Card from "../atoms/Card";
import Input from "../atoms/Input";
import InputDropdown from "../atoms/InputDropdown";
import Button from "../atoms/Button";
import axios from "../../api/axios";
import { useNavigate } from "react-router-dom";

const FormEditMhs = ({ id }) => {
  const navigate = useNavigate();
  const [selectedHari, setSelectedHari] = useState("");
  const [WaktumulaiValue, setWaktumulaiValue] = useState("");
  const [WaktuselesaiValue, setWaktuselesaiValue] = useState("");
  const [selectedKodeMK, setSelectedKodeMK] = useState("");
  const [selectedMatkul, setSelectedMatkul] = useState("");
  const [selectedDosen, setSelectedDosen] = useState("");
  const [selectedRuang, setSelectedRuang] = useState("");
  const [totalJam, setTotalJam] = useState(0);

  const [mataKuliahOptions, setMataKuliahOptions] = useState([]);
  const [dosenOptions, setDosenOptions] = useState([]);

  const handleHariChange = (event) => {
    setSelectedHari(event.target.value);
  };
  const handleWaktumulaiChange = (event) => {
    setWaktumulaiValue(event.target.value);
  };
  const handleWaktuselesaiChange = (event) => {
    setWaktuselesaiValue(event.target.value);
    setTotalJam(calculateTotalJam());
  };
  const handleKodeMKChange = (event) => {
    setSelectedKodeMK(event.target.value);
  };
  const handleMatkulChange = (event) => {
    setSelectedMatkul(event.target.value);
  };
  const handleDosenChange = (event) => {
    setSelectedDosen(event.target.value);
  };
  const handleRuangChange = (event) => {
    setSelectedRuang(event.target.value);
  };

  const calculateTotalJam = () => {
    if (!WaktumulaiValue || !WaktuselesaiValue) return 0;

    const waktuMulai = WaktumulaiValue.split(":");
    const waktuSelesai = WaktuselesaiValue.split(":");

    const jamMulai = parseInt(waktuMulai[0]);
    const menitMulai = parseInt(waktuMulai[1]);

    const jamSelesai = parseInt(waktuSelesai[0]);
    const menitSelesai = parseInt(waktuSelesai[1]);

    const totalMenitMulai = jamMulai * 60 + menitMulai;
    const totalMenitSelesai = jamSelesai * 60 + menitSelesai;

    const selisihMenit = totalMenitSelesai - totalMenitMulai;

    return Math.ceil(selisihMenit / 45);
  };

  const HariOptions = [
    { id: 0, label: "Pilih Hari" },
    { id: 1, label: "Senin" },
    { id: 2, label: "Selasa" },
    { id: 3, label: "Rabu" },
    { id: 4, label: "Kamis" },
    { id: 5, label: "Jumat" },
  ];

  const RuangOptions = [
    { id: 0, label_ruang: "Pilih Kelas" },
    { id: 1, label_ruang: "SB II/07" },
    { id: 2, label_ruang: "SB I/01" },
    { id: 3, label_ruang: "MST III/04" },
  ];

  const MatkulOptions = [
    { value: "option13", label: "--Pilih--" },
    { value: "option14", label: "KWU" },
    { value: "option15", label: "Etika" },
  ];
  const DosenOptions = [
    { value: "option16", label: "Pak Amran" },
    { value: "option17", label: "Bu Idha" },
    { value: "option18", label: "Bu Wikta" },
  ];

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(`/jadwal/${id}`);
        const data = response.data.data;
        setSelectedHari(data.hari);
        setWaktumulaiValue(data.jam_mulai);
        setWaktuselesaiValue(data.jam_akhir);
        setSelectedMatkul(data.mata_kuliah_id);
        setTotalJam(data.total_jam);
        setSelectedDosen(data.dosen_id);
        setSelectedRuang(data.ruangan);
      } catch (error) {
        console.error("Error fetching data from API:", error);
      }
    }

    fetchData();
  }, [id]);

  useEffect(() => {
    axios
      .get(`/mataKuliah`)
      .then((response) => {
        const mataKuliahData = response.data;
        setMataKuliahOptions(mataKuliahData.data);
      })
      .catch((error) => {
        setMataKuliahOptions([]);
        console.error("Error fetching Tahun Ajaran data:", error);
      });
  }, [selectedMatkul]);

  const handleSave = async () => {
    const dataToUpdate = {
      hari: selectedHari,
      jam_mulai: WaktumulaiValue,
      jam_akhir: WaktuselesaiValue,
      mata_kuliah_id: selectedMatkul,
      total_jam: totalJam,
      dosen_id: selectedDosen,
      ruangan: selectedRuang,
    };

    try {
      const response = await axios.put(
        `http://localhost:3000/api/jadwal/${id}`,
        dataToUpdate
      );

      navigate("/admin/jadwal");

      console.log("Data updated successfully:", response.data);
    } catch (error) {
      console.error("Error updating data:", error);
    }
  };

  return (
    <div className="p-2">
      <Card size={{ height: "28rem", width: "78%" }}>
        <div className="flex flex-col gap-4 ml-4 mr-4">
          <InputDropdown
            label="Hari"
            uniqueKeys="label"
            value={selectedHari}
            options={HariOptions}
            onChange={handleHariChange}
          />
          <div className="flex flex-row gap-8 justify-start items-start">
            <Input
              label="Waktu Mulai"
              type="time"
              value={WaktumulaiValue}
              onChange={handleWaktumulaiChange}
              placeholder="00:00"
            />
            <Input
              label="Waktu Selesai"
              type="time"
              value={WaktuselesaiValue}
              onChange={handleWaktuselesaiChange}
              placeholder="00:00"
            />
            <Input label="Total Jam" type="number" value={totalJam} disabled />
          </div>
          <InputDropdown
            label="Mata kuliah"
            uniqueKeys="nama_mk"
            value={selectedMatkul}
            options={MatkulOptions}
            onChange={handleMatkulChange}
          />
          <InputDropdown
            label="Dosen"
            uniqueKeys="nama_dosen"
            value={selectedDosen}
            options={DosenOptions}
            onChange={handleDosenChange}
          />
          <InputDropdown
            label="Ruangan"
            uniqueKeys="label_ruang"
            value={selectedRuang}
            options={RuangOptions}
            onChange={handleRuangChange}
          />
        </div>
        <div className="flex justify-end mt-12 mr-4">
          <Button variant="biru" onClick={handleSave}>
            Simpan
          </Button>
        </div>
      </Card>
    </div>
  );
};

export default FormEditMhs;
