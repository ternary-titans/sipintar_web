import Button from "../atoms/Button";

const Logout = ({ setLogoutOn, setChoice }) => {
  const handleOKClick = () => {
    setChoice(true);
    setLogoutOn(false);
  };
  const handleCancelClick = () => {
    setChoice(false);
    setLogoutOn(false);
  };

  return (
    <div className="flex h-screen justify-center items-center ">
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
