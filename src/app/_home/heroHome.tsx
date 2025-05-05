import BtnSite from "../../components/btnSite";
import Image from "next/image";

export default function HeroHome() {
  return (
    <div className="h-[677px] w-full bg-[#000d38] rounded-br-[80px] overflow-hidden flex justify-end">
      <div className="flex items-center gap-5">
        <div className="md:max-w-[400px] md:m-10">
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
        <div className="md:h-full md:max-w-fit relative">
          <Image
            src="/assets/fundo-linhas-azul-home.png"
            alt="Linhas azuis de fundo"
            width={1000}
            height={1000}
            className="md:w-full md:h-full"
          />
          <Image
            src="/assets/header-home-lg.png" // Substitua pelo caminho da nova imagem
            alt="Mulher frente"
            width={1000} // Ajuste o tamanho conforme necessário
            height={1000}
            className="absolute md:bottom-0 md:h-full md:max-w-[897px]"
          />
        </div>
      </div>
    </div>
  );
}
