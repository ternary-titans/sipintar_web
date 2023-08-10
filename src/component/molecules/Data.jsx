import { RxDashboard } from "react-icons/rx";
import { IoIosPerson } from "react-icons/io";
import { BsFillPersonFill } from "react-icons/bs";
import { SlCalender } from "react-icons/sl";
import { AiFillBook, AiTwotoneSchedule } from "react-icons/ai";
import { SiGoogleclassroom } from "react-icons/si";
import { MdCastForEducation, MdRoomPreferences } from "react-icons/md";

export const datas = [
  {
    id: 1,
    icon: <RxDashboard style={{ color: "#FFC300", fontSize: "24px" }} />,
    text: "Dashboard",
  },
  {
    id: 2,
    icon: <IoIosPerson style={{ color: "#FFC300", fontSize: "24px" }} />,
    text: "Dosen",
  },
  {
    id: 3,
    icon: <BsFillPersonFill style={{ color: "#FFC300", fontSize: "24px" }} />,
    text: "Mahasiswa",
  },
  {
    id: 4,
    icon: <SlCalender style={{ color: "#FFC300", fontSize: "24px" }} />,
    text: "Jadwal Kuliah",
  },
  {
    id: 5,
    icon: <AiFillBook style={{ color: "#FFC300", fontSize: "24px" }} />,
    text: "Kelola Mata Kuliah",
  },
  {
    id: 6,
    icon: <SiGoogleclassroom style={{ color: "#FFC300", fontSize: "24px" }} />,
    text: "Kelola Kelas",
  },
  {
    id: 7,
    icon: <MdRoomPreferences style={{ color: "#FFC300", fontSize: "24px" }} />,
    text: "Kelola Prodi",
  },

  {
    id: 8,
    icon: <MdCastForEducation style={{ color: "#FFC300", fontSize: "24px" }} />,
    text: "Kelola Jurusan",
  },
  {
    id: 9,
    icon: <AiTwotoneSchedule style={{ color: "#FFC300", fontSize: "24px" }} />,
    text: "Kelola Tahun Ajaran",
  },
];
