import BtnSite from "../../components/btnSite";
import Image from "next/image";

export default function HeroHome() {
  return (
    <div className="md:flex md:justify-center h-[700px] bg-[#000d38] md:relative">
      {/* Div central */}
      <div className="md:ml-30 md:h-full md:flex md:justify-center md:gap-10">
        <div className="md:h-full md:absolute md:right-0">
          <Image
            src="/assets/fundo-linhas-azul-home.png"
            alt="Linhas azuis de fundo"
            width={1000}
            height={1000}
            className="md:w-full md:h-full z-1"
          />
        </div>
        {/* Texto com botão */}
        <div className="md:max-w-[400px] md:h-full md:flex md:flex-col md:justify-center">
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
        {/* </div> */}
        <Image
          src="/assets/header-home-lg.png" // Substitua pelo caminho da nova imagem
          alt="Mulher frente"
          width={1000} // Ajuste o tamanho conforme necessário
          height={1000}
          className="md:bottom-0 md:h-full md:max-w-[897px] md:z-1"
        />
      </div>
    </div>
  );
}
