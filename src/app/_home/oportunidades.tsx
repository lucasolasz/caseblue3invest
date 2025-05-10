import BtnSite from "@/components/btnSite";
import SlideJornada from "./slideJornada";

export default function Oportunidades() {
  return (
    <div className="h-[700px] bg-white flex items-center">
      {/* SlideJornada alinhado com o h1 */}
      <div className="w-full absolute ">
        <SlideJornada />
      </div>

      <div className="md:max-w-[1140px] mx-auto w-full h-[70%] flex flex-col justify-between">
        <h1 className="md:text-5xl font-extrabold text-blue-500 w-250">
          Oportunidades de investimentos para o seu perfil
        </h1>

        <BtnSite isTransparent={false} width="w-[350px]">
          Fale com um acessor Blue3
        </BtnSite>
      </div>
    </div>
  );
}
