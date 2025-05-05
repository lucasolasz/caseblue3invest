export default function SubMenuABlue3({
  aBlue3MenuActive,
  handleABlue3SubMenuActive,
}: {
  aBlue3MenuActive: boolean;
  handleABlue3SubMenuActive: () => void;
}) {
  return (
    <div
      className={`z-2 md:group-hover:block bg-white w-full absolute md:h-[200px] border-t border-gray-200 ${
        aBlue3MenuActive ? "" : "hidden"
      }`}
      onMouseLeave={handleABlue3SubMenuActive}
    >
      <div className="flex md:text-start md:my-10 md:mx-50">
        <div className="md:flex md:flex-col md:mx-30 md:gap-5 w-fit">
          <a href="#" className="hover:text-blue-500">
            Sobre nós
          </a>
          <a href="#" className="hover:text-blue-500">
            Nossas Unidades
          </a>
          <a href="#" className="hover:text-blue-500">
            Nossos Assessores
          </a>
        </div>

        <div className="md:flex md:flex-col md:gap-5 w-fit">
          <a href="#" className="hover:text-blue-500">
            Seja um assessor Blue3
          </a>
          <a href="#" className="hover:text-blue-500">
            Traballhe Conosco
          </a>
          <a href="#" className="hover:text-blue-500">
            Sala de imprensa
          </a>
        </div>
      </div>
    </div>
  );
}
