import React, { useState } from "react";
import Card from "../atoms/Card";
import Input from "../atoms/Input";
import InputDropdown from "../atoms/InputDropdown";

const FormEditMhs = () => {
  const [selectedHari, setSelectedHari] = useState("");
  const [WaktumulaiValue, setWaktumulaiValue] = useState("");
  const [WaktuselesaiValue, setWaktuselesaiValue] = useState("");
  const [selectedKodeMK, setSelectedKodeMK] = useState("");
  const [selectedMatkul, setSelectedMatkul] = useState("");
  const [selectedDosen, setSelectedDosen] = useState("");
  const [selectedRuang, setSelectedRuang] = useState("");
  const [totalJam, setTotalJam] = useState(0);

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
    { value: "option1", label: "Senin" },
    { value: "option2", label: "Selasa" },
    { value: "option3", label: "Rabu" },
    { value: "option4", label: "Kamis" },
    { value: "option5", label: "Jumat" },
  ];

  const KodeMKOptions = [
    { value: "option10", label: "--Pilih--" },
    { value: "option11", label: "23456" },
    { value: "option12", label: "34567" },
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
  const RuangOptions = [
    { value: "option19", label: "SB I/01" },
    { value: "option20", label: "SA II/06" },
    { value: "option21", label: "MST III/04" },
  ];
  return (
    <div className="p-2">
      <Card size={{ height: "28rem", width: "78%" }}>
        <div className="flex flex-col gap-4 ml-4 mr-4">
          <InputDropdown
            label="Hari"
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
            />
            <Input
              label="Waktu Selesai"
              type="time"
              value={WaktuselesaiValue}
              onChange={handleWaktuselesaiChange}
            />
            <Input label="Total Jam" type="number" value={totalJam} disabled />
          </div>
          <div className="flex flex-row gap-8 justify-start items-start">
            <InputDropdown
              label="Kode Mata kuliah"
              value={selectedKodeMK}
              options={KodeMKOptions}
              onChange={handleKodeMKChange}
            />
            <InputDropdown
              label="Mata kuliah"
              value={selectedMatkul}
              options={MatkulOptions}
              onChange={handleMatkulChange}
            />
          </div>
          <InputDropdown
            label="Dosen"
            value={selectedDosen}
            options={DosenOptions}
            onChange={handleDosenChange}
          />
          <InputDropdown
            label="Ruangan"
            value={selectedRuang}
            options={RuangOptions}
            onChange={handleRuangChange}
          />
        </div>
      </Card>
    </div>
  );
};

export default FormEditMhs;
