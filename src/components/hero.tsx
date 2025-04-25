import BtnAbraSuaConta from "./btnAbraSuaConta";
import Image from "next/image";

export default function Hero() {
  return (
    <div className="h-screen bg-[#000d38] rounded-br-4xl text-center p-6">
      <h1 className="text-white text-4xl font-extrabold pt-12">
        Invista na sua{" "}
      </h1>
      <h1 className="text-blue-500 text-4xl font-extrabold">jornada</h1>
      <p className="text-white px-12">
        Seja qual for o seu momento de vida,{" "}
        <b>estaremos lado a lado para te guiar</b> na sua jornada de
        investimentos.
      </p>
      <BtnAbraSuaConta></BtnAbraSuaConta>
      <Image
        src="/assets/logo-banner-1.png"
        width={450}
        height={200}
        alt={""}
      ></Image>
      <Image
        className="mx-auto my-4 bg-transparent"
        src="/assets/header-home-lg.png"
        alt="Analytics"
        width={450}
        height={200}
      ></Image>
    </div>
  );
}
