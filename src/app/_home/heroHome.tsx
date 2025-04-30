import BtnAbraSuaConta from "../../components/btnAbraSuaConta";
import Image from "next/image";

export default function HeroHome() {
  return (
    <div className="h-[90vh] bg-[#000d38] rounded-br-4xl overflow-hidden">
      <div className="h-full grid">
        {/* coluna 1  */}
        <div className="flex flex-col items-center mt-10 text-center">
          <h1 className="text-white text-4xl font-extrabold">
            Invista na sua{" "}
          </h1>
          <h1 className="text-blue-500 text-4xl font-extrabold">jornada</h1>
          <p className="text-white px-12">
            Seja qual for o seu momento de vida,{" "}
            <b>estaremos lado a lado para te guiar</b> na sua jornada de
            investimentos.
          </p>
          <BtnAbraSuaConta></BtnAbraSuaConta>
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
              className="w-[45vh]"
              src="/assets/header-home-mulher-mobile.png"
              alt="Womam Home"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
