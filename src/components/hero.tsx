import BtnAbraSuaConta from "./btnAbraSuaConta";
import Image from "next/image";

export function Hero() {
  return (
    <div className="h-screen rounded-br-4xl bg-linear-to-t from-slate-800 to-blue-950">
      <div className="flex flex-col items-center justify-center">
        <h3 className="text-blue-500 pt-12 ">PARA SUA EMPRESA</h3>

        <h1 className="text-4xl font-bold text-white text-center p-10 ">
          O suporte que a sua organização precisa para crescer cada vez mais
        </h1>
        <p className="text-blue-500 font-medium">De capital de giro ao IPO</p>
        <p className="text-center text-white px-4">
          Conte com um time de assessores, bankers e analistas especializados
          para te ajudar a escalar o seu negócio e levá-lo para o próximo
          patamar.
        </p>
        <BtnAbraSuaConta></BtnAbraSuaConta>

        <Image
          className="mx-auto my-4 bg-transparent"
          src="/assets/corporate-header-mobile.png"
          alt="Analytics"
          width={298}
          height={100}
        />
      </div>
    </div>
  );
}
