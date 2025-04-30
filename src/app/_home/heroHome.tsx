import BtnAbraSuaConta from "../../components/btnAbraSuaConta";
import Image from "next/image";

export default function HeroHome() {
  return (
    <div className="h-[75vh] w-full bg-[#000d38] rounded-br-4xl overflow-hidden">
      <div className="h-full flex">
        <div className="flex flex-col justify-center md:pr-10 md:pl-90 md:max-w-3xl ">
          <h1 className="text-white text-4xl md:text-6xl font-extrabold">
            Invista na sua <span className="text-blue-500">jornada</span>
          </h1>
          <p className="text-white my-6 md:text-xl md:my-4 md:px-0">
            Seja qual for o seu momento de vida,{" "}
            <b>estaremos lado a lado para te guiar</b> na sua jornada de
            investimentos.
          </p>
          <BtnAbraSuaConta isTransparent={true} />
        </div>
        {/* coluna 2 */}
        <div className="relative w-full h-full">
          {/* fundo de linhas azuis */}
          <Image
            src="/assets/fundo-linhas-azul-home.png"
            alt="Linhas no fundo"
            fill
            className="object-cover bg-transparent"
            priority
          />
          {/* imagem da mulher por cima */}
          <Image
            src="/assets/header-home-lg.png"
            alt="Womam Home"
            fill
            className="object-contain z-10"
            priority
          />
        </div>
      </div>
    </div>
  );
}
