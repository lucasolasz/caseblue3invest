import { FaPlus } from "react-icons/fa";

export default function AlemDosNumeros() {
  return (
    <div className="h-[350px] bg-[#000d38] flex items-center">
      <div className="md:max-w-[1140px] mx-auto w-full h-[70%] flex">
        <div className="w-full">
          <div className="max-w-[430px]">
            <h1 className="md:text-5xl font-extrabold text-white">
              Muito além dos números
            </h1>
            <p className="text-gray-300 font-thin ">
              Um reflexo da nossa excelência em atendimento com foco total no
              cliente.
            </p>
          </div>
        </div>
        <div className="w-full flex flex-col">
          <div className="flex h-full !border-t-[0.5px] !border-b-[0.5px] border-white">
            <div className="flex items-center text-[40px] font-bold mr-4 w-[120px]">
              <span className="mr-2">
                <FaPlus className="text-blue-600" />
              </span>
              <span className="text-white">37</span>
            </div>
            <div className="flex flex-col justify-center">
              <p className="font-bold text-blue-600">mil</p>
              <p className="text-white">que confiam na Blue3</p>
            </div>
          </div>
          <div className="flex h-full">
            <div className="flex items-center text-[40px] font-bold mr-4 w-[120px]">
              <span className="mr-2">
                <FaPlus className="text-blue-600" />
              </span>
              <span className="text-white">28</span>
            </div>
            <div className="flex flex-col justify-center">
              <p className="font-bold text-blue-600">bilhões</p>
              <p className="text-white">de reais sob custódia </p>
            </div>
          </div>
          <div className="flex h-full border-t-[0.5px] border-b-[0.5px] border-white">
            <div className="flex items-center text-[40px] font-bold mr-4 w-[120px] text-white">
              93,5
            </div>
            <div className="flex flex-col justify-center">
              <p className="font-bold text-blue-600">NPS</p>
              <p className="text-white">
                alto nível de satisfação dos clientes
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
