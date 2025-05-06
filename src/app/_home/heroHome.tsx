import BtnSite from "../../components/btnSite";
import Image from "next/image";

export default function HeroHome() {
  return (
    <div className="flex items-center justify-center h-[700px] bg-[#000d38] relative w-screen">
      {/* Div base centralizada com 700px */}
      <div className="w-[1140px] h-full relative z-3 flex justify-end">
        <Image
          src="/assets/header-home-mulher-mobile.png" // Substitua pelo caminho da nova imagem
          alt="Mulher frente"
          width={1000} // Ajuste o tamanho conforme necessário
          height={1000}
          className="bg-transparent absolute md:bottom-0 md:h-full md:max-w-[750px]"
        />
      </div>

      {/* Duas divs sobrepostas centralizadas (1000px total) */}
      <div className="absolute h-full flex w-full gap-10 justify-center">
        <div
          id="textos"
          className="ml-90 w-[600px] h-full flex flex-col justify-center"
        >
          <h1 className="text-white text-4xl md:text-6xl font-extrabold">
            Invista na sua <span className="text-blue-500">jornada</span>
          </h1>
          <p className="text-white my-6 md:text-xl md:my-4 md:px-0">
            Seja qual for o seu momento de vida,{" "}
            <b>estaremos lado a lado para te guiar</b> na sua jornada de
            investimentos.
          </p>
          <BtnSite isTransparent={true}> Abra sua conta</BtnSite>
        </div>

        <div className="w-450 h-full flex items-center justify-end">
          <Image
            src="/assets/fundo-linhas-azul-home.png"
            alt="Linhas azuis de fundo"
            width={1000}
            height={1000}
            className="w-full h-full"
          />
        </div>
      </div>
    </div>
  );
}
