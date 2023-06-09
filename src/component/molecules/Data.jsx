import { RxDashboard } from "react-icons/rx";
import { IoIosPerson } from "react-icons/io";
import { BsFillPersonFill } from "react-icons/bs";
import { SlCalender } from "react-icons/sl";
import { FiLogOut } from "react-icons/fi";
import { AiFillBook } from "react-icons/ai";
import { SiGoogleclassroom } from "react-icons/si";

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
    icon: <FiLogOut style={{ color: "#FFC300", fontSize: "24px" }} />,
    text: "Logout",
  },
];
