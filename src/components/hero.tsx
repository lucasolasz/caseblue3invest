import BtnAbraSuaConta from "./btnAbraSuaConta";
import Image from "next/image";

export default function Hero() {
  return (
    <div className="relative h-[90vh] bg-[#000d38] rounded-br-4xl text-center overflow-hidden">
      <div className="grid md:grid-cols-2 h-full">
        <div className="flex flex-col justify-center m-20">
          <h1 className="text-white text-4xl font-extrabold pt-12 ">
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
        <div className="md:flex md:flex-col md:justify-center">
          <img
            className="absolute h-[90vh] w-[90vh]"
            src="/assets/fundo-linhas-azul-home.png"
            alt="Header Home"
          />
        </div>
      </div>
    </div>
  );
}
