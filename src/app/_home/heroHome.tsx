import BtnAbraSuaConta from "../../components/btnAbraSuaConta";
import Image from "next/image";

export default function HeroHome() {
  return (
    <div className="h-[90vh] bg-[#000d38] rounded-br-4xl overflow-hidden">
      <div className="h-full grid md:grid-cols-2 justify-center">
        {/* coluna 1  */}

        <div className="flex flex-col items-center text-center md:text-left justify-center mt-10 md:mt-0">
          <div className="md:m-36">
            <h1 className="text-white text-4xl md:text-6xl font-extrabold">
              Invista na sua <span className="text-blue-500 ">jornada</span>
            </h1>
            <p className="text-white my-6 px-12 md:text-xl md:my-4 md:px-0">
              Seja qual for o seu momento de vida,{" "}
              <b>estaremos lado a lado para te guiar</b> na sua jornada de
              investimentos.
            </p>
            <BtnAbraSuaConta isTransparent={true} />
          </div>
        </div>
        {/* coluna 2  */}

        <div className="flex items-center justify-center">
          <div>
            <img
              className="w-full h-full"
              src="/assets/fundo-linhas-azul-home.png"
              alt="Linhas no fundo"
            />
          </div>

          {/* Quadrado amarelo sobreposto */}
          <div className="absolute">
            <img
              className="w-[50vh] md:w-[90vh]"
              src="/assets/header-home-mulher-mobile.png"
              alt="Womam Home"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
