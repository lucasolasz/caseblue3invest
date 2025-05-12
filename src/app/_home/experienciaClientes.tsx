import BtnSite from "../../components/btnSite";
import Image from "next/image";
import SlideClientes from "./slideClientes";

export default function ExperienciaClientes() {
  return (
    <div className="md:flex md:justify-center h-[700px] bg-[#000d38] ">
      {/* Div central */}
      <div className="md:max-w-[1140px] md:flex md:justify-center flex-col my-15 h-[480px]">
        <div className="flex h-[150px]">
          <div className="flex flex-col w-full">
            <p className="text-blue-600">DEPOIMENTOS</p>
            <h1 className="text-white text-5xl py-5">
              Experiência dos nossos clientes
            </h1>
          </div>
          <div className="w-full flex justify-end">
            <button className="h-[10px]">prev</button>
            <button className="h-[10px]">next</button>
          </div>
        </div>
        <div className="h-full">
          <SlideClientes />
        </div>
      </div>
    </div>
  );
}
