export default function BtnSite({
  isTransparent,
  children,
  width,
}: {
  isTransparent?: boolean;
  children?: React.ReactNode;
  width?: String;
}) {
  return (
    <button
      className={`bg-blue-500 h-[50px] !px-10 rounded cursor-pointer duration-550 ${
        width ?? ""
      } !m-0 ${
        isTransparent
          ? "bg-transparent border-blue-500 border-2 font-bold text-blue-500 hover:bg-transparent"
          : "text-white hover:bg-blue-900"
      }`}
    >
      {children}
    </button>
  );
}
