export default function SubMenuParaVoce({
  paraVoceSubMenuActive,
  handleParaVoceSubMenuActive,
}: {
  paraVoceSubMenuActive: boolean;
  handleParaVoceSubMenuActive: () => void;
}) {
  return (
    <div
      className={`z-2 md:group-hover:block bg-white w-full absolute md:h-[150px] border-t border-gray-200 ${
        paraVoceSubMenuActive ? "" : "hidden"
      }`}
      onMouseLeave={handleParaVoceSubMenuActive}
    >
      <div className="flex md:text-start md:mx-80 md:my-10">
        <div className="max-w-80">
          <h1 className="text-blue-500 md:text-xl font-bold">
            Para a sua jornada
          </h1>
          <p className="md:text-[14px] text-gray-500 mt-2">
            Conheça todas as soluções da Blue3 para a construção e evolução da
            sua jornada.
          </p>
        </div>

        <div className="md:flex md:flex-col md:mx-30 md:gap-5 w-fit">
          <a href="#" className="hover:text-blue-500">
            Renda Variável
          </a>
          <a href="#" className="hover:text-blue-500">
            Renda Fixa
          </a>
        </div>

        <div className="md:flex md:flex-col md:gap-5 w-fit">
          <a href="#" className="hover:text-blue-500">
            Produtos internacionais
          </a>
          <a href="#" className="hover:text-blue-500">
            HUB de Educação
          </a>
        </div>
      </div>
    </div>
  );
}
