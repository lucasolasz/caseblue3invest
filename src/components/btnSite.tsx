export default function BtnSite({
  isTransparent,
  children,
}: {
  isTransparent?: boolean;
  children?: React.ReactNode;
}) {
  return (
    <button
      className={`bg-blue-500 w-[200px] h-[50px] rounded cursor-pointer duration-550 ${
        isTransparent
          ? "bg-transparent border-blue-500 border-2 font-bold text-blue-500 hover:bg-transparent"
          : "text-white hover:bg-blue-900"
      }`}
    >
      {children}
    </button>
  );
}
