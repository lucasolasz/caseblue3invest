import BtnAbraSuaConta from "../../components/btnAbraSuaConta";
import Image from "next/image";

export default function HeroHome() {
  return (
    <div className="h-[75vh] w-full bg-[#000d38] rounded-br-4xl overflow-hidden flex justify-end">
      <div className="flex items-center gap-5">
        <div className="md:max-w-[400px]">
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
        <div className="h-full md:max-w-[1240px]">
          <Image
            src="/assets/fundo-linhas-azul-home.png"
            alt="Womam Home"
            width={1000}
            height={1000}
            className="w-full h-full z-2"
          />
        </div>
      </div>
    </div>
  );
}
