import Button from "../atoms/Button";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Logout = ({ setLogoutOn, setChoice }) => {
  const navigate = useNavigate();

  const handleOKClick = async () => {
    try {
      setChoice(true);
      setLogoutOn(false);

      const token = localStorage.getItem("userData")
        ? JSON.parse(localStorage.getItem("userData")).token
        : null;

      const response = await axios.delete(
        `http://localhost:3000/api/users/logout`,
        {
          headers: {
            Authorization: token,
          },
        }
      );

      if (response.status === 200) {
        localStorage.removeItem("userData");
        localStorage.removeItem("kelas_mk_dosen_id");
        navigate("/login");
      }
    } catch (error) {
      console.error("Error", error);
    }
  };

  const handleCancelClick = () => {
    setChoice(false);
    setLogoutOn(false);
  };

  return (
    <div className="fixed top-0 left-0 right-0 bottom-0 flex justify-center items-center">
      <div className="flex-col justify-center bg-white py-8 px-24 shadow-md shadow-gray-400 rounded-xl text-center">
        <div className="text-lg text-black font-semibold mb-6">
          Apakah Anda yakin ingin keluar?
        </div>
        <hr className="border-indigo-900 border-b-2 my-4 " />
        <div className="flex justify-center space-x-4">
          <Button onClick={handleOKClick} variant="yes">
            YES
          </Button>
          <Button onClick={handleCancelClick} variant="no">
            NO
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Logout;
