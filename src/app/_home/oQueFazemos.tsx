import BtnSite from "@/components/btnSite";
import Image from "next/image";
export default function OQueFazemos() {
  return (
    <div className="h-[450px] bg-[#0A1D99] flex flex-col items-center">
      <div className="w-full h-[40px] bg-[#040A66]"></div>
      <div className="w-full h-[40px] bg-[#070388]"></div>
      <div className="md:max-w-[1140px] mx-auto w-full h-[70%] flex my-10">
        <div className="w-full">
          <div className="max-w-[430px] h-full flex flex-col justify-between ">
            <h1 className="md:text-3xl font-extrabold text-white">
              O que fazemos pode transformar sua vida e o seu futuro
            </h1>
            <p className="text-gray-300 font-thin ">
              Nosso propósito é ser o seu guia na jornada dos investimentos para
              você realizar mais.
            </p>

            <BtnSite width="w-[250px]"> Abra sua conta </BtnSite>
          </div>
        </div>
        <div className="w-full flex flex-col relative">
          <Image
            src="/assets/o-que-fazemos-img-video-mulher.png" // Substitua pelo caminho da nova imagem
            alt="Vídeo mulher"
            width={9000} // Ajuste o tamanho conforme necessário
            height={9000}
            className="cursor-pointer md:bottom-0 absolute right-[10%] "
          />
        </div>
      </div>
      <div className="w-full h-[40px] bg-[#070388]"></div>
      <div className="w-full h-[40px] bg-[#040A66]"></div>
    </div>
  );
}
