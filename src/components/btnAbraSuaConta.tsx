export default function BtnAbraSuaConta({
  isTransparent,
}: {
  isTransparent?: boolean;
}) {
  return (
    <button
      className={`bg-blue-500 w-[200px] rounded cursor-pointer duration-550 ${
        isTransparent
          ? "bg-transparent border-blue-500 border-2 font-bold text-blue-500 hover:bg-blue-950"
          : "text-white hover:bg-blue-900"
      }`}
    >
      Abra sua conta
    </button>
  );
}
