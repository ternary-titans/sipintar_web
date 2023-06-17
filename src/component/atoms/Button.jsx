export default Button;
function cn(...cns) {
  return cns.join(" ");
}
const variants = {
  kuning: "bg-yellow-400 hover:bg-yellow-600 text-black",
  biru: "bg-blue-700 hover:bg-blue-900 text-white",
  no: "bg-red-600 hover:bg-red-800 text-black font-medium font-bold  w-24 rounded-lg",
  yes: "bg-lime-500 hover:bg-lime-700 text-black font-medium font-bold w-24 rounded-lg",
  aktivasi:
    "bg-yellow-400 hover:bg-yellow-600 text-blue-950 font-bold uppercase",
};

function Button({ variant, ...props }) {
  return (
    <button
      className={cn(
        "py-2 px-4 rounded flex items-center justify-center",
        variants[variant]
      )}
      {...props}
    />
  );
}
