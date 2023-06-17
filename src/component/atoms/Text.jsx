const Text = ({ type, text }) => {
  let className = "";

  switch (type) {
    case "title":
      className = "text-xl font-bold text-black";
      break;
    case "title2": // Jadwal Mengajar Harian
      className = "text-xl font-bold text-blue-900";
      break;
    case "title3":
      className = "text-lg font-bold text-black";
      break;
    case "label":
      className = "font-bold text-base text-black";
      break;
    case "warning":
      className = "text-red-600 text-sm-";
      break;
    case "user":
      className = "font-bold text-xl";
      break;
    case "text1":
      className = "text-base text-black";
      break;
    case "text2":
      className = "text-sm text-black";
      break;
    case "text3":
      className = "text-md text-gray-500 font-bold";
      break;

    default:
      break;
  }

  return <span className={className}>{text}</span>;
};

export default Text;
